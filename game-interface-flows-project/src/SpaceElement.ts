class SpaceElement extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.renderSpaces();
	}

	static get observedAttributes() {
		return ["spaces"];
	}

	attributeChangedCallback(name: string, oldValue: string, newValue: string) {
		if (name === "spaces" && oldValue !== newValue) {
			this.renderSpaces();
		}
	}

	private renderSpaces() {
		const count = parseInt(this.getAttribute("spaces") || "1", 10);
		this.innerHTML = "&ensp;".repeat(count);
	}
}

customElements.define("space-space", SpaceElement);

export default SpaceElement;
