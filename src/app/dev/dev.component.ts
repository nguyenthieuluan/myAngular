import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {default as notify} from 'devextreme/ui/notify';
import {DxPopoverComponent} from 'devextreme-angular';
import {Customer, CustomerService} from './service/customer.service';


@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.css'],
  providers: [
    CustomerService
  ]
})
export class DevComponent implements OnInit, AfterViewInit {

  @ViewChild(DxPopoverComponent) popover: DxPopoverComponent;
  okButtonOptions: any;
  applyButtonOptions: any;
  deleteButtonOptions: any;
  doneButtonOptions: any;
  formData = { email: '', password: '' };
  emailControl: AbstractControl;
  passwordControl: AbstractControl;
  emailControlIsChanged = false;
  passwordControlIsChanged = false;
  form: FormGroup;
  demoItems: any[];
  tabContent: string;
  tabs = [
    {
      id: 0,
      text: 'user',
      icon: 'user',
      content: 'User tab content'
    }, {
      id: 1,
      text: 'comment',
      icon: 'comment',
      content: 'Comment tab content'
    }, {
      id: 2,
      text: 'find',
      icon: 'find',
      content: 'Find tab content'
    }
  ];
  customers: Customer[];
  tabPanelItems: Customer[];



  constructor(
    private customerService: CustomerService,
  ) {
    this.okButtonOptions = {
      text: 'OK',
      type: 'normal',
      onClick: function (e) {
        notify('The OK button was clicked');
      },
    };
    this.applyButtonOptions = {
      text: "Apply",
      type: "success",
      onClick: function (e) {
        notify("The Apply button was clicked");
      }
    };

    this.doneButtonOptions = {
      text: "Done",
      type: "default",
      onClick: function (e) {
        notify("The Done button was clicked");
      }
    };

    this.deleteButtonOptions = {
      text: "Delete",
      type: "danger",
      onClick: function (e) {
        notify("The Delete button was clicked");
      }
    };

    this.demoItems = ['nguyễn thiệu luân', 'legendary', 'awesome', 'võ thị tí tri' ];
    this.tabContent = this.tabs[0].content;
  }

  ngOnInit() {
    this.customers = this.customerService.getCustomers();
    this.tabPanelItems = this.customers.slice(0, 4);
    this.form = new FormGroup({
      emailControl: new FormControl('', Validators.compose([Validators.required, CustomValidator.mailFormat])),
      passwordControl: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)]))
    });
    this.emailControl = this.form.controls['emailControl'];
    this.passwordControl = this.form.controls['passwordControl'];
  }
  ngAfterViewInit() {
    this.form.controls['emailControl'].valueChanges.subscribe((value) => {
      this.emailControlIsChanged = true;
      this.formData.email = value;
    });
    this.form.controls['passwordControl'].valueChanges.subscribe((value) => {
      this.passwordControlIsChanged = true;
      this.formData.password = value;
    });
  }
  showPopover() {
    this.popover.instance.show();
  }
  selectTab(e) {
    this.tabContent = this.tabs[e.itemIndex].content;
  }
  toggleFormControlsState(e) {
    if (e.value) {
      this.emailControl.disable();
      this.passwordControl.disable();
    } else {
      this.emailControl.enable();
      this.passwordControl.enable();
    }
  }
}
export class CustomValidator {
  static mailFormat(control: FormControl) {
    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    if (control.value && control.value.length && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
      return { 'incorrectMailFormat': true };
    }

    return null;
  }
}
