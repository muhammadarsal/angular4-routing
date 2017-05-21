import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	this.user = {
  		id: this.route.snapshot.params['id'],
  		name: this.route.snapshot.params['name']
  	};
		// by default angular doesn't reinstantiate the component if
		// the route changes to the route we're currently on. So we
		// have to subscribe to any changes in params
		this.paramsSubscription = this.route.params
			.subscribe(
				(params: Params) => {
					this.user.id = params['id'];
					this.user.name = params['name'];
				}
			)
  }

  ngOnDestroy() {
  	// the following step is not necessary
  	// angular handles this for us
  	// but in case of having our own observables
  	// we have to do this for cleanup
  	this.paramsSubscription.unsubscribe();
  }

}
