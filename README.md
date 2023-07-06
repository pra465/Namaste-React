## <----- Igniting our app ----->
We have to do a lot of changes to push our code to production - 

minification
image optimization
code spelliting
chuncking
remove comments
compress  

** Only react can't make our app faster, we need some more things like libraries and packages to make our app fast.

** NPM manages packages but it full form is not - "node package manager"

** NPM is the standard repository for all the packages

** package.json - configuration for our NPM.

** Bundler - webpack, parcel, vite -> it packages our app so that it can be shipped to production

** there are tow types of dependencies - dev dependency, normal dependency

** Dev dependency - used while development, don't need in production

** normal dependency we need in production as well

--> major.minor.patch
 
** caret(^) -> change minor and patch versions

** tilde(~) -> change only patch

** caret is safe to use

** Transitive dependency 

** Don't put node modules in production

** put package.json in git

** we can re-generate our node modules from package.json and package-lock.json

** To ignite our app using parcel we need to run - npx parcel index.html

** npx is used to execute a parcel

<!--  Browser scripts cannot have imports or exports  -->
solution to this error is to add type="module" in script tag

# parcel
Dev build
local server
HMR = Hot module replacement
file watching algorithm written in c++
cashing - faster build 
minification
bundling
image optimization
compressing
consistent hashing
code splitting
differential bundling - to support older browsers
Diagnostic
error handling
HTTPS 
Tree shaking - remove unused code
Different dev and prod bundles

To make our app production ready run this - npx parcel build index.html

** browserList - we use this to tell our app on which browser to compitable with