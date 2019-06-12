import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddJobService } from '../add-job.service';
import { first } from 'rxjx/operators';
import { Router } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private jobService: AddJobService) { }

  addForm: FormGroup;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      title: ['', Validators.required],
      company: ['', Validators.required],
      location: ['', Validators.required],
      nature: ['', Validators.required]
    });
  }

  onSubmit(){
    this.jobService.createJob(this.addForm.value)
    .subscribe(data => {
      this.router.navigate(['jobs']);
    });
  }

}
