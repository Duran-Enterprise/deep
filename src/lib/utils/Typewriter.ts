/* eslint-disable @typescript-eslint/no-explicit-any */
export default function typewriter(node: any, { delay = 0, speed = 70, reversed = false }: any) {
	const textNodes = getAllTextNodes(node);
	if (!textNodes.length) {
		throw new Error(`This transition only works on elements with text nodes`);
	}

	let totalLength = 0;
	const ranges = textNodes.map((textNode) => {
		const range = [totalLength, totalLength + textNode.textContent.length];
		totalLength += textNode.textContent.length;
		const text = textNode.textContent;
		textNode.textContent = '';
		return { textNode, range, text };
	});

	let currentRangeIndex = reversed ? ranges.length - 1 : 0;
	function getCurrentRange(i: number) {
		if (!reversed) {
			while (ranges[currentRangeIndex].range[1] < i && currentRangeIndex < ranges.length) {
				const { textNode, text } = ranges[currentRangeIndex];
				textNode.textContent = text;
				currentRangeIndex++;
			}
		} else {
			while (ranges[currentRangeIndex].range[0] > i && currentRangeIndex >= 0) {
				const { textNode } = ranges[currentRangeIndex];
				textNode.textContent = '';
				currentRangeIndex--;
			}
		}

		return ranges[currentRangeIndex];
	}

	const duration = totalLength * speed;

	return {
		delay,
		duration,
		tick: (t: number) => {
			const progress = ~~(totalLength * t);
			const { textNode, range, text } = getCurrentRange(progress);
			const [start, end] = range;
			const textLength = ((progress - start) / (end - start)) * text.length;
			textNode.textContent = text.slice(0, textLength);
		}
	};
}

function getAllTextNodes(node: { nodeType: number; hasChildNodes: () => any; childNodes: any }) {
	if (node.nodeType === 3) {
		return [node];
	} else if (node.hasChildNodes()) {
		const list: any[] = [];
		for (const child of node.childNodes) {
			getAllTextNodes(child).forEach((textNode) => list.push(textNode));
		}
		return list;
	}
	return [];
}
