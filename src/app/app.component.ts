import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'app works!';
  serverElements = [{type:'test type', name:'test name', content:'test'}];
  routing = 'recipe';
  
  router(linkName: string) {
    this.routing = linkName;
  }

  onServerCreated(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintCreated(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onAPICreated(apiData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'api',
      name: apiData.serverName,
      content: apiData.serverContent
    });
  }

  OnFirstChange() {
    this.serverElements[0].name='changed';
  }

  OnDestroy() {
    this.serverElements.splice(0,1);
  }
}
