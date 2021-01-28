import Controller from '../controllers/Controller'

class Routes {
	protected Controller: Controller;
	protected App: any;
	protected Router: any;
	protected MainRoute: string = '/users'

	constructor (app:any, controller: Controller) {
		this.App = app;
		this.Controller = controller
	}

	init() {
		this.App.get(this.MainRoute + '/', (req: any, res: any) => this.Controller.getAll(req, res))
		this.App.get(this.MainRoute + '/auth', (req: any, res: any) => this.Controller.auth(req, res))
		this.App.get(this.MainRoute + '/:id', (req: any, res: any) => this.Controller.get(req, res))
		this.App.put(this.MainRoute + '/:id', (req: any, res: any) => this.Controller.put(req, res))
		this.App.post(this.MainRoute + '/', (req: any, res: any) => this.Controller.create(req, res))
		this.App.delete(this.MainRoute + '/:id', (req: any, res: any) => this.Controller.delete(req, res))
	}
}

export default Routes