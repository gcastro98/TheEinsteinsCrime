import {
  ConstrainMode,
  DetailsList,
  DetailsListLayoutMode,
  IColumn,
  Icon,
  Label,
  SelectionMode,
} from "@fluentui/react";
import React from "react";
import './Form.css';
import IFormProps from "./IFormProps";
import IFormState from "./IFormState";
const _iconNames = [
  "",
  "Cancel",
  "CheckMark",
  "StatusCircleQuestionMark",
  "VerifiedBrandSolid",
  "StarburstSolid",
  "Blocked2Solid",
  "SadSolid",
  "TaskSolid",
];

export default class Form extends React.Component<IFormProps, IFormState> {
  
  private col: IColumn[];

  constructor(props: IFormProps) {
    super(props);
    this.col = [];
    let count = 0;
    this.props._users.map((item: string) => this.col.push(this.createColumn(count++, item)));
    let items: any[] = [];
    this.props._names.map((user: string) => items.push(this.generateItem(user)));
    this.state = {
      items: items
    }
  }

  public generateItem(userName: string){
    let item: any = {};
    this.props._users.map((name:string) => name === this.props._title ? item[this.props._title] = userName : item[name] = 0);
    return item;
  }

  public createColumn(
    key: number,
    name: string,

  ): IColumn {
    const render = key > 0
      ? (item: any, itemIndex: any, columnDefinition: any) => {
          return this._iconRender(
            item,
            itemIndex,
            columnDefinition,
            name
          );
        }
      : (item: any, itemIndex: any, columnDefinition: any) => {
          return <Label>{item[this.props._title]}</Label>;
        };
    return {
      key: key.toString(),
      name: name == this.props._title ? "" : name,
      fieldName: name,
      minWidth: 25,
      maxWidth: 70,
      onRender: render,
    };
  }

  public _iconRender(
    item: any,
    itemIndex: any,
    columnDefinition: any,
    field: string
  ) {
    return (
      <div
        className="div_icon"
        onClick={() => this._iconHandler(itemIndex, field)}
      >
        <Icon className="icon" iconName={_iconNames[item[field]]} />
      </div>
    );
  }

  public get(item: any[], index: number, key: string) {
    return item[index][key];
  }

  public set(item: any[], index: number, key: string, value: number) {
    item[index][key] = value;
  }

  public _iconHandler(index: number, key: string) {
    let _items = [...this.state.items];
    let length = _iconNames.length;
    let value = this.get(_items, index, key) + 1;
    this.set(_items, index, key, value % length);
    this.setState({ items: _items });
  }

  public render(): React.ReactNode {
    return (
      <>
      <h2> {this.props._title} </h2>
      <DetailsList
        items={this.state.items}
        columns={this.col}
        selectionMode={SelectionMode.none}
        layoutMode={DetailsListLayoutMode.fixedColumns}
        constrainMode={ConstrainMode.horizontalConstrained}
      />
      </>
    );
  }
}
