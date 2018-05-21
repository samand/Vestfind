import { auth,db } from './firebase';


const Model = function () {

    this.doCreateProject = function (fields) {
        db.doPushProject(fields);
    }

    this.getUser = function () {
        console.log("getUser - Model");
        //console.log(auth);
        auth.getUser();
    }
}

export const model = new Model();