import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule}  from '@angular/material/icon';
import {MatFormFieldModule}  from '@angular/material/form-field';
import {MatInputModule}  from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {FormsModule} from '@angular/forms/';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
    imports:[  MatButtonModule, MatIconModule, MatInputModule, 
        MatFormFieldModule,MatDatepickerModule ,MatNativeDateModule,FormsModule,MatCheckboxModule],
    exports:[MatButtonModule , MatIconModule, 
        MatFormFieldModule, MatInputModule, MatDatepickerModule,MatNativeDateModule,FormsModule,MatCheckboxModule]

})
export class MaterialModule {}