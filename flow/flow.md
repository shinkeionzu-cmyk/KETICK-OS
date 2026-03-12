# KETICK OS - Data Flow Strategy

## 1. Modul POS -> Firebase
- Input: Pilihan item dari `inventory`
- Action: Bayar (Checkout)
- Output: 
  - Create new document in `sales` collection.
  - Update `stock` in `inventory` (Firebase Increment -qty).

## 2. Modul Inventory -> Firebase
- Action: Tambah Item / Edit Item
- Image: Stored as Base64 String in `image` field.
- Sync: Perubahan stok dikesan secara 'Real-time OnSnapshot' oleh POS.

## 3. Dashboard -> Firebase
- Query: Read `sales` collection.
- Calculation: Sum `totalValue` based on `date`.
