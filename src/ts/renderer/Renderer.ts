import { Card } from "../game/core/card";
import { System } from "../game/core/System";
import { Root } from "../root";
class Renderer extends System {
	renderer: CanvasRenderingContext2D;
	canvas: HTMLCanvasElement;
	constructor() {
		super("Renderer");
		this.canvas = document.createElement("canvas");
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		this.renderer = this.canvas.getContext("2d") as CanvasRenderingContext2D;
		this.intializeCanvas(this.canvas);
	}
	intializeCanvas(canvas: HTMLCanvasElement) {
		this.canvas = canvas;
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		this.renderer.translate(this.canvas.width / 2, this.canvas.height / 2);
		window.addEventListener("resize", () => this.renderer.translate(this.canvas.width / 2, this.canvas.height / 2));
	}
	setCanvas(canvas: HTMLCanvasElement): void {
		this.canvas = canvas;
		this.renderer = this.canvas.getContext("2d") as CanvasRenderingContext2D;
		this.intializeCanvas(canvas);
	}
	getCanvas(): HTMLCanvasElement {
		return this.canvas;
	}
	drawCard(root: Root, card: Card, x: number, y: number) {
		const image = root.ImageCache.getImage(card.getSrc()) as HTMLImageElement;
		this.renderer.drawImage(image, x, y, 72, 100);
	}
}
export {Renderer}