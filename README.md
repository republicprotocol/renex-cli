# RenEx CLI (RenHack)

## Setup

To get started, clone this repository and type
```bash
npm install -g
```

## Init

You can either setup the CLI to use your pre-existing `keystore.json` file by running:

```bash
renex load /path/to/your/keystore.json
```

Or you can setup the CLI to use your private key by running:

```bash
renex encrypt <private-key>
```

You will be prompted for a password to encrypt your private key after which the encrypted keystore will be stored in `~/.config/renex-cli/keystore.json`.


## Usage

### Reading Balances

To read balances of a specific token:

```bash
renex balance <ETH/DGX/TUSD/REN/ZRX/OMG>
```

### Depositing and Withdrawing

To deposit:

```bash
renex deposit <amount> <ETH/DGX/TUSD/REN/ZRX/OMG>
```

To withdraw:

```bash
renex withdraw <amount> <ETH/DGX/TUSD/REN/ZRX/OMG>
```

### Opening Orders

To open buy orders:

```bash
renex buy <ETH/DGX/TUSD/REN/ZRX/OMG>
```

To open sell orders:

```bash
renex sell <ETH/DGX/TUSD/REN/ZRX/OMG>
```

You will be prompted by the CLI for further details required to open the order.

### Listing Orders

To list previously opened orders:

```bash
renex list orders
```

### Listing Balance Actions

To list previous balance actions:

```bash
renex list balance
```

### Cancelling Orders

To cancel orders:

```bash
renex cancel <order-id>
```
