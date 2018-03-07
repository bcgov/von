# Getting Started

This documented is for developers who want to get the VON environment configured and running on a local machine.

## Running locally

### Download, build, and run [von-network](https://github.com/bcgov/von-network).

Instructions in the link above.

Once this is running, you can test your local network by using the command `./manage cli`. If it connects to the node pool, you know that the indy node network is running correctly.

### Come up with unique seeds for your development environment.

Every agent needs a unique DID and related verkey and signing key. To keep things predictable, we use _seeds_ in development which ensure DIDs are predictable.

You will need to come up with unique seeds for TheOrgBook and Permitify. Seeds must be exactly 32 characters long. It is recommended that you use an easy-to-remember seed and pad it with zeroes.

For example:

  **Just an example – come up with your own unique seeds**

  - firstname_lastname_tob_000000000
  - firstname_lastname_permitify_000
  
  **Just an example – come up with your own unique seeds**
    
Since Permitify configures more than one webserver at a time (and thus, more than one agent) the `manage` script is configured to use derivatives of your seed to create as many seeds as it needs.

### Authorize your seeds on von-network.

If an agent is to have permission to write schemas and claim definitions to an Indy ledger, its DID must be authorized (writted to the ledger).

Navigate to the instance of von-network that you are using (in this case http://localhost:9000) and use the "Authorize a New DID" feature.

By following the example seeds above, you will need to authorize the following seeds (DIDs) on the ledger:

- firstname_lastname_tob_000000000
- firstname_lastname_permitify_001
- firstname_lastname_permitify_002
- firstname_lastname_permitify_003
- firstname_lastname_permitify_004
- firstname_lastname_permitify_005
- firstname_lastname_permitify_006

Remember, Permitify creates a seed for each service so you need to authorize 6 seeds here. This will depend on how you have Permitify configured so be aware of this.

### Run TheOrgBook

TheOrgBook must be run before Permitify. This is because all issuers (Permitify) must register themselves with TheOrgBook before they can issue claims.

`./manage.sh start seed=firstname_lastname_tob_000000000`

More information in the instructions here: https://github.com/bcgov/TheOrgBook

### Run Permitify 

`./manage start all seed=firstname_lastname_permitify_000 TOB_INDY_SEED=firstname_lastname_tob_000000000`

Instructions here: https://github.com/bcgov/Permitify


