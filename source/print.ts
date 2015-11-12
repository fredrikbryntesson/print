/// <reference path="../typings/node/node" />
/// <reference path="server/LocalServer" />
/// <reference path="childprocess/Build" />
/// <reference path="ServerConfiguration" />

var fs = require("fs")

module Print {
	export class Program {
		private server: Server.LocalServer
		constructor() {
			this.registerKeyEvents()
			this.server = new Server.LocalServer(8082)
			this.server.start()
		}
		registerKeyEvents() {
			// CTRL+C
			process.on("SIGINT", () => {
				this.server.stop()
				process.exit()
			})
		}
	}
}
//var program = new Print.Program()

var test = '..' + __dirname
console.log(test)

var vidproc =  new Print.ServerConfiguration('ooc-vidproc', '1234', 'vidhance')
var cogneco =  new Print.ServerConfiguration('ooc-kean', '1234', 'cogneco')

var build = new Print.Childprocess.Build('736','emilwestergren', vidproc, cogneco,'master');
//var build = new Print.Childprocess.Build('736','emilwestergren', 'ooc-vidproc', 'ooc-kean','master');
//build.manage();
//build.build()
build.play();
//var json = fs.readFileSync("config.json", "utf-8")
//var config: Array<Print.ServerConfiguration> = JSON.parse(json);
//console.log(config[0].name)
