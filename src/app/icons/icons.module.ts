import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { XIconComponent } from "./x-icon/x-icon.component";
import { EditIconComponent } from "./edit-icon/edit-icon.component";

@NgModule({
  declarations: [XIconComponent, EditIconComponent],
  imports: [CommonModule],
  exports: [XIconComponent, EditIconComponent],
})
export class IconsModule {}
