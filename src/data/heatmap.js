const elasticsearch = require('elasticsearch');
const settings = require("../config/settings");
const elasticsearchConfig = settings.elasticsearchConfig
const client = new elasticsearch.Client({ hosts: [ 'http://' + elasticsearchConfig.user + ':' + elasticsearchConfig.password + '@' + elasticsearchConfig.serverUrl ] });

let exportedMethods = {

    async getAllHeatmap() {
        let d = await client.search({
          index: 'heatmap',
          type: '_doc',
          size: 10000
        })

        let l = []

        d.hits.hits.forEach( (o, i) => {
            l.push(o["_source"])
        })
        
        return l
    },

};

module.exports = exportedMethods;
