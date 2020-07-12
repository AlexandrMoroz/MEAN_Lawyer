import { Component, OnInit } from '@angular/core';
import { TreeNode, nodeList } from '../shared/treemodel';
import { Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-protocol',
  templateUrl: './protocol.component.html',
  styleUrls: ['./protocol.component.scss']
})
export class ProtocolComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  public  decisionTree: TreeNode;
  public answerTree: Array<TreeNode>;
  public currentNode: TreeNode;
  public isFinal = (node: TreeNode) => node.childrens == null;
  
  constructor(private router: Router,private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.answerTree = new Array<TreeNode>();
    this.decisionTree = nodeList as TreeNode;
    this.currentNode= this.decisionTree;
    this.answerTree.push(this.decisionTree);
    
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  
  public answerSubmit(node:TreeNode,navigateLink:string){
    this.answerTree.push(node);
    this.currentNode = node;
    if (!navigateLink) {
      this.router.navigate(['/'+navigateLink],{
        queryParams:{
            answers:this.answerTree
        }
      })
    }
  }

  // public reset() {
  //   // Init base node and tree here.
  //   this.decisionTree = [];
  //   this.currentNode = Object.assign({}, nodeList.chestPain);
  // }


  // public no() {
   
  // }

  

  // private pushNode():void {
  //   this.answerTree.childrens.push({
  //     node: this.currentNode,
  //     index: this.decisionTree.length
  //   });
  // }
}
