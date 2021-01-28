import { IUser } from "../interfaces/Users.interface";
import UserModel from '../model/Users.schema'
import { Request, Response } from 'express';

class Controller implements IUser {
	id?: string;
	name: String;
	username: String;
	email: String;
	password: String;
	collection = 'users'
	protected database: any;
	protected ISnapshot: any;

	constructor(database: any) {
		this.database = database
	}

	public getAll(req: Request, res: Response): void {
		UserModel.find()
			.then(users => res.json(users))
			.catch(error => res.status(500).json(error));
	}

	public auth(req: any, res: any): void {
		// TO DO: authentication method
		res.json({ auth: "WIP" })
	}

	public create(req: Request, res: Response): void {
		UserModel.create(req.body)
			.then(user => res.json(user))
			.catch(error => res.status(500).json(error));
	}

	public put(req: Request, res: Response): void {
		let id = { _id: req.params}
		UserModel.findByIdAndUpdate(id, req.body, {}, (err, user)=>{
			if (!user) res.status(404).send('No user found.');
			res.json(user)
		})
	}

	public get(req: Request, res: Response): void {
		let id = req.params.id
		UserModel.findById(id, (err, user)=>{
			if (!user) res.status(404).send('No user found.');
			res.json(user)
		})
	}

	public delete(req: Request, res: Response): void {
		let id = req.params.id;
		UserModel.findByIdAndDelete(id)
			.then(user => {
				if (!user) res.status(404).send('No user found.');
				res.json(user)
			})
			.catch(error => res.status(500).json(error));
	}
}

export default Controller