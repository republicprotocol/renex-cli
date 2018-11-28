# RenEx CLI (RenHack)

To get started, clone this repository and type
```bash
sudo npm install -g
```

1. To initialize with your private key:
```bash
renex init <private-key>
```
You will be prompted for a password to encrypt your private key after which the encrypted keystore will be stored in `./encrypted_keystore.json`.

2. To read balances of a specific token:
```bash
renex get-balances <[ETH, DGX, TUSD, REN, ZRX, OMG]>
```

3. To open orders:
```bash
renex open-order
```
You will be prompted by the CLI for further details required to open the order.