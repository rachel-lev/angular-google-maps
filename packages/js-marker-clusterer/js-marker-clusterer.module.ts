import { AgmCoreModule } from '@agm/core/packages/core';
import { NgModule } from '@angular/core';
import { AgmMarkerCluster } from './directives/marker-cluster';

@NgModule({
  imports: [AgmCoreModule],
  declarations: [AgmMarkerCluster],
  exports: [AgmMarkerCluster],

})
export class AgmJsMarkerClustererModule {
}
