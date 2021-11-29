import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-kitchen-filter',
  templateUrl: './kitchen-filter.component.html',
  styleUrls: ['./kitchen-filter.component.scss']
})
export class KitchenFilterComponent implements OnInit {

  @ViewChild('toggleImg') toggleImg!: ElementRef;
  @ViewChild('menu') menu!: ElementRef;

  // selectedOption = new FormControl('all');
  isMenuOpen = false;
  form:FormGroup;


  constructor(
    private fb: FormBuilder,
    private renderer: Renderer2
  ) {
    this.form = this.fb.group({
      selectedOption: ['all']
    })
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target !== this.toggleImg.nativeElement && e.target !== this.menu.nativeElement && !this.menu.nativeElement.contains(e.target)) {
        this.isMenuOpen = false;
      }
    });
  }

  get getSelectedOption () {
    return this.form.get('selectedOption')?.value;
  }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
