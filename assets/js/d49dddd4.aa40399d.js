"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[66784],{8386:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var o=t(74848),a=t(28453);const s={},r="Python SDK",p={id:"developers/dapps/sdk/python-sdk",title:"Python SDK",description:"The Python SDK allows developers to interact with the Casper Node using Python 3.9+. This page covers various examples of using this SDK.",source:"@site/docs/developers/dapps/sdk/python-sdk.md",sourceDirName:"developers/dapps/sdk",slug:"/developers/dapps/sdk/python-sdk",permalink:"/developers/dapps/sdk/python-sdk",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1727970104e3,frontMatter:{},sidebar:"developers",previous:{title:"Go SDK",permalink:"/developers/dapps/sdk/go-sdk"},next:{title:"dApp Technology Stack",permalink:"/developers/dapps/technology-stack"}},i={},c=[{value:"Installation",id:"installation",level:2},{value:"Tests",id:"tests",level:2},{value:"Usage Examples",id:"usage-examples",level:2},{value:"Sending a transfer",id:"sending-a-transfer",level:3},{value:"Staking",id:"staking",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"python-sdk",children:"Python SDK"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"https://github.com/casper-network/casper-python-sdk",children:"Python SDK"})," allows developers to interact with the Casper Node using Python 3.9+. This page covers various examples of using this SDK."]}),"\n",(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(n.p,{children:"To install the library, run:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"\n    pip3 install pycspr\n"})}),"\n",(0,o.jsx)(n.h2,{id:"tests",children:"Tests"}),"\n",(0,o.jsxs)(n.p,{children:["You can find examples of testing this library with python scripts in the ",(0,o.jsx)(n.code,{children:"test"})," directory. To run the tests, we recommend the ",(0,o.jsx)(n.em,{children:"pytest"})," library:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"    pytest ./tests\n"})}),"\n",(0,o.jsx)(n.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,o.jsx)(n.p,{children:"In this section, we outline a couple of essential tasks you can accomplish with the Python SDK:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"#sending-a-transfer",children:"Sending a transfer"})," between two purses"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"#staking",children:"Staking"})," tokens with a validator"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["For further examples, take a look at the ",(0,o.jsx)(n.a,{href:"https://github.com/casper-network/casper-python-sdk/tree/main/how_tos",children:"How-tos"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"sending-a-transfer",children:"Sending a transfer"}),"\n",(0,o.jsxs)(n.p,{children:["This example shows you how to define and transfer funds between purses on a Casper network. Replace the ",(0,o.jsx)(n.em,{children:"path_to_cp2_account_key"})," in the code below with the receiver's account public key."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'    import os\n    import pathlib\n    import random\n    import typing\n\n    import pycspr\n    from pycspr.client import NodeClient\n    from pycspr.client import NodeConnectionInfo\n    from pycspr.crypto import KeyAlgorithm\n    from pycspr.types import PrivateKey\n    from pycspr.types import Deploy\n    from pycspr.types import PublicKey\n\n    # path to cp1 secret key - defaults to NCTL user 1.\n    path_to_cp1_secret_key = pathlib.Path(os.getenv("NCTL")) / "assets" / "net-1" / "users" / "user-1" / "secret_key.pem"\n\n    # type of cp1 secret key - defaults to ED25519.\n    type_of_cp1_secret_key = KeyAlgorithm.ED25519.name,\n\n    # path to cp2 account key - defaults to NCTL user 2.\n    path_to_cp2_account_key = pathlib.Path(os.getenv("NCTL")) / "assets" / "net-1" / "users" / "user-2" / "public_key_hex"\n\n    # name of target chain - defaults to NCTL chain.\n    chain_name = "casper-net-1"\n\n    # host address of target node - defaults to NCTL node 1.\n    node_host = "localhost"\n\n    # Node API JSON-RPC port - defaults to 11101 @ NCTL node 1.\n    node_port_rpc = 11101\n\n    def _main(node_host, node_port_rpc, path_to_cp1_secret_key, type_of_cp1_secret_key,path_to_cp2_account_key, chain_name):\n        """Main entry point.\n        :param args: Parsed command line arguments.\n        """\n        # Set node client.\n        client = _get_client(node_host, node_port_rpc)\n\n        # Set counter-parties.\n        cp1, cp2 = _get_counter_parties(path_to_cp1_secret_key, type_of_cp1_secret_key,path_to_cp2_account_key)\n\n        # Set deploy.\n        deploy: Deploy = _get_deploy(chain_name, cp1, cp2)\n\n        # Approve deploy.\n        deploy.approve(cp1)\n\n        # Dispatch deploy to a node.\n        client.deploys.send(deploy)\n\n        #If deploy is successful send the indication\n        print(f"Deploy dispatched to node [{node_host}]: {deploy.hash.hex()}")\n\n\n    def _get_client(node_host, node_port_rpc) -> NodeClient:\n        """Returns a pycspr client instance.\n        """\n        return NodeClient(NodeConnectionInfo(\n            host=node_host,\n            port_rpc=node_port_rpc,\n        ))\n\n\n    def _get_counter_parties(path_to_cp1_secret_key, type_of_cp1_secret_key,path_to_cp2_account_key) -> typing.Tuple[PrivateKey, PublicKey]:\n        """Returns the 2 counter-parties participating in the transfer.\n        """\n        cp1 = pycspr.parse_private_key(\n            path_to_cp1_secret_key,\n            type_of_cp1_secret_key,\n            )\n        cp2 = pycspr.parse_public_key(\n            path_to_cp2_account_key\n            )    \n\n        return cp1, cp2\n\n\n    def _get_deploy(chain_name, cp1: PrivateKey, cp2: PublicKey) -> Deploy:\n        """Returns transfer deploy to be dispatched to a node.\n        """\n        # Set standard deploy parameters.\n        deploy_params = pycspr.create_deploy_parameters(\n            account = cp1,\n            chain_name = chain_name\n            )\n\n        # Set deploy.\n        deploy = pycspr.create_native_transfer(\n            params = deploy_params,\n            amount = int(2.5e9),\n            target = cp2.account_hash,\n            correlation_id = random.randint(1, 1e6)\n            )\n\n        return deploy\n\n\n    # Entry point.\n    if __name__ == \'__main__\':\n        _main(node_host, node_port_rpc, path_to_cp1_secret_key, type_of_cp1_secret_key, path_to_cp2_account_key, chain_name)\n'})}),"\n",(0,o.jsx)(n.h3,{id:"staking",children:"Staking"}),"\n",(0,o.jsx)(n.p,{children:"This example shows you how to define and stake funds with a validator."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'\n    import os\n    import pathlib\n\n    import pycspr\n    from pycspr.client import NodeClient\n    from pycspr.client import NodeConnectionInfo\n    from pycspr.crypto import KeyAlgorithm\n    from pycspr.types import Deploy\n    from pycspr.types import PrivateKey\n\n    # path to cp1 secret key - defaults to NCTL user 1.\n    path_to_validator_secret_key = pathlib.Path(os.getenv("NCTL")) / "assets" / "net-1" / "users" / "user-1" / "secret_key.pem"\n\n    # type of cp1 secret key - defaults to ED25519.\n    type_of_validator_secret_key = KeyAlgorithm.ED25519.name\n\n    # path to session code wasm binary - defaults to NCTL bin/eco/add_bid.wasm.\n    path_to_wasm = pathlib.Path(os.getenv("NCTL")) / "assets" / "net-1" / "bin" / "auction" / "add_bid.wasm"\n\n    # amount to stake, i.e. bond, into the network.\n    amount = int(2.5e9)\n\n    # amount to charge delegators for service provision.\n    delegation_rate = 2\n\n    # name of target chain - defaults to NCTL chain.\n    chain_name = "casper-net-1"\n\n    # host address of target node - defaults to NCTL node 1.\n    node_host = "localhost"\n\n    # Node API JSON-RPC port - defaults to 11101 @ NCTL node 1.\n    node_port_rpc = 11101\n\n    def _main(node_host, node_port_rpc, path_to_validator_secret_key, type_of_validator_secret_key, chain_name, amount, delegation_rate, path_to_wasm):\n        """Main entry point.\n        :param args: Parsed command line arguments.\n        """\n        # Set node client.\n        client: NodeClient = _get_client(node_host, node_port_rpc)\n\n        # Set validator key.\n        validator: PrivateKey = pycspr.parse_private_key(\n            path_to_validator_secret_key,\n            type_of_validator_secret_key,\n            )\n\n        # Set deploy.\n        deploy: Deploy = _get_deploy(validator, chain_name, amount, delegation_rate, path_to_wasm)\n\n        # Approve deploy.\n        deploy.approve(validator)\n\n        # Dispatch deploy to a node.\n        client.deploys.send(deploy)\n\n        print(f"Deploy dispatched to node [{node_host}]: {deploy.hash.hex()}")\n\n\n    def _get_client(node_host, node_port_rpc) -> NodeClient:\n        """Returns a pycspr client instance.\n        """\n        return NodeClient(NodeConnectionInfo(\n            host = node_host,\n            port_rpc = node_port_rpc,\n        ))\n\n\n    def _get_deploy(validator: PrivateKey, chain_name, amount, delegation_rate, path_to_wasm) -> Deploy:\n        """Returns delegation deploy to be dispatched to a node.\n        """\n        # Set standard deploy parameters.\n        deploy_params = pycspr.create_deploy_parameters(\n            account = validator,\n            chain_name = chain_name\n            )\n\n        # Set deploy.\n        deploy = pycspr.create_validator_auction_bid(\n            params = deploy_params,\n            amount = amount,\n            delegation_rate = delegation_rate,\n            public_key = validator.as_public_key(),\n            path_to_wasm = path_to_wasm\n            )\n\n        return deploy\n\n\n    # Entry point.\n    if __name__ == \'__main__\':\n        _main(node_host, node_port_rpc, path_to_validator_secret_key, type_of_validator_secret_key, chain_name, amount, delegation_rate, path_to_wasm)\n'})})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>p});var o=t(96540);const a={},s=o.createContext(a);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);