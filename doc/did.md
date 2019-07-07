# DID Data Model GraphQL

Each DID Document may (must?) contain at least three things: 
- **proof_purposes**
- **verification_methods**
- **service_endpoints**


## proof_purposes & verification_methods

**proof_purposes** + **verification_methods** = `mechanisms_for_proving_things`

**Example**: 


```json
{
  "@context": "https://w3id.org/future-method/v1",
  "id": "did:example:123456789abcdefghi",
  "publicKey": [
    {
      "id": "did:example:123456789abcdefghi#keys-1",
      "type": "RsaVerificationKey2018",
      "controller": "did:example:123456789abcdefghi",
      "publicKeyPem": "-----BEGIN PUBLIC KEY...END PUBLIC KEY-----\r\n"
    }
  ],
  "authentication": [
    "did:example:123456789abcdefghi#keys-1", // authenticate as did:...ghi
    "did:example:123456789abcdefghi#keys-3", // biometrically_authenticate as did:...ghi
  ],
  "service": [
    {
      "id": "did:example:123456789abcdefghi#oidc",
      "type": "OpenIdConnectVersion1.0Service",
      "serviceEndpoint": "https://openid.example.com/"
    },
    {
      "type": "DidAuthPushModeVersion1",
      "id": "did:example:123456789abcdefghi#push",
      "serviceEndpoint": "http://auth.example.com/did:example:123456789abcdefghi"
    }
  ]
}
```


be used to verify a proof that was created for the purpose of authentication.

## service_endpoints

**service_endpoints**: Enable trusted interactions 
with the DID controller






## Data Model GraphQL
```ts
interface DID {
  proof_purposes: string
  verification_methods: string
  service_endpoints: string
}
```


