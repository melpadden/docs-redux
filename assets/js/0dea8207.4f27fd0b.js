"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[2352],{48563:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=s(74848),a=s(28453);const r={},o=".NET SDK",c={id:"developers/dapps/sdk/csharp-sdk",title:".NET SDK",description:"The C# .NET SDK allows developers to interact with a Casper network using C#.",source:"@site/versioned_docs/version-1.5.X/developers/dapps/sdk/csharp-sdk.md",sourceDirName:"developers/dapps/sdk",slug:"/developers/dapps/sdk/csharp-sdk",permalink:"/developers/dapps/sdk/csharp-sdk",draft:!1,unlisted:!1,tags:[],version:"1.5.X",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1724759228e3,frontMatter:{},sidebar:"developers",previous:{title:"JavaScript/TypeScript SDK",permalink:"/developers/dapps/sdk/script-sdk"},next:{title:"Go SDK",permalink:"/developers/dapps/sdk/go-sdk"}},i={},d=[{value:"Documentation",id:"documentation",level:2},{value:"Get started",id:"get-started",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"net-sdk",children:".NET SDK"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://github.com/make-software/casper-net-sdk",children:"C# .NET SDK"})," allows developers to interact with a Casper network using C#."]}),"\n",(0,t.jsx)(n.h2,{id:"documentation",children:"Documentation"}),"\n",(0,t.jsxs)(n.p,{children:["Visit ",(0,t.jsx)(n.a,{href:"https://make-software.github.io/casper-net-sdk/",children:"https://make-software.github.io/casper-net-sdk/"})," to find the SDK documentation, examples, and tutorials."]}),"\n",(0,t.jsx)(n.h2,{id:"get-started",children:"Get started"}),"\n",(0,t.jsx)(n.p,{children:"This example shows how to retrieve an account's main purse balance from a testnet node. Make sure you have .NET 5 or higher before continuing."}),"\n",(0,t.jsx)(n.p,{children:"Open a terminal window and create a new console app:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"dotnet new console -o GetAccountBalance\ncd GetAccountBalance\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The Casper.Network.SDK for .NET is published on ",(0,t.jsx)(n.a,{href:"https://www.nuget.org/packages/Casper.Network.SDK",children:"nuget.org"})," as a NuGet package."]}),"\n",(0,t.jsxs)(n.p,{children:["To add a reference to the SDK in your project, use the Package Manager in Visual Studio or the ",(0,t.jsx)(n.code,{children:"dotnet"})," CLI tool."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Package Manager (Windows)"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Install-Package Casper.Network.SDK\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"dotnet CLI Tool (Windows, Mac, and Linux)"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"dotnet add package Casper.Network.SDK\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now, replace the default code in ",(0,t.jsx)(n.code,{children:"Program.cs"})," with this main program:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'using System;\nusing System.Threading.Tasks;\nusing Casper.Network.SDK;\nusing Casper.Network.SDK.JsonRpc;\nusing Casper.Network.SDK.Types;\n\nnamespace Casper.NET.SDK.Examples\n{\n    public class GetAccountBalance\n    {\n        public static async Task Main(string[] args)\n        {\n            string nodeAddress = "http://testnet-node.make.services:7777";\n\n            var hex = "0203914289b334f57366541099a52156b149436fdb0422b3c48fe4115d0578abf690";\n            var publicKey = PublicKey.FromHexString(hex);\n\n            try\n            {\n                var casperSdk = new NetCasperClient(nodeAddress);\n\n                // Get the balance using the account public key\n                //\n                var rpcResponse = await casperSdk.GetAccountBalance(publicKey);\n                Console.WriteLine("Public Key Balance: " + rpcResponse.Parse().BalanceValue);\n            }\n            catch (RpcClientException e)\n            {\n                Console.WriteLine("ERROR:\\n" + e.RpcError.Message);\n            }\n            catch (Exception e)\n            {\n                Console.WriteLine(e);\n            }\n        }\n    }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Finally, run the example with:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"dotnet run\n"})}),"\n",(0,t.jsx)(n.p,{children:"The program will print the account's main purse balance retrieved from the testnet."}),"\n",(0,t.jsxs)(n.p,{children:["Visit ",(0,t.jsx)(n.a,{href:"https://make-software.github.io/casper-net-sdk/",children:"https://make-software.github.io/casper-net-sdk/"})," to find other examples, tutorials, and complete documentation for this SDK."]})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var t=s(96540);const a={},r=t.createContext(a);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);