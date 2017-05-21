import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
  	private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
  	// navigate() doesn't know which link we're currently on
  	// to tell it the current route we need to pass a configuration
  	// object as a second argument with relativeTo property

  	// if we don't specify relativeTo, our path is always relative to
  	// the root path

  	// now the following line of code will break the app:
  	// this.router.navigate(['servers'], {relativeTo: this.route});
  }

}
