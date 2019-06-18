

class TopicVallidation {

    constructor() { 
    }

    getTopic = (req, res, next) => {

        console.log("INDEX FILE  TopicController :: getTopic");
        next();
    }

    addTopic = () => {
        console.log("TopicController :: addTopic");
    }
}

export default new TopicVallidation();