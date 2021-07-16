function eachNode(rootNode, callback) {
	if (!callback) {
		const nodes = []
		eachNode(rootNode, function(node) {
			nodes.push(node)
		})
		return nodes
	}

	if (false === callback(rootNode)) {
		return false
  }

	if (rootNode.hasChildNodes()) {
		const nodes = rootNode.childNodes
		for (let i = 0, l = nodes.length; i < l; ++i) {
			if (false === eachNode(nodes[i], callback)) {
				return
            }
        }
	}
}