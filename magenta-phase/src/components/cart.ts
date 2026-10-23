// Minimal client-side shopping cart backed by localStorage.
type CartItem = {
	id: string;
	title: string;
	price: number;
	quantity?: number;
};

const STORAGE_KEY = 'agentic-fashion:cart';

function read(): CartItem[] {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		return raw ? (JSON.parse(raw) as CartItem[]) : [];
	} catch {
		return [];
	}
}

function write(items: CartItem[]): void {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function addToCart(id: string, title: string, price: number): number {
	const items = read();
	const existing = items.find((item) => item.id === id);
	if (existing) {
		existing.quantity = (existing.quantity ?? 1) + 1;
	} else {
		items.push({ id, title, price });
	}
	write(items);
	return items.length;
}

export function removeFromCart(id: string): void {
	const items = read().filter((item) => item.id !== id);
	write(items);
}

export function cartCount(): number {
	return read().reduce((sum, item) => sum + (item.quantity ?? 1), 0);
}
