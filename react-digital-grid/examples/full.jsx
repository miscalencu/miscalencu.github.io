import React, { Component } from 'react';
import { Grid, Column } from 'react-digital-grid';
import { _data } from 'scripts/all';
import '../../styles/bootstrap-ui.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVenus, faMars } from '@fortawesome/free-solid-svg-icons';

export default class Full extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      count: null,
      pageSize: 10,
      pageNr: 1,
      skin: 'default',

      skins: [
        { val: 'none', text: 'None' },
        { val: 'default', text: 'Default Skin' },
        { val: 'classic', text: 'Classic Skin' },
        { val: 'bootstrap', text: 'Bootstrap' }
      ],
      gridInfo : {}
    };

    this.loadData = this.loadData.bind(this);
    this.onSelectionChange = this.onSelectionChange.bind(this);
    this.handleOnCellClick = this.handleOnCellClick.bind(this);
  }

  componentDidMount() {
    this.loadData(this.state.pageSize, this.state.pageNr);
  }

  loadData(pageSize, pageNr, orderBy, orderDir) {
    this.setState(
      {
        loading: true,
        gridInfo : Object.assign(this.state.gridInfo, {
          pageNr: pageNr,
          pageSize: pageSize,
          orderBy: orderBy,
          orderDir: orderDir
        })
      },
      _data.get(
        {
          url: `${process.env.PUBLIC_URL}/data/generated.json`,
          pageNr: pageNr,
          pageSize: pageSize,
          orderBy: orderBy,
          orderDir: orderDir
        },
        (data, count) => {
          this.setState({
            data: data,
            loading: false,
            dataCount: count,
            pageNr: pageNr,
            pageSize: pageSize,
            orderBy: orderBy,
            orderDir: orderDir
          });
        }
      )
    );
  }

  onSelectionChange (selectedKeys, selectedItems, selectedLast) {
    this.setState(
      Object.assign(this.state.gridInfo, {
        selectedKeys : selectedKeys,
        selectedItems: '... all data available here ...',
        selectedLast : selectedLast
      })
    );
  };

  handleOnCellClick = (field, valPlain, dataItem, ev) => {
    this.setState(
      Object.assign(this.state.gridInfo, 
        { 
          clickedData: 
          {
            field: field,
            valPlain: valPlain,
            dataItem: ' ... all data available here ...'
          }
        }));
  }

  render() {
    return (
      <>
        <div className='form'>
          <div className='form-group'>
            <label>Skin</label>
            <select value={this.state.skin} onChange={e => this.setState({ skin: e.target.value })}>
              {this.state.skins.map(option => {
                return (
                  <option key={option.val} value={option.val}>
                    {option.text}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        { /* this enabled Bootstrap in this container only if skin = "bootstrap" */ }
        <div style={{ float: 'left' }} className={ this.state.skin === "bootstrap" ? "bootstrap-ui" : ""}>
          <Grid
            id='full'
            className='example-grid'
            skin={this.state.skin}
            loading={this.state.loading}
            emptyText='No data to display at this point.'
            keyField="guid"
            data={this.state.data}
            isSelectable
            onSelectionChange={this.onSelectionChange}
            isExpandable
            onCellClick={this.handleOnCellClick}
            expandedRowContent={row => (
              <pre style={{ maxWidth: 500, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {JSON.stringify(row, null, 4)}
              </pre>
            )}
            dataCount={this.state.dataCount}
            pageNr={this.state.pageNr}
            pageSize={this.state.pageSize}
            orderBy={this.state.orderBy}
            orderDir={this.state.orderDir}
            onStateChange={newState =>
              this.loadData(newState.pageSize, newState.pageNr, newState.orderBy, newState.orderDir)
            }
          >
            <Column
              header='Picture'
              field='picture'
              className='center'
              renderer={item => {
                return <img src={item.picture} height='36' className='profilepic' alt={item.name} />;
              }}
            ></Column>
            <Column header='Name' field='name' isClickable className='bold link' sortable={true}></Column>
            <Column 
              header='Gender' 
              className='center'
              isClickable 
              field='gender'
              renderer={item => {
                return <FontAwesomeIcon size='lg' icon={item.gender === 'male' ? faMars : faVenus} />;
              }}></Column>
            <Column header='Eye Color' isClickable className="link" field='eyeColor'></Column>
            <Column header='Age' field='age' className='bold' sortable={true}></Column>
            <Column header='Address' field='address' className='italic'></Column>
            <Column header='Phone' field='phone'></Column>
          </Grid>
        </div>
        <div className='info'>
            <b>Grid Properties:</b>
            <pre>
              {JSON.stringify(this.state.gridInfo, null, 4)}
            </pre>
        </div>
      </>
    );
  }
}
