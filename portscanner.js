function PortScanner() {
	/* intentionally left blank */
}

PortScanner.prototype.init = function() {
	
	var self = this;
	
	/* iterate over all elements with class "portscanner" */
	$(".portscanner").each(function(index) {
		
		/* split the content of the element into host and port */
		var target = $(this).text();		
		var parts = target.split(":");
		var host = parts[0];
		var port = parts[1];		
		
		/* perform the check for the host and port */
		var element = $(this);
		self.check(function(target,port,status) {	
			
			/* put the status into the element */
			element.text(status);
			console.log(target + ":" + port + ": " + status);
		}, host, port, 1000);
	});
};

/**
 * Taken from http://www.gnucitizen.org/blog/javascript-port-scanner/
 */
PortScanner.prototype.check = function (callback, target, port, timeout) {
	
	console.log("starting port check for " + target + ":" + port);

	var timeout = (timeout == null)?100:timeout;
	var img = new Image();
	
	img.onerror = function () {
		console.log("onerror " + target + ":" + port + ": img=" + img);
		if (!img) return;
		img = undefined;
		callback(target, port, 'open');
	};
	
	img.onload = function() {
		console.log("onload " + target + ":" + port + ": img=" + img);
		this.onerror();
	};
	img.src = 'http://' + target + ':' + port;
	
	setTimeout(function () {
		console.log("timeout for " + target + ":" + port + ": img=" + img);
		if (!img) {
			console.log("  but loading already succeeded");
			return;
		}
		/* set the image to something we know is not blocked to end the request */
		img.onerror = function() {};
		img.src = "http://github.com:80";
		callback(target, port, 'closed');
	}, timeout);
};

var portscanner = new PortScanner();
