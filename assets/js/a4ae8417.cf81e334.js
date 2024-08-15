"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[9314],{347:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=s(4848),o=s(8453),r=s(6025);const i={title:"Local Network Setup"},l="Setting up a Local Network with NCTL",a={id:"developers/dapps/setup-nctl",title:"Local Network Setup",description:"NCTL stands for network/node control. NCTL is a CLI application you can use to set up and control multiple local Casper nodes during development. Many developers wish to spin up relatively small test networks to localize their testing before deploying to the blockchain. Adopting a standardized approach in the community is also helpful for troubleshooting and reporting issues.",source:"@site/docs/developers/dapps/setup-nctl.md",sourceDirName:"developers/dapps",slug:"/developers/dapps/setup-nctl",permalink:"/docs-redux/docs-redux/developers/dapps/setup-nctl",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Local Network Setup"},sidebar:"developers",previous:{title:"Estimating Gas Costs with Speculative Execution",permalink:"/docs-redux/docs-redux/developers/dapps/speculative-exec"},next:{title:"Local Network Testing",permalink:"/docs-redux/docs-redux/developers/dapps/nctl-test"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Video Tutorial",id:"video-tutorial",level:2},{value:"Installing a Virtual Environment",id:"installing-a-virtual-environment",level:2},{value:"Setting up the Network",id:"setting-up-the-network",level:2},{value:"Stopping the Network",id:"stopping-the-network",level:2},{value:"Next Steps",id:"next-steps",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"setting-up-a-local-network-with-nctl",children:"Setting up a Local Network with NCTL"})}),"\n","\n",(0,t.jsxs)(n.p,{children:["NCTL stands for network/node control. ",(0,t.jsx)(n.a,{href:"https://github.com/casper-network/casper-node/tree/master/utils/nctl",children:"NCTL"})," is a CLI application you can use to set up and control multiple local Casper nodes during development. Many developers wish to spin up relatively small test networks to localize their testing before deploying to the blockchain. Adopting a standardized approach in the community is also helpful for troubleshooting and reporting issues."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["You have completed the ",(0,t.jsx)(n.a,{href:"/docs-redux/docs-redux/developers/writing-onchain-code/getting-started",children:"Getting Started section"}),", which shows you how to install your development environment, including tools like ",(0,t.jsx)(n.em,{children:"CMake"})," (version 3.1.4+), ",(0,t.jsx)(n.em,{children:"Cargo"}),", and ",(0,t.jsx)(n.em,{children:"Rust"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Make sure you have ",(0,t.jsx)(n.a,{href:"https://www.python.org/downloads/",children:"Python 3 installed"})," if your operating system does not include Python."]}),"\n",(0,t.jsxs)(n.li,{children:["To run NCTL, you will also need ",(0,t.jsx)(n.a,{href:"https://www.gnu.org/savannah-checkouts/gnu/bash/bash.html",children:"the bash shell"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"video-tutorial",children:"Video Tutorial"}),"\n",(0,t.jsx)(n.p,{children:"If you prefer a video walkthrough of this guide, you can check out this video."}),"\n",(0,t.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed?v=rE_saHopXXU&list=PL8oWxbJ-csEogSV-M0IPiofWP5I_dLji6&index=2",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,t.jsx)(n.h2,{id:"installing-a-virtual-environment",children:"Installing a Virtual Environment"}),"\n",(0,t.jsx)(n.p,{children:"We will show you how to run NCTL in a virtual environment. If you want to run NCTL at the system level, you can, but we recommend that you only do that if you are sure you know what you are doing."}),"\n",(0,t.jsx)(n.p,{children:"First, you will need to install a set of tools required for running NCTL."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 1."})," The first tool you will need is ",(0,t.jsx)(n.strong,{children:"pip"}),", a package manager for Python. Pip comes with the Python 3 installation from python.org, but if you do not have it already, follow the steps below or ",(0,t.jsx)(n.a,{href:"https://pip.pypa.io/en/stable/installing/",children:"the full installation instructions"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Instructions for MacOS:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py\npython3 get-pip.py\n"})}),"\n",(0,t.jsx)(n.p,{children:"Instructions for Linux:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt install python3-pip\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 2."})," Install ",(0,t.jsx)(n.strong,{children:"pkg-config"}),", a program used to compile and link against one or more libraries."]}),"\n",(0,t.jsx)(n.p,{children:"Instructions for MacOS:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"brew install pkg-config\n"})}),"\n",(0,t.jsx)(n.p,{children:"Instructions for Linux:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt install pkg-config\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 3."})," Install either ",(0,t.jsx)(n.strong,{children:"libssl-dev"})," (Linux) or ",(0,t.jsx)(n.strong,{children:"openssl"})," (MacOS), which are toolkits for the Transport Layer Security (TLS) and Secure Sockets Layer (SSL) protocols. They also serve as general-purpose cryptography libraries."]}),"\n",(0,t.jsx)(n.p,{children:"Instructions for MacOS:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"brew install openssl\n"})}),"\n",(0,t.jsx)(n.p,{children:"Instructions for Linux:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt install libssl-dev\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 4."})," You will also need the ",(0,t.jsx)(n.strong,{children:"gcc"})," and ",(0,t.jsx)(n.strong,{children:"g++"})," compilers, which usually come as part of developer command-line tools (versions 7.5.0 at the time of this writing)."]}),"\n",(0,t.jsx)(n.p,{children:"Instructions for MacOS:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"xcode-select --install\ngcc --version\ng++ --version\n"})}),"\n",(0,t.jsx)(n.p,{children:"Instructions for Linux:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt install build-essential\ngcc --version\ng++ --version\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Important Note:"})}),"\n",(0,t.jsx)(n.p,{children:"The following commands need to be executed within the Bash shell. While MacOS and some Linux distributions use Zsh by default, they also include Bash. To ensure proper execution of the subsequent commands, switching to Bash is recommended. If the command does not work, please refer to the Bash documentation on how to install it on your system."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 5."})," Switching to Bash Shell:"]}),"\n",(0,t.jsx)(n.p,{children:"Type the following command in your terminal:"}),"\n",(0,t.jsx)(n.p,{children:"Instructions for MacOS and Linux:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"bash\n"})}),"\n",(0,t.jsx)(n.p,{children:"This will launch a new Bash shell session. You can then proceed with the tutorial."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 6."})," Create and activate a new virtual environment. ",(0,t.jsx)(n.strong,{children:"Commands applicable to the virtual environment will be prefixed with (env)"}),". Run the following commands to set it up."]}),"\n",(0,t.jsx)(n.p,{children:"Instructions for MacOS and Linux:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"python3 -m venv env\nsource env/bin/activate\n"})}),"\n",(0,t.jsx)(n.p,{children:"Once you have activated the virtual environment, your terminal prompt will change to indicate you're working within it. It will usually look something like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"(env) $  // This line is for visual representation only, not to be copied\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 7."})," Inside the virtual environment, upgrade ",(0,t.jsx)(n.strong,{children:"pip"})," to the latest version."]}),"\n",(0,t.jsx)(n.p,{children:"Instructions for MacOS and Linux:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pip install --upgrade pip\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 8."})," Install ",(0,t.jsx)(n.strong,{children:"jq"}),", a command-line JSON processor."]}),"\n",(0,t.jsx)(n.p,{children:"Instructions for MacOS and Linux:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pip install jq\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 9."})," Install ",(0,t.jsx)(n.strong,{children:"supervisor"}),", a cross-platform process manager."]}),"\n",(0,t.jsx)(n.p,{children:"Instructions for MacOS and Linux:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pip install supervisor\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 10."})," Install ",(0,t.jsx)(n.strong,{children:"toml"}),", a configuration file parser."]}),"\n",(0,t.jsx)(n.p,{children:"Instructions for MacOS and Linux:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pip install toml\n"})}),"\n",(0,t.jsx)(n.h2,{id:"setting-up-the-network",children:"Setting up the Network"}),"\n",(0,t.jsx)(n.p,{children:"You are now ready to set up and run your local network of Casper nodes."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 11."})," Clone the ",(0,t.jsx)(n.em,{children:"casper-node-launcher"})," software in your working directory, which we will call ",(0,t.jsx)(n.em,{children:"WORKING_DIRECTORY"}),". ",(0,t.jsx)(n.strong,{children:"Very Important!!! Choose a short path for your working directory"}),"; otherwise, the NCTL tool will report that the path is too long."]}),"\n",(0,t.jsx)(n.p,{children:"Instructions for MacOS and Linux:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd <WORKING_DIRECTORY>\ngit clone https://github.com/casper-network/casper-node-launcher\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Assuming you have set up a small local network, you can speed up the process of creating new blocks with NCTL by reducing the ",(0,t.jsx)(n.code,{children:"deploy_delay"})," in your ",(0,t.jsx)(n.a,{href:"https://github.com/casper-network/casper-node/blob/dev/resources/local/config.toml#L390",children:"local config.toml"})," before running ",(0,t.jsx)(n.code,{children:"nctl-assets-setup"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 12."})," Next, clone the ",(0,t.jsx)(n.em,{children:"casper-node"})," software, also in your working directory."]}),"\n",(0,t.jsx)(n.p,{children:"Instructions for MacOS and Linux:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/casper-network/casper-node\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 13."})," Finally, clone the ",(0,t.jsx)(n.em,{children:"casper-client-rs"})," software in your working directory."]}),"\n",(0,t.jsx)(n.p,{children:"Instructions for MacOS and Linux:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/casper-ecosystem/casper-client-rs\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 14."})," Activate the NCTL environment with the following command."]}),"\n",(0,t.jsx)(n.p,{children:"Instructions for MacOS and Linux:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"source casper-node/utils/nctl/activate\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 15."})," Compile the NCTL binary scripts. The following command compiles both the ",(0,t.jsx)(n.em,{children:"casper-node"})," and the ",(0,t.jsx)(n.em,{children:"casper-client"})," in release mode."]}),"\n",(0,t.jsx)(n.p,{children:"Instructions for MacOS and Linux:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"nctl-compile\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"The compilation takes some time, so it might be a perfect moment to get some coffee."})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 16."})," Set up all the assets required to run a local network, including binaries, chainspec, config, faucet, and keys. Also, spin up the network right after. The default network will have 10 nodes, with 5 active nodes and 5 inactive nodes."]}),"\n",(0,t.jsx)(n.p,{children:"Instructions for MacOS and Linux:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"nctl-assets-setup && nctl-start\n"})}),"\n",(0,t.jsx)(n.p,{children:"Once a network is up and running, you can control each node within the network and add new nodes to the network."}),"\n",(0,t.jsxs)(n.p,{children:["Several other NCTL commands are available via aliases for execution from within a terminal session. All such commands are prefixed by ",(0,t.jsx)(n.em,{children:"nctl-"})," and allow you to perform various tasks."]}),"\n",(0,t.jsxs)(n.p,{children:["You should see the new directory ",(0,t.jsx)(n.em,{children:"utils/nctl/assets"}),", with the following structure."]}),"\n",(0,t.jsx)("img",{src:(0,r.Ay)("/image/nctl/assets_setup.png"),alt:"assets_setup",width:"200"}),"\n",(0,t.jsx)(n.p,{children:"Here is the command line output you would expect."}),"\n",(0,t.jsx)("img",{src:(0,r.Ay)("/image/nctl/nctl_output.png"),alt:"nctl_output"}),"\n",(0,t.jsx)(n.h2,{id:"stopping-the-network",children:"Stopping the Network"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 17."})," Although not necessary, you can stop and clean the NCTL setup with the following commands."]}),"\n",(0,t.jsx)(n.p,{children:"Instructions for MacOS and Linux:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"nctl-stop\nnctl-clean\n"})}),"\n",(0,t.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Explore the ",(0,t.jsx)(n.a,{href:"https://github.com/casper-network/casper-node/blob/master/utils/nctl/docs/commands.md",children:"various NCTL commands"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Explore the ",(0,t.jsx)(n.a,{href:"https://github.com/casper-network/casper-node/blob/master/utils/nctl/docs/usage.md",children:"NCTL usage guide"}),"."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var t=s(6540);const o={},r=t.createContext(o);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);