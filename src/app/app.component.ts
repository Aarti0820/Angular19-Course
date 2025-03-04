import { Component, ViewEncapsulation } from '@angular/core';
import { CounterComponent } from "./counter/counter.component";
import { HostListnerComponent } from "./host-listner/host-listner.component";
import { EncapsulationFirstComponent } from "./encapsulation-first/encapsulation-first.component";
import { EncapsulationSecondComponent } from "./encapsulation-second/encapsulation-second.component";
import { PreserveWhiteSpaceComponent } from "./preserve-white-space/preserve-white-space.component";
import { IfDirectiveComponent } from "./if-directive/if-directive.component";
import { SwitchCaseComponent } from "./switch-case/switch-case.component";
import { ForDirectivesComponent } from "./for-directives/for-directives.component";
import { HeaderComponent } from "./components/header/header.component";
import { NgclassDirectiveComponent } from "./ngclass-directive/ngclass-directive.component";
import { NgStyleComponent } from "./ng-style/ng-style.component";
import { InterpolationComponent } from "./interpolation/interpolation.component";
import { InterpolationErrorHandlingComponent } from "./interpolation-error-handling/interpolation-error-handling.component";
import { AttributeBindingComponent } from "./attribute-binding/attribute-binding.component";
import { StyleBindingComponent } from "./style-binding/style-binding.component";
import { ClassBindingComponent } from "./class-binding/class-binding.component";
import { PropertyBindingComponent } from "./property-binding/property-binding.component";
import { EventBindingComponent } from "./event-binding/event-binding.component";
import { TwoWayDatabindingComponent } from "./two-way-databinding/two-way-databinding.component";
import { TwoWayComponent } from "./two-way/two-way.component";
import { PipeComponent } from "./pipe/pipe.component";
import { NewPipeComponent } from "./new-pipe/new-pipe.component";
import { CustomPipeComponent } from "./custom-pipe/custom-pipe.component";
import { LoggerService } from './logger.service';
import { InjectableServiceComponent } from "./injectable-service/injectable-service.component";
import { ScopedServiceComponent } from "./scoped-service/scoped-service.component";
import { UtilityServiceComponent } from "./utility-service/utility-service.component";
import { GetApiMethodComponent } from "./get-api-method/get-api-method.component";


@Component({
  
  selector: 'app-root',
  imports: [CounterComponent, HostListnerComponent, EncapsulationFirstComponent, PreserveWhiteSpaceComponent, IfDirectiveComponent, SwitchCaseComponent, ForDirectivesComponent, HeaderComponent, NgclassDirectiveComponent, NgStyleComponent, InterpolationComponent, InterpolationErrorHandlingComponent, AttributeBindingComponent, StyleBindingComponent, ClassBindingComponent, PropertyBindingComponent, EventBindingComponent, TwoWayDatabindingComponent, TwoWayComponent, NewPipeComponent, CustomPipeComponent, InjectableServiceComponent, UtilityServiceComponent, GetApiMethodComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'first-project';
}
