import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    p{
    color:red;
    border:1px solid blue;
    padding: 5px;
}
`]
})
export class ServerComponent {
  serverId : number = 10;
  serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}
