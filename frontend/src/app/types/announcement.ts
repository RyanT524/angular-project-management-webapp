import { BasicUser, defaultBasicUser } from "./basic-user";

export default interface Announcement {
	id?: number;
	date: Date;
	title: string;
	message: string;
	author: BasicUser;
}

export function defaultAnnouncement(): Announcement {
	return {
		id: -1,
		date: new Date(),
		title: '',
		message: '',
		author: defaultBasicUser()
	}
}