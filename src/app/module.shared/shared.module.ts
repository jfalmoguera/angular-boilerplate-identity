import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSidenavModule, MatListModule, MatSelectModule, MatTableModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    MatSelectModule,
    MatTableModule,
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    MatSelectModule,
    MatTableModule,
  ]
})
export class SharedModule { }
