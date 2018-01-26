import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addreceipe',
  templateUrl: './addreceipe.component.html',
  styleUrls: ['./addreceipe.component.css']
})
export class AddreceipeComponent implements OnInit {
  addForm: FormGroup;
  formData = new FormData();
  url;
  file;
  constructor(public _fb: FormBuilder) { }

  ngOnInit() {

    this.addForm = this._fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(5)]],
      file: ['', [Validators.required]],
      ingredientsList: this._fb.array([
          this.initAddress('ingredientName')
      ]),
      prepartionSteps: this._fb.array([
        this.initAddress('steps')
      ])
    });
  }

  initAddress(name) {
    console.log(name);
    if (name === 'ingredientName') {
      return this._fb.group({
      ingredientName : ['', Validators.required],
      });
    }else {
      return this._fb.group({
        steps : ['', Validators.required],
        });
    }
  }

  addField(container, name) {
    const control = <FormArray>this.addForm.controls[container];
    control.push(this.initAddress(name));
  }

  removeField(i: number, container) {
    // remove address from the list
    const control = <FormArray>this.addForm.controls[container];
    control.removeAt(i);
  }

  save(data) {
      // this.formData.append('image',  this.file, this.file.name);
      let p = this.addForm.value['prepartionSteps'];
      console.log(p[1])
      p.forEach((element,key) => {
        console.log(element,key);
      });
      for(var c in p){
        console.log(c.steps);
        // this.formData.append(c, p[c]);
      }
      return;
      for(let item in this.addForm.value){
        if(item == "prepartionSteps" || item == "ingredientsList"){
          var p = this.addForm.value[item];
          for(var c in p){
            console.log(c);
            this.formData.append(c, p[c]);
          }
        }else{
        this.formData.append(item, this.addForm.value[item]);
        }
      }
      console.log(this.formData.getAll('steps'));
  }

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
       this.file = event.target.files[0];
      reader.readAsDataURL(event.target.files[0]);
      console.log(event.target.result);
      reader.onload = (event:any) => {
        this.url = event.target.result;
        console.log(this.url);
        // this.addForm.get('file').setValue({
        //   filename: file.name,
        //   filetype: file.type,
        //   value: 'dasdasdasdsa'
        // })
      }
  
      
    }
  }



}
