
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Vendedor
 * 
 */
export type Vendedor = $Result.DefaultSelection<Prisma.$VendedorPayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model SubCategoria
 * 
 */
export type SubCategoria = $Result.DefaultSelection<Prisma.$SubCategoriaPayload>
/**
 * Model Produto
 * 
 */
export type Produto = $Result.DefaultSelection<Prisma.$ProdutoPayload>
/**
 * Model Pedido
 * 
 */
export type Pedido = $Result.DefaultSelection<Prisma.$PedidoPayload>
/**
 * Model ItemPedido
 * 
 */
export type ItemPedido = $Result.DefaultSelection<Prisma.$ItemPedidoPayload>
/**
 * Model MetadadosPedido
 * 
 */
export type MetadadosPedido = $Result.DefaultSelection<Prisma.$MetadadosPedidoPayload>
/**
 * Model PagamentoPedido
 * 
 */
export type PagamentoPedido = $Result.DefaultSelection<Prisma.$PagamentoPedidoPayload>
/**
 * Model CarregamentoPedido
 * 
 */
export type CarregamentoPedido = $Result.DefaultSelection<Prisma.$CarregamentoPedidoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Clientes
 * const clientes = await prisma.cliente.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Clientes
   * const clientes = await prisma.cliente.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vendedor`: Exposes CRUD operations for the **Vendedor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendedors
    * const vendedors = await prisma.vendedor.findMany()
    * ```
    */
  get vendedor(): Prisma.VendedorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subCategoria`: Exposes CRUD operations for the **SubCategoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubCategorias
    * const subCategorias = await prisma.subCategoria.findMany()
    * ```
    */
  get subCategoria(): Prisma.SubCategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produto`: Exposes CRUD operations for the **Produto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtos
    * const produtos = await prisma.produto.findMany()
    * ```
    */
  get produto(): Prisma.ProdutoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **Pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.PedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemPedido`: Exposes CRUD operations for the **ItemPedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemPedidos
    * const itemPedidos = await prisma.itemPedido.findMany()
    * ```
    */
  get itemPedido(): Prisma.ItemPedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metadadosPedido`: Exposes CRUD operations for the **MetadadosPedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MetadadosPedidos
    * const metadadosPedidos = await prisma.metadadosPedido.findMany()
    * ```
    */
  get metadadosPedido(): Prisma.MetadadosPedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pagamentoPedido`: Exposes CRUD operations for the **PagamentoPedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PagamentoPedidos
    * const pagamentoPedidos = await prisma.pagamentoPedido.findMany()
    * ```
    */
  get pagamentoPedido(): Prisma.PagamentoPedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carregamentoPedido`: Exposes CRUD operations for the **CarregamentoPedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CarregamentoPedidos
    * const carregamentoPedidos = await prisma.carregamentoPedido.findMany()
    * ```
    */
  get carregamentoPedido(): Prisma.CarregamentoPedidoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Cliente: 'Cliente',
    Vendedor: 'Vendedor',
    Categoria: 'Categoria',
    SubCategoria: 'SubCategoria',
    Produto: 'Produto',
    Pedido: 'Pedido',
    ItemPedido: 'ItemPedido',
    MetadadosPedido: 'MetadadosPedido',
    PagamentoPedido: 'PagamentoPedido',
    CarregamentoPedido: 'CarregamentoPedido'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cliente" | "vendedor" | "categoria" | "subCategoria" | "produto" | "pedido" | "itemPedido" | "metadadosPedido" | "pagamentoPedido" | "carregamentoPedido"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Vendedor: {
        payload: Prisma.$VendedorPayload<ExtArgs>
        fields: Prisma.VendedorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VendedorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendedorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedorPayload>
          }
          findFirst: {
            args: Prisma.VendedorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendedorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedorPayload>
          }
          findMany: {
            args: Prisma.VendedorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedorPayload>[]
          }
          create: {
            args: Prisma.VendedorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedorPayload>
          }
          createMany: {
            args: Prisma.VendedorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VendedorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedorPayload>[]
          }
          delete: {
            args: Prisma.VendedorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedorPayload>
          }
          update: {
            args: Prisma.VendedorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedorPayload>
          }
          deleteMany: {
            args: Prisma.VendedorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VendedorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VendedorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedorPayload>[]
          }
          upsert: {
            args: Prisma.VendedorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedorPayload>
          }
          aggregate: {
            args: Prisma.VendedorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendedor>
          }
          groupBy: {
            args: Prisma.VendedorGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendedorGroupByOutputType>[]
          }
          count: {
            args: Prisma.VendedorCountArgs<ExtArgs>
            result: $Utils.Optional<VendedorCountAggregateOutputType> | number
          }
        }
      }
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      SubCategoria: {
        payload: Prisma.$SubCategoriaPayload<ExtArgs>
        fields: Prisma.SubCategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubCategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubCategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriaPayload>
          }
          findFirst: {
            args: Prisma.SubCategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubCategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriaPayload>
          }
          findMany: {
            args: Prisma.SubCategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriaPayload>[]
          }
          create: {
            args: Prisma.SubCategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriaPayload>
          }
          createMany: {
            args: Prisma.SubCategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubCategoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriaPayload>[]
          }
          delete: {
            args: Prisma.SubCategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriaPayload>
          }
          update: {
            args: Prisma.SubCategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriaPayload>
          }
          deleteMany: {
            args: Prisma.SubCategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubCategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubCategoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriaPayload>[]
          }
          upsert: {
            args: Prisma.SubCategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriaPayload>
          }
          aggregate: {
            args: Prisma.SubCategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubCategoria>
          }
          groupBy: {
            args: Prisma.SubCategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubCategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubCategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<SubCategoriaCountAggregateOutputType> | number
          }
        }
      }
      Produto: {
        payload: Prisma.$ProdutoPayload<ExtArgs>
        fields: Prisma.ProdutoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdutoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdutoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findFirst: {
            args: Prisma.ProdutoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdutoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findMany: {
            args: Prisma.ProdutoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          create: {
            args: Prisma.ProdutoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          createMany: {
            args: Prisma.ProdutoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProdutoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          delete: {
            args: Prisma.ProdutoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          update: {
            args: Prisma.ProdutoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          deleteMany: {
            args: Prisma.ProdutoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProdutoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProdutoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          upsert: {
            args: Prisma.ProdutoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          aggregate: {
            args: Prisma.ProdutoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduto>
          }
          groupBy: {
            args: Prisma.ProdutoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProdutoCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutoCountAggregateOutputType> | number
          }
        }
      }
      Pedido: {
        payload: Prisma.$PedidoPayload<ExtArgs>
        fields: Prisma.PedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findFirst: {
            args: Prisma.PedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findMany: {
            args: Prisma.PedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          create: {
            args: Prisma.PedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          createMany: {
            args: Prisma.PedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          delete: {
            args: Prisma.PedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          update: {
            args: Prisma.PedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          deleteMany: {
            args: Prisma.PedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PedidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          upsert: {
            args: Prisma.PedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.PedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
      ItemPedido: {
        payload: Prisma.$ItemPedidoPayload<ExtArgs>
        fields: Prisma.ItemPedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemPedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemPedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          findFirst: {
            args: Prisma.ItemPedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemPedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          findMany: {
            args: Prisma.ItemPedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>[]
          }
          create: {
            args: Prisma.ItemPedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          createMany: {
            args: Prisma.ItemPedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemPedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>[]
          }
          delete: {
            args: Prisma.ItemPedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          update: {
            args: Prisma.ItemPedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          deleteMany: {
            args: Prisma.ItemPedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemPedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemPedidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>[]
          }
          upsert: {
            args: Prisma.ItemPedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          aggregate: {
            args: Prisma.ItemPedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemPedido>
          }
          groupBy: {
            args: Prisma.ItemPedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemPedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemPedidoCountArgs<ExtArgs>
            result: $Utils.Optional<ItemPedidoCountAggregateOutputType> | number
          }
        }
      }
      MetadadosPedido: {
        payload: Prisma.$MetadadosPedidoPayload<ExtArgs>
        fields: Prisma.MetadadosPedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetadadosPedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetadadosPedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetadadosPedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetadadosPedidoPayload>
          }
          findFirst: {
            args: Prisma.MetadadosPedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetadadosPedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetadadosPedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetadadosPedidoPayload>
          }
          findMany: {
            args: Prisma.MetadadosPedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetadadosPedidoPayload>[]
          }
          create: {
            args: Prisma.MetadadosPedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetadadosPedidoPayload>
          }
          createMany: {
            args: Prisma.MetadadosPedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MetadadosPedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetadadosPedidoPayload>[]
          }
          delete: {
            args: Prisma.MetadadosPedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetadadosPedidoPayload>
          }
          update: {
            args: Prisma.MetadadosPedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetadadosPedidoPayload>
          }
          deleteMany: {
            args: Prisma.MetadadosPedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetadadosPedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MetadadosPedidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetadadosPedidoPayload>[]
          }
          upsert: {
            args: Prisma.MetadadosPedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetadadosPedidoPayload>
          }
          aggregate: {
            args: Prisma.MetadadosPedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetadadosPedido>
          }
          groupBy: {
            args: Prisma.MetadadosPedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetadadosPedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetadadosPedidoCountArgs<ExtArgs>
            result: $Utils.Optional<MetadadosPedidoCountAggregateOutputType> | number
          }
        }
      }
      PagamentoPedido: {
        payload: Prisma.$PagamentoPedidoPayload<ExtArgs>
        fields: Prisma.PagamentoPedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PagamentoPedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PagamentoPedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPedidoPayload>
          }
          findFirst: {
            args: Prisma.PagamentoPedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PagamentoPedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPedidoPayload>
          }
          findMany: {
            args: Prisma.PagamentoPedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPedidoPayload>[]
          }
          create: {
            args: Prisma.PagamentoPedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPedidoPayload>
          }
          createMany: {
            args: Prisma.PagamentoPedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PagamentoPedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPedidoPayload>[]
          }
          delete: {
            args: Prisma.PagamentoPedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPedidoPayload>
          }
          update: {
            args: Prisma.PagamentoPedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPedidoPayload>
          }
          deleteMany: {
            args: Prisma.PagamentoPedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PagamentoPedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PagamentoPedidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPedidoPayload>[]
          }
          upsert: {
            args: Prisma.PagamentoPedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPedidoPayload>
          }
          aggregate: {
            args: Prisma.PagamentoPedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePagamentoPedido>
          }
          groupBy: {
            args: Prisma.PagamentoPedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagamentoPedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PagamentoPedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PagamentoPedidoCountAggregateOutputType> | number
          }
        }
      }
      CarregamentoPedido: {
        payload: Prisma.$CarregamentoPedidoPayload<ExtArgs>
        fields: Prisma.CarregamentoPedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarregamentoPedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarregamentoPedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarregamentoPedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarregamentoPedidoPayload>
          }
          findFirst: {
            args: Prisma.CarregamentoPedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarregamentoPedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarregamentoPedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarregamentoPedidoPayload>
          }
          findMany: {
            args: Prisma.CarregamentoPedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarregamentoPedidoPayload>[]
          }
          create: {
            args: Prisma.CarregamentoPedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarregamentoPedidoPayload>
          }
          createMany: {
            args: Prisma.CarregamentoPedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarregamentoPedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarregamentoPedidoPayload>[]
          }
          delete: {
            args: Prisma.CarregamentoPedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarregamentoPedidoPayload>
          }
          update: {
            args: Prisma.CarregamentoPedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarregamentoPedidoPayload>
          }
          deleteMany: {
            args: Prisma.CarregamentoPedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarregamentoPedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarregamentoPedidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarregamentoPedidoPayload>[]
          }
          upsert: {
            args: Prisma.CarregamentoPedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarregamentoPedidoPayload>
          }
          aggregate: {
            args: Prisma.CarregamentoPedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarregamentoPedido>
          }
          groupBy: {
            args: Prisma.CarregamentoPedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarregamentoPedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarregamentoPedidoCountArgs<ExtArgs>
            result: $Utils.Optional<CarregamentoPedidoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    cliente?: ClienteOmit
    vendedor?: VendedorOmit
    categoria?: CategoriaOmit
    subCategoria?: SubCategoriaOmit
    produto?: ProdutoOmit
    pedido?: PedidoOmit
    itemPedido?: ItemPedidoOmit
    metadadosPedido?: MetadadosPedidoOmit
    pagamentoPedido?: PagamentoPedidoOmit
    carregamentoPedido?: CarregamentoPedidoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    Pedido: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pedido?: boolean | ClienteCountOutputTypeCountPedidoArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }


  /**
   * Count Type VendedorCountOutputType
   */

  export type VendedorCountOutputType = {
    Pedido: number
  }

  export type VendedorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pedido?: boolean | VendedorCountOutputTypeCountPedidoArgs
  }

  // Custom InputTypes
  /**
   * VendedorCountOutputType without action
   */
  export type VendedorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendedorCountOutputType
     */
    select?: VendedorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VendedorCountOutputType without action
   */
  export type VendedorCountOutputTypeCountPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    SubCategoria: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SubCategoria?: boolean | CategoriaCountOutputTypeCountSubCategoriaArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountSubCategoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubCategoriaWhereInput
  }


  /**
   * Count Type SubCategoriaCountOutputType
   */

  export type SubCategoriaCountOutputType = {
    ItemPedido: number
  }

  export type SubCategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ItemPedido?: boolean | SubCategoriaCountOutputTypeCountItemPedidoArgs
  }

  // Custom InputTypes
  /**
   * SubCategoriaCountOutputType without action
   */
  export type SubCategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoriaCountOutputType
     */
    select?: SubCategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubCategoriaCountOutputType without action
   */
  export type SubCategoriaCountOutputTypeCountItemPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPedidoWhereInput
  }


  /**
   * Count Type ProdutoCountOutputType
   */

  export type ProdutoCountOutputType = {
    ItemPedido: number
  }

  export type ProdutoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ItemPedido?: boolean | ProdutoCountOutputTypeCountItemPedidoArgs
  }

  // Custom InputTypes
  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoCountOutputType
     */
    select?: ProdutoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountItemPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPedidoWhereInput
  }


  /**
   * Count Type PedidoCountOutputType
   */

  export type PedidoCountOutputType = {
    ItemPedido: number
    MetadadosPedido: number
    PagamentoPedido: number
    CarregamentoPedido: number
  }

  export type PedidoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ItemPedido?: boolean | PedidoCountOutputTypeCountItemPedidoArgs
    MetadadosPedido?: boolean | PedidoCountOutputTypeCountMetadadosPedidoArgs
    PagamentoPedido?: boolean | PedidoCountOutputTypeCountPagamentoPedidoArgs
    CarregamentoPedido?: boolean | PedidoCountOutputTypeCountCarregamentoPedidoArgs
  }

  // Custom InputTypes
  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoCountOutputType
     */
    select?: PedidoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountItemPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPedidoWhereInput
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountMetadadosPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetadadosPedidoWhereInput
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountPagamentoPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagamentoPedidoWhereInput
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountCarregamentoPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarregamentoPedidoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    ClienteId: number | null
  }

  export type ClienteSumAggregateOutputType = {
    ClienteId: number | null
  }

  export type ClienteMinAggregateOutputType = {
    ClienteId: number | null
    ClienteNome: string | null
    ClienteEmail: string | null
    ClienteDocumento: string | null
    ClienteDtImportacao: Date | null
  }

  export type ClienteMaxAggregateOutputType = {
    ClienteId: number | null
    ClienteNome: string | null
    ClienteEmail: string | null
    ClienteDocumento: string | null
    ClienteDtImportacao: Date | null
  }

  export type ClienteCountAggregateOutputType = {
    ClienteId: number
    ClienteNome: number
    ClienteEmail: number
    ClienteDocumento: number
    ClienteDtImportacao: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    ClienteId?: true
  }

  export type ClienteSumAggregateInputType = {
    ClienteId?: true
  }

  export type ClienteMinAggregateInputType = {
    ClienteId?: true
    ClienteNome?: true
    ClienteEmail?: true
    ClienteDocumento?: true
    ClienteDtImportacao?: true
  }

  export type ClienteMaxAggregateInputType = {
    ClienteId?: true
    ClienteNome?: true
    ClienteEmail?: true
    ClienteDocumento?: true
    ClienteDtImportacao?: true
  }

  export type ClienteCountAggregateInputType = {
    ClienteId?: true
    ClienteNome?: true
    ClienteEmail?: true
    ClienteDocumento?: true
    ClienteDtImportacao?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    ClienteId: number
    ClienteNome: string
    ClienteEmail: string
    ClienteDocumento: string
    ClienteDtImportacao: Date
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ClienteId?: boolean
    ClienteNome?: boolean
    ClienteEmail?: boolean
    ClienteDocumento?: boolean
    ClienteDtImportacao?: boolean
    Pedido?: boolean | Cliente$PedidoArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ClienteId?: boolean
    ClienteNome?: boolean
    ClienteEmail?: boolean
    ClienteDocumento?: boolean
    ClienteDtImportacao?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ClienteId?: boolean
    ClienteNome?: boolean
    ClienteEmail?: boolean
    ClienteDocumento?: boolean
    ClienteDtImportacao?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    ClienteId?: boolean
    ClienteNome?: boolean
    ClienteEmail?: boolean
    ClienteDocumento?: boolean
    ClienteDtImportacao?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ClienteId" | "ClienteNome" | "ClienteEmail" | "ClienteDocumento" | "ClienteDtImportacao", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pedido?: boolean | Cliente$PedidoArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      Pedido: Prisma.$PedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ClienteId: number
      ClienteNome: string
      ClienteEmail: string
      ClienteDocumento: string
      ClienteDtImportacao: Date
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `ClienteId`
     * const clienteWithClienteIdOnly = await prisma.cliente.findMany({ select: { ClienteId: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `ClienteId`
     * const clienteWithClienteIdOnly = await prisma.cliente.createManyAndReturn({
     *   select: { ClienteId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `ClienteId`
     * const clienteWithClienteIdOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { ClienteId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Pedido<T extends Cliente$PedidoArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$PedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly ClienteId: FieldRef<"Cliente", 'Int'>
    readonly ClienteNome: FieldRef<"Cliente", 'String'>
    readonly ClienteEmail: FieldRef<"Cliente", 'String'>
    readonly ClienteDocumento: FieldRef<"Cliente", 'String'>
    readonly ClienteDtImportacao: FieldRef<"Cliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.Pedido
   */
  export type Cliente$PedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Vendedor
   */

  export type AggregateVendedor = {
    _count: VendedorCountAggregateOutputType | null
    _avg: VendedorAvgAggregateOutputType | null
    _sum: VendedorSumAggregateOutputType | null
    _min: VendedorMinAggregateOutputType | null
    _max: VendedorMaxAggregateOutputType | null
  }

  export type VendedorAvgAggregateOutputType = {
    VendedorId: number | null
  }

  export type VendedorSumAggregateOutputType = {
    VendedorId: number | null
  }

  export type VendedorMinAggregateOutputType = {
    VendedorId: number | null
    VendedorNome: string | null
    VendedorCidade: string | null
    VendedorUF: string | null
    VendedorDtImportacao: Date | null
  }

  export type VendedorMaxAggregateOutputType = {
    VendedorId: number | null
    VendedorNome: string | null
    VendedorCidade: string | null
    VendedorUF: string | null
    VendedorDtImportacao: Date | null
  }

  export type VendedorCountAggregateOutputType = {
    VendedorId: number
    VendedorNome: number
    VendedorCidade: number
    VendedorUF: number
    VendedorDtImportacao: number
    _all: number
  }


  export type VendedorAvgAggregateInputType = {
    VendedorId?: true
  }

  export type VendedorSumAggregateInputType = {
    VendedorId?: true
  }

  export type VendedorMinAggregateInputType = {
    VendedorId?: true
    VendedorNome?: true
    VendedorCidade?: true
    VendedorUF?: true
    VendedorDtImportacao?: true
  }

  export type VendedorMaxAggregateInputType = {
    VendedorId?: true
    VendedorNome?: true
    VendedorCidade?: true
    VendedorUF?: true
    VendedorDtImportacao?: true
  }

  export type VendedorCountAggregateInputType = {
    VendedorId?: true
    VendedorNome?: true
    VendedorCidade?: true
    VendedorUF?: true
    VendedorDtImportacao?: true
    _all?: true
  }

  export type VendedorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendedor to aggregate.
     */
    where?: VendedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendedors to fetch.
     */
    orderBy?: VendedorOrderByWithRelationInput | VendedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vendedors
    **/
    _count?: true | VendedorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VendedorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VendedorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendedorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendedorMaxAggregateInputType
  }

  export type GetVendedorAggregateType<T extends VendedorAggregateArgs> = {
        [P in keyof T & keyof AggregateVendedor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendedor[P]>
      : GetScalarType<T[P], AggregateVendedor[P]>
  }




  export type VendedorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendedorWhereInput
    orderBy?: VendedorOrderByWithAggregationInput | VendedorOrderByWithAggregationInput[]
    by: VendedorScalarFieldEnum[] | VendedorScalarFieldEnum
    having?: VendedorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendedorCountAggregateInputType | true
    _avg?: VendedorAvgAggregateInputType
    _sum?: VendedorSumAggregateInputType
    _min?: VendedorMinAggregateInputType
    _max?: VendedorMaxAggregateInputType
  }

  export type VendedorGroupByOutputType = {
    VendedorId: number
    VendedorNome: string
    VendedorCidade: string
    VendedorUF: string
    VendedorDtImportacao: Date
    _count: VendedorCountAggregateOutputType | null
    _avg: VendedorAvgAggregateOutputType | null
    _sum: VendedorSumAggregateOutputType | null
    _min: VendedorMinAggregateOutputType | null
    _max: VendedorMaxAggregateOutputType | null
  }

  type GetVendedorGroupByPayload<T extends VendedorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendedorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendedorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendedorGroupByOutputType[P]>
            : GetScalarType<T[P], VendedorGroupByOutputType[P]>
        }
      >
    >


  export type VendedorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    VendedorId?: boolean
    VendedorNome?: boolean
    VendedorCidade?: boolean
    VendedorUF?: boolean
    VendedorDtImportacao?: boolean
    Pedido?: boolean | Vendedor$PedidoArgs<ExtArgs>
    _count?: boolean | VendedorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendedor"]>

  export type VendedorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    VendedorId?: boolean
    VendedorNome?: boolean
    VendedorCidade?: boolean
    VendedorUF?: boolean
    VendedorDtImportacao?: boolean
  }, ExtArgs["result"]["vendedor"]>

  export type VendedorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    VendedorId?: boolean
    VendedorNome?: boolean
    VendedorCidade?: boolean
    VendedorUF?: boolean
    VendedorDtImportacao?: boolean
  }, ExtArgs["result"]["vendedor"]>

  export type VendedorSelectScalar = {
    VendedorId?: boolean
    VendedorNome?: boolean
    VendedorCidade?: boolean
    VendedorUF?: boolean
    VendedorDtImportacao?: boolean
  }

  export type VendedorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"VendedorId" | "VendedorNome" | "VendedorCidade" | "VendedorUF" | "VendedorDtImportacao", ExtArgs["result"]["vendedor"]>
  export type VendedorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pedido?: boolean | Vendedor$PedidoArgs<ExtArgs>
    _count?: boolean | VendedorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VendedorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VendedorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VendedorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vendedor"
    objects: {
      Pedido: Prisma.$PedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      VendedorId: number
      VendedorNome: string
      VendedorCidade: string
      VendedorUF: string
      VendedorDtImportacao: Date
    }, ExtArgs["result"]["vendedor"]>
    composites: {}
  }

  type VendedorGetPayload<S extends boolean | null | undefined | VendedorDefaultArgs> = $Result.GetResult<Prisma.$VendedorPayload, S>

  type VendedorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VendedorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VendedorCountAggregateInputType | true
    }

  export interface VendedorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vendedor'], meta: { name: 'Vendedor' } }
    /**
     * Find zero or one Vendedor that matches the filter.
     * @param {VendedorFindUniqueArgs} args - Arguments to find a Vendedor
     * @example
     * // Get one Vendedor
     * const vendedor = await prisma.vendedor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VendedorFindUniqueArgs>(args: SelectSubset<T, VendedorFindUniqueArgs<ExtArgs>>): Prisma__VendedorClient<$Result.GetResult<Prisma.$VendedorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vendedor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VendedorFindUniqueOrThrowArgs} args - Arguments to find a Vendedor
     * @example
     * // Get one Vendedor
     * const vendedor = await prisma.vendedor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VendedorFindUniqueOrThrowArgs>(args: SelectSubset<T, VendedorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VendedorClient<$Result.GetResult<Prisma.$VendedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendedor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendedorFindFirstArgs} args - Arguments to find a Vendedor
     * @example
     * // Get one Vendedor
     * const vendedor = await prisma.vendedor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VendedorFindFirstArgs>(args?: SelectSubset<T, VendedorFindFirstArgs<ExtArgs>>): Prisma__VendedorClient<$Result.GetResult<Prisma.$VendedorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendedor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendedorFindFirstOrThrowArgs} args - Arguments to find a Vendedor
     * @example
     * // Get one Vendedor
     * const vendedor = await prisma.vendedor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VendedorFindFirstOrThrowArgs>(args?: SelectSubset<T, VendedorFindFirstOrThrowArgs<ExtArgs>>): Prisma__VendedorClient<$Result.GetResult<Prisma.$VendedorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vendedors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendedorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendedors
     * const vendedors = await prisma.vendedor.findMany()
     * 
     * // Get first 10 Vendedors
     * const vendedors = await prisma.vendedor.findMany({ take: 10 })
     * 
     * // Only select the `VendedorId`
     * const vendedorWithVendedorIdOnly = await prisma.vendedor.findMany({ select: { VendedorId: true } })
     * 
     */
    findMany<T extends VendedorFindManyArgs>(args?: SelectSubset<T, VendedorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendedorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vendedor.
     * @param {VendedorCreateArgs} args - Arguments to create a Vendedor.
     * @example
     * // Create one Vendedor
     * const Vendedor = await prisma.vendedor.create({
     *   data: {
     *     // ... data to create a Vendedor
     *   }
     * })
     * 
     */
    create<T extends VendedorCreateArgs>(args: SelectSubset<T, VendedorCreateArgs<ExtArgs>>): Prisma__VendedorClient<$Result.GetResult<Prisma.$VendedorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vendedors.
     * @param {VendedorCreateManyArgs} args - Arguments to create many Vendedors.
     * @example
     * // Create many Vendedors
     * const vendedor = await prisma.vendedor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VendedorCreateManyArgs>(args?: SelectSubset<T, VendedorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vendedors and returns the data saved in the database.
     * @param {VendedorCreateManyAndReturnArgs} args - Arguments to create many Vendedors.
     * @example
     * // Create many Vendedors
     * const vendedor = await prisma.vendedor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vendedors and only return the `VendedorId`
     * const vendedorWithVendedorIdOnly = await prisma.vendedor.createManyAndReturn({
     *   select: { VendedorId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VendedorCreateManyAndReturnArgs>(args?: SelectSubset<T, VendedorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendedorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vendedor.
     * @param {VendedorDeleteArgs} args - Arguments to delete one Vendedor.
     * @example
     * // Delete one Vendedor
     * const Vendedor = await prisma.vendedor.delete({
     *   where: {
     *     // ... filter to delete one Vendedor
     *   }
     * })
     * 
     */
    delete<T extends VendedorDeleteArgs>(args: SelectSubset<T, VendedorDeleteArgs<ExtArgs>>): Prisma__VendedorClient<$Result.GetResult<Prisma.$VendedorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vendedor.
     * @param {VendedorUpdateArgs} args - Arguments to update one Vendedor.
     * @example
     * // Update one Vendedor
     * const vendedor = await prisma.vendedor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VendedorUpdateArgs>(args: SelectSubset<T, VendedorUpdateArgs<ExtArgs>>): Prisma__VendedorClient<$Result.GetResult<Prisma.$VendedorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vendedors.
     * @param {VendedorDeleteManyArgs} args - Arguments to filter Vendedors to delete.
     * @example
     * // Delete a few Vendedors
     * const { count } = await prisma.vendedor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VendedorDeleteManyArgs>(args?: SelectSubset<T, VendedorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendedorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendedors
     * const vendedor = await prisma.vendedor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VendedorUpdateManyArgs>(args: SelectSubset<T, VendedorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendedors and returns the data updated in the database.
     * @param {VendedorUpdateManyAndReturnArgs} args - Arguments to update many Vendedors.
     * @example
     * // Update many Vendedors
     * const vendedor = await prisma.vendedor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vendedors and only return the `VendedorId`
     * const vendedorWithVendedorIdOnly = await prisma.vendedor.updateManyAndReturn({
     *   select: { VendedorId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VendedorUpdateManyAndReturnArgs>(args: SelectSubset<T, VendedorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendedorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vendedor.
     * @param {VendedorUpsertArgs} args - Arguments to update or create a Vendedor.
     * @example
     * // Update or create a Vendedor
     * const vendedor = await prisma.vendedor.upsert({
     *   create: {
     *     // ... data to create a Vendedor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendedor we want to update
     *   }
     * })
     */
    upsert<T extends VendedorUpsertArgs>(args: SelectSubset<T, VendedorUpsertArgs<ExtArgs>>): Prisma__VendedorClient<$Result.GetResult<Prisma.$VendedorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vendedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendedorCountArgs} args - Arguments to filter Vendedors to count.
     * @example
     * // Count the number of Vendedors
     * const count = await prisma.vendedor.count({
     *   where: {
     *     // ... the filter for the Vendedors we want to count
     *   }
     * })
    **/
    count<T extends VendedorCountArgs>(
      args?: Subset<T, VendedorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendedorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vendedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendedorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VendedorAggregateArgs>(args: Subset<T, VendedorAggregateArgs>): Prisma.PrismaPromise<GetVendedorAggregateType<T>>

    /**
     * Group by Vendedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendedorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VendedorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendedorGroupByArgs['orderBy'] }
        : { orderBy?: VendedorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VendedorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendedorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vendedor model
   */
  readonly fields: VendedorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vendedor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VendedorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Pedido<T extends Vendedor$PedidoArgs<ExtArgs> = {}>(args?: Subset<T, Vendedor$PedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vendedor model
   */
  interface VendedorFieldRefs {
    readonly VendedorId: FieldRef<"Vendedor", 'Int'>
    readonly VendedorNome: FieldRef<"Vendedor", 'String'>
    readonly VendedorCidade: FieldRef<"Vendedor", 'String'>
    readonly VendedorUF: FieldRef<"Vendedor", 'String'>
    readonly VendedorDtImportacao: FieldRef<"Vendedor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vendedor findUnique
   */
  export type VendedorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedor
     */
    select?: VendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedor
     */
    omit?: VendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedorInclude<ExtArgs> | null
    /**
     * Filter, which Vendedor to fetch.
     */
    where: VendedorWhereUniqueInput
  }

  /**
   * Vendedor findUniqueOrThrow
   */
  export type VendedorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedor
     */
    select?: VendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedor
     */
    omit?: VendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedorInclude<ExtArgs> | null
    /**
     * Filter, which Vendedor to fetch.
     */
    where: VendedorWhereUniqueInput
  }

  /**
   * Vendedor findFirst
   */
  export type VendedorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedor
     */
    select?: VendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedor
     */
    omit?: VendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedorInclude<ExtArgs> | null
    /**
     * Filter, which Vendedor to fetch.
     */
    where?: VendedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendedors to fetch.
     */
    orderBy?: VendedorOrderByWithRelationInput | VendedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendedors.
     */
    cursor?: VendedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendedors.
     */
    distinct?: VendedorScalarFieldEnum | VendedorScalarFieldEnum[]
  }

  /**
   * Vendedor findFirstOrThrow
   */
  export type VendedorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedor
     */
    select?: VendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedor
     */
    omit?: VendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedorInclude<ExtArgs> | null
    /**
     * Filter, which Vendedor to fetch.
     */
    where?: VendedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendedors to fetch.
     */
    orderBy?: VendedorOrderByWithRelationInput | VendedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendedors.
     */
    cursor?: VendedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendedors.
     */
    distinct?: VendedorScalarFieldEnum | VendedorScalarFieldEnum[]
  }

  /**
   * Vendedor findMany
   */
  export type VendedorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedor
     */
    select?: VendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedor
     */
    omit?: VendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedorInclude<ExtArgs> | null
    /**
     * Filter, which Vendedors to fetch.
     */
    where?: VendedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendedors to fetch.
     */
    orderBy?: VendedorOrderByWithRelationInput | VendedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vendedors.
     */
    cursor?: VendedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendedors.
     */
    distinct?: VendedorScalarFieldEnum | VendedorScalarFieldEnum[]
  }

  /**
   * Vendedor create
   */
  export type VendedorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedor
     */
    select?: VendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedor
     */
    omit?: VendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedorInclude<ExtArgs> | null
    /**
     * The data needed to create a Vendedor.
     */
    data: XOR<VendedorCreateInput, VendedorUncheckedCreateInput>
  }

  /**
   * Vendedor createMany
   */
  export type VendedorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vendedors.
     */
    data: VendedorCreateManyInput | VendedorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vendedor createManyAndReturn
   */
  export type VendedorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedor
     */
    select?: VendedorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedor
     */
    omit?: VendedorOmit<ExtArgs> | null
    /**
     * The data used to create many Vendedors.
     */
    data: VendedorCreateManyInput | VendedorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vendedor update
   */
  export type VendedorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedor
     */
    select?: VendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedor
     */
    omit?: VendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedorInclude<ExtArgs> | null
    /**
     * The data needed to update a Vendedor.
     */
    data: XOR<VendedorUpdateInput, VendedorUncheckedUpdateInput>
    /**
     * Choose, which Vendedor to update.
     */
    where: VendedorWhereUniqueInput
  }

  /**
   * Vendedor updateMany
   */
  export type VendedorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vendedors.
     */
    data: XOR<VendedorUpdateManyMutationInput, VendedorUncheckedUpdateManyInput>
    /**
     * Filter which Vendedors to update
     */
    where?: VendedorWhereInput
    /**
     * Limit how many Vendedors to update.
     */
    limit?: number
  }

  /**
   * Vendedor updateManyAndReturn
   */
  export type VendedorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedor
     */
    select?: VendedorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedor
     */
    omit?: VendedorOmit<ExtArgs> | null
    /**
     * The data used to update Vendedors.
     */
    data: XOR<VendedorUpdateManyMutationInput, VendedorUncheckedUpdateManyInput>
    /**
     * Filter which Vendedors to update
     */
    where?: VendedorWhereInput
    /**
     * Limit how many Vendedors to update.
     */
    limit?: number
  }

  /**
   * Vendedor upsert
   */
  export type VendedorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedor
     */
    select?: VendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedor
     */
    omit?: VendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedorInclude<ExtArgs> | null
    /**
     * The filter to search for the Vendedor to update in case it exists.
     */
    where: VendedorWhereUniqueInput
    /**
     * In case the Vendedor found by the `where` argument doesn't exist, create a new Vendedor with this data.
     */
    create: XOR<VendedorCreateInput, VendedorUncheckedCreateInput>
    /**
     * In case the Vendedor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendedorUpdateInput, VendedorUncheckedUpdateInput>
  }

  /**
   * Vendedor delete
   */
  export type VendedorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedor
     */
    select?: VendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedor
     */
    omit?: VendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedorInclude<ExtArgs> | null
    /**
     * Filter which Vendedor to delete.
     */
    where: VendedorWhereUniqueInput
  }

  /**
   * Vendedor deleteMany
   */
  export type VendedorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendedors to delete
     */
    where?: VendedorWhereInput
    /**
     * Limit how many Vendedors to delete.
     */
    limit?: number
  }

  /**
   * Vendedor.Pedido
   */
  export type Vendedor$PedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Vendedor without action
   */
  export type VendedorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedor
     */
    select?: VendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedor
     */
    omit?: VendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedorInclude<ExtArgs> | null
  }


  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaMinAggregateOutputType = {
    CategoriaId: string | null
    CategoriaNome: string | null
    CategoriaDtImportacao: Date | null
  }

  export type CategoriaMaxAggregateOutputType = {
    CategoriaId: string | null
    CategoriaNome: string | null
    CategoriaDtImportacao: Date | null
  }

  export type CategoriaCountAggregateOutputType = {
    CategoriaId: number
    CategoriaNome: number
    CategoriaDtImportacao: number
    _all: number
  }


  export type CategoriaMinAggregateInputType = {
    CategoriaId?: true
    CategoriaNome?: true
    CategoriaDtImportacao?: true
  }

  export type CategoriaMaxAggregateInputType = {
    CategoriaId?: true
    CategoriaNome?: true
    CategoriaDtImportacao?: true
  }

  export type CategoriaCountAggregateInputType = {
    CategoriaId?: true
    CategoriaNome?: true
    CategoriaDtImportacao?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    CategoriaId: string
    CategoriaNome: string
    CategoriaDtImportacao: Date
    _count: CategoriaCountAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CategoriaId?: boolean
    CategoriaNome?: boolean
    CategoriaDtImportacao?: boolean
    SubCategoria?: boolean | Categoria$SubCategoriaArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CategoriaId?: boolean
    CategoriaNome?: boolean
    CategoriaDtImportacao?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CategoriaId?: boolean
    CategoriaNome?: boolean
    CategoriaDtImportacao?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectScalar = {
    CategoriaId?: boolean
    CategoriaNome?: boolean
    CategoriaDtImportacao?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"CategoriaId" | "CategoriaNome" | "CategoriaDtImportacao", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SubCategoria?: boolean | Categoria$SubCategoriaArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      SubCategoria: Prisma.$SubCategoriaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      CategoriaId: string
      CategoriaNome: string
      CategoriaDtImportacao: Date
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `CategoriaId`
     * const categoriaWithCategoriaIdOnly = await prisma.categoria.findMany({ select: { CategoriaId: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {CategoriaCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `CategoriaId`
     * const categoriaWithCategoriaIdOnly = await prisma.categoria.createManyAndReturn({
     *   select: { CategoriaId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {CategoriaUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `CategoriaId`
     * const categoriaWithCategoriaIdOnly = await prisma.categoria.updateManyAndReturn({
     *   select: { CategoriaId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    SubCategoria<T extends Categoria$SubCategoriaArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$SubCategoriaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly CategoriaId: FieldRef<"Categoria", 'String'>
    readonly CategoriaNome: FieldRef<"Categoria", 'String'>
    readonly CategoriaDtImportacao: FieldRef<"Categoria", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria createManyAndReturn
   */
  export type CategoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria updateManyAndReturn
   */
  export type CategoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria.SubCategoria
   */
  export type Categoria$SubCategoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoria
     */
    select?: SubCategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategoria
     */
    omit?: SubCategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriaInclude<ExtArgs> | null
    where?: SubCategoriaWhereInput
    orderBy?: SubCategoriaOrderByWithRelationInput | SubCategoriaOrderByWithRelationInput[]
    cursor?: SubCategoriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubCategoriaScalarFieldEnum | SubCategoriaScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model SubCategoria
   */

  export type AggregateSubCategoria = {
    _count: SubCategoriaCountAggregateOutputType | null
    _min: SubCategoriaMinAggregateOutputType | null
    _max: SubCategoriaMaxAggregateOutputType | null
  }

  export type SubCategoriaMinAggregateOutputType = {
    SubCategoriaId: string | null
    CategoriaId: string | null
    SubCategoriaNome: string | null
    SubCategoriaDtImportacao: Date | null
  }

  export type SubCategoriaMaxAggregateOutputType = {
    SubCategoriaId: string | null
    CategoriaId: string | null
    SubCategoriaNome: string | null
    SubCategoriaDtImportacao: Date | null
  }

  export type SubCategoriaCountAggregateOutputType = {
    SubCategoriaId: number
    CategoriaId: number
    SubCategoriaNome: number
    SubCategoriaDtImportacao: number
    _all: number
  }


  export type SubCategoriaMinAggregateInputType = {
    SubCategoriaId?: true
    CategoriaId?: true
    SubCategoriaNome?: true
    SubCategoriaDtImportacao?: true
  }

  export type SubCategoriaMaxAggregateInputType = {
    SubCategoriaId?: true
    CategoriaId?: true
    SubCategoriaNome?: true
    SubCategoriaDtImportacao?: true
  }

  export type SubCategoriaCountAggregateInputType = {
    SubCategoriaId?: true
    CategoriaId?: true
    SubCategoriaNome?: true
    SubCategoriaDtImportacao?: true
    _all?: true
  }

  export type SubCategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubCategoria to aggregate.
     */
    where?: SubCategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategorias to fetch.
     */
    orderBy?: SubCategoriaOrderByWithRelationInput | SubCategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubCategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubCategorias
    **/
    _count?: true | SubCategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubCategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubCategoriaMaxAggregateInputType
  }

  export type GetSubCategoriaAggregateType<T extends SubCategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateSubCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubCategoria[P]>
      : GetScalarType<T[P], AggregateSubCategoria[P]>
  }




  export type SubCategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubCategoriaWhereInput
    orderBy?: SubCategoriaOrderByWithAggregationInput | SubCategoriaOrderByWithAggregationInput[]
    by: SubCategoriaScalarFieldEnum[] | SubCategoriaScalarFieldEnum
    having?: SubCategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubCategoriaCountAggregateInputType | true
    _min?: SubCategoriaMinAggregateInputType
    _max?: SubCategoriaMaxAggregateInputType
  }

  export type SubCategoriaGroupByOutputType = {
    SubCategoriaId: string
    CategoriaId: string
    SubCategoriaNome: string
    SubCategoriaDtImportacao: Date
    _count: SubCategoriaCountAggregateOutputType | null
    _min: SubCategoriaMinAggregateOutputType | null
    _max: SubCategoriaMaxAggregateOutputType | null
  }

  type GetSubCategoriaGroupByPayload<T extends SubCategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubCategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubCategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubCategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], SubCategoriaGroupByOutputType[P]>
        }
      >
    >


  export type SubCategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SubCategoriaId?: boolean
    CategoriaId?: boolean
    SubCategoriaNome?: boolean
    SubCategoriaDtImportacao?: boolean
    Categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    ItemPedido?: boolean | SubCategoria$ItemPedidoArgs<ExtArgs>
    _count?: boolean | SubCategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subCategoria"]>

  export type SubCategoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SubCategoriaId?: boolean
    CategoriaId?: boolean
    SubCategoriaNome?: boolean
    SubCategoriaDtImportacao?: boolean
    Categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subCategoria"]>

  export type SubCategoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SubCategoriaId?: boolean
    CategoriaId?: boolean
    SubCategoriaNome?: boolean
    SubCategoriaDtImportacao?: boolean
    Categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subCategoria"]>

  export type SubCategoriaSelectScalar = {
    SubCategoriaId?: boolean
    CategoriaId?: boolean
    SubCategoriaNome?: boolean
    SubCategoriaDtImportacao?: boolean
  }

  export type SubCategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"SubCategoriaId" | "CategoriaId" | "SubCategoriaNome" | "SubCategoriaDtImportacao", ExtArgs["result"]["subCategoria"]>
  export type SubCategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    ItemPedido?: boolean | SubCategoria$ItemPedidoArgs<ExtArgs>
    _count?: boolean | SubCategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubCategoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }
  export type SubCategoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }

  export type $SubCategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubCategoria"
    objects: {
      Categoria: Prisma.$CategoriaPayload<ExtArgs>
      ItemPedido: Prisma.$ItemPedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      SubCategoriaId: string
      CategoriaId: string
      SubCategoriaNome: string
      SubCategoriaDtImportacao: Date
    }, ExtArgs["result"]["subCategoria"]>
    composites: {}
  }

  type SubCategoriaGetPayload<S extends boolean | null | undefined | SubCategoriaDefaultArgs> = $Result.GetResult<Prisma.$SubCategoriaPayload, S>

  type SubCategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubCategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubCategoriaCountAggregateInputType | true
    }

  export interface SubCategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubCategoria'], meta: { name: 'SubCategoria' } }
    /**
     * Find zero or one SubCategoria that matches the filter.
     * @param {SubCategoriaFindUniqueArgs} args - Arguments to find a SubCategoria
     * @example
     * // Get one SubCategoria
     * const subCategoria = await prisma.subCategoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubCategoriaFindUniqueArgs>(args: SelectSubset<T, SubCategoriaFindUniqueArgs<ExtArgs>>): Prisma__SubCategoriaClient<$Result.GetResult<Prisma.$SubCategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubCategoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubCategoriaFindUniqueOrThrowArgs} args - Arguments to find a SubCategoria
     * @example
     * // Get one SubCategoria
     * const subCategoria = await prisma.subCategoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubCategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, SubCategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubCategoriaClient<$Result.GetResult<Prisma.$SubCategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubCategoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoriaFindFirstArgs} args - Arguments to find a SubCategoria
     * @example
     * // Get one SubCategoria
     * const subCategoria = await prisma.subCategoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubCategoriaFindFirstArgs>(args?: SelectSubset<T, SubCategoriaFindFirstArgs<ExtArgs>>): Prisma__SubCategoriaClient<$Result.GetResult<Prisma.$SubCategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubCategoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoriaFindFirstOrThrowArgs} args - Arguments to find a SubCategoria
     * @example
     * // Get one SubCategoria
     * const subCategoria = await prisma.subCategoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubCategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, SubCategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubCategoriaClient<$Result.GetResult<Prisma.$SubCategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubCategorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubCategorias
     * const subCategorias = await prisma.subCategoria.findMany()
     * 
     * // Get first 10 SubCategorias
     * const subCategorias = await prisma.subCategoria.findMany({ take: 10 })
     * 
     * // Only select the `SubCategoriaId`
     * const subCategoriaWithSubCategoriaIdOnly = await prisma.subCategoria.findMany({ select: { SubCategoriaId: true } })
     * 
     */
    findMany<T extends SubCategoriaFindManyArgs>(args?: SelectSubset<T, SubCategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubCategoria.
     * @param {SubCategoriaCreateArgs} args - Arguments to create a SubCategoria.
     * @example
     * // Create one SubCategoria
     * const SubCategoria = await prisma.subCategoria.create({
     *   data: {
     *     // ... data to create a SubCategoria
     *   }
     * })
     * 
     */
    create<T extends SubCategoriaCreateArgs>(args: SelectSubset<T, SubCategoriaCreateArgs<ExtArgs>>): Prisma__SubCategoriaClient<$Result.GetResult<Prisma.$SubCategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubCategorias.
     * @param {SubCategoriaCreateManyArgs} args - Arguments to create many SubCategorias.
     * @example
     * // Create many SubCategorias
     * const subCategoria = await prisma.subCategoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubCategoriaCreateManyArgs>(args?: SelectSubset<T, SubCategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubCategorias and returns the data saved in the database.
     * @param {SubCategoriaCreateManyAndReturnArgs} args - Arguments to create many SubCategorias.
     * @example
     * // Create many SubCategorias
     * const subCategoria = await prisma.subCategoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubCategorias and only return the `SubCategoriaId`
     * const subCategoriaWithSubCategoriaIdOnly = await prisma.subCategoria.createManyAndReturn({
     *   select: { SubCategoriaId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubCategoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, SubCategoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubCategoria.
     * @param {SubCategoriaDeleteArgs} args - Arguments to delete one SubCategoria.
     * @example
     * // Delete one SubCategoria
     * const SubCategoria = await prisma.subCategoria.delete({
     *   where: {
     *     // ... filter to delete one SubCategoria
     *   }
     * })
     * 
     */
    delete<T extends SubCategoriaDeleteArgs>(args: SelectSubset<T, SubCategoriaDeleteArgs<ExtArgs>>): Prisma__SubCategoriaClient<$Result.GetResult<Prisma.$SubCategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubCategoria.
     * @param {SubCategoriaUpdateArgs} args - Arguments to update one SubCategoria.
     * @example
     * // Update one SubCategoria
     * const subCategoria = await prisma.subCategoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubCategoriaUpdateArgs>(args: SelectSubset<T, SubCategoriaUpdateArgs<ExtArgs>>): Prisma__SubCategoriaClient<$Result.GetResult<Prisma.$SubCategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubCategorias.
     * @param {SubCategoriaDeleteManyArgs} args - Arguments to filter SubCategorias to delete.
     * @example
     * // Delete a few SubCategorias
     * const { count } = await prisma.subCategoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubCategoriaDeleteManyArgs>(args?: SelectSubset<T, SubCategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubCategorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubCategorias
     * const subCategoria = await prisma.subCategoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubCategoriaUpdateManyArgs>(args: SelectSubset<T, SubCategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubCategorias and returns the data updated in the database.
     * @param {SubCategoriaUpdateManyAndReturnArgs} args - Arguments to update many SubCategorias.
     * @example
     * // Update many SubCategorias
     * const subCategoria = await prisma.subCategoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubCategorias and only return the `SubCategoriaId`
     * const subCategoriaWithSubCategoriaIdOnly = await prisma.subCategoria.updateManyAndReturn({
     *   select: { SubCategoriaId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubCategoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, SubCategoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubCategoria.
     * @param {SubCategoriaUpsertArgs} args - Arguments to update or create a SubCategoria.
     * @example
     * // Update or create a SubCategoria
     * const subCategoria = await prisma.subCategoria.upsert({
     *   create: {
     *     // ... data to create a SubCategoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubCategoria we want to update
     *   }
     * })
     */
    upsert<T extends SubCategoriaUpsertArgs>(args: SelectSubset<T, SubCategoriaUpsertArgs<ExtArgs>>): Prisma__SubCategoriaClient<$Result.GetResult<Prisma.$SubCategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubCategorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoriaCountArgs} args - Arguments to filter SubCategorias to count.
     * @example
     * // Count the number of SubCategorias
     * const count = await prisma.subCategoria.count({
     *   where: {
     *     // ... the filter for the SubCategorias we want to count
     *   }
     * })
    **/
    count<T extends SubCategoriaCountArgs>(
      args?: Subset<T, SubCategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubCategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubCategoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubCategoriaAggregateArgs>(args: Subset<T, SubCategoriaAggregateArgs>): Prisma.PrismaPromise<GetSubCategoriaAggregateType<T>>

    /**
     * Group by SubCategoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubCategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubCategoriaGroupByArgs['orderBy'] }
        : { orderBy?: SubCategoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubCategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubCategoria model
   */
  readonly fields: SubCategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubCategoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubCategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ItemPedido<T extends SubCategoria$ItemPedidoArgs<ExtArgs> = {}>(args?: Subset<T, SubCategoria$ItemPedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SubCategoria model
   */
  interface SubCategoriaFieldRefs {
    readonly SubCategoriaId: FieldRef<"SubCategoria", 'String'>
    readonly CategoriaId: FieldRef<"SubCategoria", 'String'>
    readonly SubCategoriaNome: FieldRef<"SubCategoria", 'String'>
    readonly SubCategoriaDtImportacao: FieldRef<"SubCategoria", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubCategoria findUnique
   */
  export type SubCategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoria
     */
    select?: SubCategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategoria
     */
    omit?: SubCategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriaInclude<ExtArgs> | null
    /**
     * Filter, which SubCategoria to fetch.
     */
    where: SubCategoriaWhereUniqueInput
  }

  /**
   * SubCategoria findUniqueOrThrow
   */
  export type SubCategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoria
     */
    select?: SubCategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategoria
     */
    omit?: SubCategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriaInclude<ExtArgs> | null
    /**
     * Filter, which SubCategoria to fetch.
     */
    where: SubCategoriaWhereUniqueInput
  }

  /**
   * SubCategoria findFirst
   */
  export type SubCategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoria
     */
    select?: SubCategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategoria
     */
    omit?: SubCategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriaInclude<ExtArgs> | null
    /**
     * Filter, which SubCategoria to fetch.
     */
    where?: SubCategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategorias to fetch.
     */
    orderBy?: SubCategoriaOrderByWithRelationInput | SubCategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubCategorias.
     */
    cursor?: SubCategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubCategorias.
     */
    distinct?: SubCategoriaScalarFieldEnum | SubCategoriaScalarFieldEnum[]
  }

  /**
   * SubCategoria findFirstOrThrow
   */
  export type SubCategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoria
     */
    select?: SubCategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategoria
     */
    omit?: SubCategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriaInclude<ExtArgs> | null
    /**
     * Filter, which SubCategoria to fetch.
     */
    where?: SubCategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategorias to fetch.
     */
    orderBy?: SubCategoriaOrderByWithRelationInput | SubCategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubCategorias.
     */
    cursor?: SubCategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubCategorias.
     */
    distinct?: SubCategoriaScalarFieldEnum | SubCategoriaScalarFieldEnum[]
  }

  /**
   * SubCategoria findMany
   */
  export type SubCategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoria
     */
    select?: SubCategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategoria
     */
    omit?: SubCategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriaInclude<ExtArgs> | null
    /**
     * Filter, which SubCategorias to fetch.
     */
    where?: SubCategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategorias to fetch.
     */
    orderBy?: SubCategoriaOrderByWithRelationInput | SubCategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubCategorias.
     */
    cursor?: SubCategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubCategorias.
     */
    distinct?: SubCategoriaScalarFieldEnum | SubCategoriaScalarFieldEnum[]
  }

  /**
   * SubCategoria create
   */
  export type SubCategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoria
     */
    select?: SubCategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategoria
     */
    omit?: SubCategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a SubCategoria.
     */
    data: XOR<SubCategoriaCreateInput, SubCategoriaUncheckedCreateInput>
  }

  /**
   * SubCategoria createMany
   */
  export type SubCategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubCategorias.
     */
    data: SubCategoriaCreateManyInput | SubCategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubCategoria createManyAndReturn
   */
  export type SubCategoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoria
     */
    select?: SubCategoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategoria
     */
    omit?: SubCategoriaOmit<ExtArgs> | null
    /**
     * The data used to create many SubCategorias.
     */
    data: SubCategoriaCreateManyInput | SubCategoriaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubCategoria update
   */
  export type SubCategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoria
     */
    select?: SubCategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategoria
     */
    omit?: SubCategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a SubCategoria.
     */
    data: XOR<SubCategoriaUpdateInput, SubCategoriaUncheckedUpdateInput>
    /**
     * Choose, which SubCategoria to update.
     */
    where: SubCategoriaWhereUniqueInput
  }

  /**
   * SubCategoria updateMany
   */
  export type SubCategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubCategorias.
     */
    data: XOR<SubCategoriaUpdateManyMutationInput, SubCategoriaUncheckedUpdateManyInput>
    /**
     * Filter which SubCategorias to update
     */
    where?: SubCategoriaWhereInput
    /**
     * Limit how many SubCategorias to update.
     */
    limit?: number
  }

  /**
   * SubCategoria updateManyAndReturn
   */
  export type SubCategoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoria
     */
    select?: SubCategoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategoria
     */
    omit?: SubCategoriaOmit<ExtArgs> | null
    /**
     * The data used to update SubCategorias.
     */
    data: XOR<SubCategoriaUpdateManyMutationInput, SubCategoriaUncheckedUpdateManyInput>
    /**
     * Filter which SubCategorias to update
     */
    where?: SubCategoriaWhereInput
    /**
     * Limit how many SubCategorias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubCategoria upsert
   */
  export type SubCategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoria
     */
    select?: SubCategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategoria
     */
    omit?: SubCategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the SubCategoria to update in case it exists.
     */
    where: SubCategoriaWhereUniqueInput
    /**
     * In case the SubCategoria found by the `where` argument doesn't exist, create a new SubCategoria with this data.
     */
    create: XOR<SubCategoriaCreateInput, SubCategoriaUncheckedCreateInput>
    /**
     * In case the SubCategoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubCategoriaUpdateInput, SubCategoriaUncheckedUpdateInput>
  }

  /**
   * SubCategoria delete
   */
  export type SubCategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoria
     */
    select?: SubCategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategoria
     */
    omit?: SubCategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriaInclude<ExtArgs> | null
    /**
     * Filter which SubCategoria to delete.
     */
    where: SubCategoriaWhereUniqueInput
  }

  /**
   * SubCategoria deleteMany
   */
  export type SubCategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubCategorias to delete
     */
    where?: SubCategoriaWhereInput
    /**
     * Limit how many SubCategorias to delete.
     */
    limit?: number
  }

  /**
   * SubCategoria.ItemPedido
   */
  export type SubCategoria$ItemPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    where?: ItemPedidoWhereInput
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    cursor?: ItemPedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * SubCategoria without action
   */
  export type SubCategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoria
     */
    select?: SubCategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategoria
     */
    omit?: SubCategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Produto
   */

  export type AggregateProduto = {
    _count: ProdutoCountAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  export type ProdutoMinAggregateOutputType = {
    ProdutoId: string | null
    ProdutoNome: string | null
    ProdutoDtImportacao: Date | null
  }

  export type ProdutoMaxAggregateOutputType = {
    ProdutoId: string | null
    ProdutoNome: string | null
    ProdutoDtImportacao: Date | null
  }

  export type ProdutoCountAggregateOutputType = {
    ProdutoId: number
    ProdutoNome: number
    ProdutoDtImportacao: number
    _all: number
  }


  export type ProdutoMinAggregateInputType = {
    ProdutoId?: true
    ProdutoNome?: true
    ProdutoDtImportacao?: true
  }

  export type ProdutoMaxAggregateInputType = {
    ProdutoId?: true
    ProdutoNome?: true
    ProdutoDtImportacao?: true
  }

  export type ProdutoCountAggregateInputType = {
    ProdutoId?: true
    ProdutoNome?: true
    ProdutoDtImportacao?: true
    _all?: true
  }

  export type ProdutoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produto to aggregate.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produtos
    **/
    _count?: true | ProdutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutoMaxAggregateInputType
  }

  export type GetProdutoAggregateType<T extends ProdutoAggregateArgs> = {
        [P in keyof T & keyof AggregateProduto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduto[P]>
      : GetScalarType<T[P], AggregateProduto[P]>
  }




  export type ProdutoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithAggregationInput | ProdutoOrderByWithAggregationInput[]
    by: ProdutoScalarFieldEnum[] | ProdutoScalarFieldEnum
    having?: ProdutoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutoCountAggregateInputType | true
    _min?: ProdutoMinAggregateInputType
    _max?: ProdutoMaxAggregateInputType
  }

  export type ProdutoGroupByOutputType = {
    ProdutoId: string
    ProdutoNome: string
    ProdutoDtImportacao: Date
    _count: ProdutoCountAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  type GetProdutoGroupByPayload<T extends ProdutoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
        }
      >
    >


  export type ProdutoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ProdutoId?: boolean
    ProdutoNome?: boolean
    ProdutoDtImportacao?: boolean
    ItemPedido?: boolean | Produto$ItemPedidoArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ProdutoId?: boolean
    ProdutoNome?: boolean
    ProdutoDtImportacao?: boolean
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ProdutoId?: boolean
    ProdutoNome?: boolean
    ProdutoDtImportacao?: boolean
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectScalar = {
    ProdutoId?: boolean
    ProdutoNome?: boolean
    ProdutoDtImportacao?: boolean
  }

  export type ProdutoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ProdutoId" | "ProdutoNome" | "ProdutoDtImportacao", ExtArgs["result"]["produto"]>
  export type ProdutoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ItemPedido?: boolean | Produto$ItemPedidoArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProdutoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProdutoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProdutoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produto"
    objects: {
      ItemPedido: Prisma.$ItemPedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ProdutoId: string
      ProdutoNome: string
      ProdutoDtImportacao: Date
    }, ExtArgs["result"]["produto"]>
    composites: {}
  }

  type ProdutoGetPayload<S extends boolean | null | undefined | ProdutoDefaultArgs> = $Result.GetResult<Prisma.$ProdutoPayload, S>

  type ProdutoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProdutoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdutoCountAggregateInputType | true
    }

  export interface ProdutoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produto'], meta: { name: 'Produto' } }
    /**
     * Find zero or one Produto that matches the filter.
     * @param {ProdutoFindUniqueArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdutoFindUniqueArgs>(args: SelectSubset<T, ProdutoFindUniqueArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdutoFindUniqueOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdutoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProdutoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdutoFindFirstArgs>(args?: SelectSubset<T, ProdutoFindFirstArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdutoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProdutoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtos
     * const produtos = await prisma.produto.findMany()
     * 
     * // Get first 10 Produtos
     * const produtos = await prisma.produto.findMany({ take: 10 })
     * 
     * // Only select the `ProdutoId`
     * const produtoWithProdutoIdOnly = await prisma.produto.findMany({ select: { ProdutoId: true } })
     * 
     */
    findMany<T extends ProdutoFindManyArgs>(args?: SelectSubset<T, ProdutoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produto.
     * @param {ProdutoCreateArgs} args - Arguments to create a Produto.
     * @example
     * // Create one Produto
     * const Produto = await prisma.produto.create({
     *   data: {
     *     // ... data to create a Produto
     *   }
     * })
     * 
     */
    create<T extends ProdutoCreateArgs>(args: SelectSubset<T, ProdutoCreateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produtos.
     * @param {ProdutoCreateManyArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProdutoCreateManyArgs>(args?: SelectSubset<T, ProdutoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produtos and returns the data saved in the database.
     * @param {ProdutoCreateManyAndReturnArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produtos and only return the `ProdutoId`
     * const produtoWithProdutoIdOnly = await prisma.produto.createManyAndReturn({
     *   select: { ProdutoId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProdutoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProdutoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produto.
     * @param {ProdutoDeleteArgs} args - Arguments to delete one Produto.
     * @example
     * // Delete one Produto
     * const Produto = await prisma.produto.delete({
     *   where: {
     *     // ... filter to delete one Produto
     *   }
     * })
     * 
     */
    delete<T extends ProdutoDeleteArgs>(args: SelectSubset<T, ProdutoDeleteArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produto.
     * @param {ProdutoUpdateArgs} args - Arguments to update one Produto.
     * @example
     * // Update one Produto
     * const produto = await prisma.produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProdutoUpdateArgs>(args: SelectSubset<T, ProdutoUpdateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produtos.
     * @param {ProdutoDeleteManyArgs} args - Arguments to filter Produtos to delete.
     * @example
     * // Delete a few Produtos
     * const { count } = await prisma.produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProdutoDeleteManyArgs>(args?: SelectSubset<T, ProdutoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProdutoUpdateManyArgs>(args: SelectSubset<T, ProdutoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos and returns the data updated in the database.
     * @param {ProdutoUpdateManyAndReturnArgs} args - Arguments to update many Produtos.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produtos and only return the `ProdutoId`
     * const produtoWithProdutoIdOnly = await prisma.produto.updateManyAndReturn({
     *   select: { ProdutoId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProdutoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProdutoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produto.
     * @param {ProdutoUpsertArgs} args - Arguments to update or create a Produto.
     * @example
     * // Update or create a Produto
     * const produto = await prisma.produto.upsert({
     *   create: {
     *     // ... data to create a Produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produto we want to update
     *   }
     * })
     */
    upsert<T extends ProdutoUpsertArgs>(args: SelectSubset<T, ProdutoUpsertArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoCountArgs} args - Arguments to filter Produtos to count.
     * @example
     * // Count the number of Produtos
     * const count = await prisma.produto.count({
     *   where: {
     *     // ... the filter for the Produtos we want to count
     *   }
     * })
    **/
    count<T extends ProdutoCountArgs>(
      args?: Subset<T, ProdutoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProdutoAggregateArgs>(args: Subset<T, ProdutoAggregateArgs>): Prisma.PrismaPromise<GetProdutoAggregateType<T>>

    /**
     * Group by Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProdutoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdutoGroupByArgs['orderBy'] }
        : { orderBy?: ProdutoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProdutoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produto model
   */
  readonly fields: ProdutoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdutoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ItemPedido<T extends Produto$ItemPedidoArgs<ExtArgs> = {}>(args?: Subset<T, Produto$ItemPedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Produto model
   */
  interface ProdutoFieldRefs {
    readonly ProdutoId: FieldRef<"Produto", 'String'>
    readonly ProdutoNome: FieldRef<"Produto", 'String'>
    readonly ProdutoDtImportacao: FieldRef<"Produto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Produto findUnique
   */
  export type ProdutoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findUniqueOrThrow
   */
  export type ProdutoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findFirst
   */
  export type ProdutoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findFirstOrThrow
   */
  export type ProdutoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findMany
   */
  export type ProdutoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produtos to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto create
   */
  export type ProdutoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to create a Produto.
     */
    data: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
  }

  /**
   * Produto createMany
   */
  export type ProdutoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produto createManyAndReturn
   */
  export type ProdutoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produto update
   */
  export type ProdutoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to update a Produto.
     */
    data: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
    /**
     * Choose, which Produto to update.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto updateMany
   */
  export type ProdutoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to update.
     */
    limit?: number
  }

  /**
   * Produto updateManyAndReturn
   */
  export type ProdutoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to update.
     */
    limit?: number
  }

  /**
   * Produto upsert
   */
  export type ProdutoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The filter to search for the Produto to update in case it exists.
     */
    where: ProdutoWhereUniqueInput
    /**
     * In case the Produto found by the `where` argument doesn't exist, create a new Produto with this data.
     */
    create: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
    /**
     * In case the Produto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
  }

  /**
   * Produto delete
   */
  export type ProdutoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter which Produto to delete.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto deleteMany
   */
  export type ProdutoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produtos to delete
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to delete.
     */
    limit?: number
  }

  /**
   * Produto.ItemPedido
   */
  export type Produto$ItemPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    where?: ItemPedidoWhereInput
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    cursor?: ItemPedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * Produto without action
   */
  export type ProdutoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
  }


  /**
   * Model Pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    PedidoValorTotal: Decimal | null
    ClienteId: number | null
    VendedorId: number | null
  }

  export type PedidoSumAggregateOutputType = {
    PedidoValorTotal: Decimal | null
    ClienteId: number | null
    VendedorId: number | null
  }

  export type PedidoMinAggregateOutputType = {
    PedidoId: string | null
    PedidoDtCriacao: Date | null
    PedidoDtImportacao: Date | null
    PedidoTipoCriacao: string | null
    PedidoStatus: string | null
    PedidoValorTotal: Decimal | null
    ClienteId: number | null
    VendedorId: number | null
  }

  export type PedidoMaxAggregateOutputType = {
    PedidoId: string | null
    PedidoDtCriacao: Date | null
    PedidoDtImportacao: Date | null
    PedidoTipoCriacao: string | null
    PedidoStatus: string | null
    PedidoValorTotal: Decimal | null
    ClienteId: number | null
    VendedorId: number | null
  }

  export type PedidoCountAggregateOutputType = {
    PedidoId: number
    PedidoDtCriacao: number
    PedidoDtImportacao: number
    PedidoTipoCriacao: number
    PedidoStatus: number
    PedidoValorTotal: number
    ClienteId: number
    VendedorId: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    PedidoValorTotal?: true
    ClienteId?: true
    VendedorId?: true
  }

  export type PedidoSumAggregateInputType = {
    PedidoValorTotal?: true
    ClienteId?: true
    VendedorId?: true
  }

  export type PedidoMinAggregateInputType = {
    PedidoId?: true
    PedidoDtCriacao?: true
    PedidoDtImportacao?: true
    PedidoTipoCriacao?: true
    PedidoStatus?: true
    PedidoValorTotal?: true
    ClienteId?: true
    VendedorId?: true
  }

  export type PedidoMaxAggregateInputType = {
    PedidoId?: true
    PedidoDtCriacao?: true
    PedidoDtImportacao?: true
    PedidoTipoCriacao?: true
    PedidoStatus?: true
    PedidoValorTotal?: true
    ClienteId?: true
    VendedorId?: true
  }

  export type PedidoCountAggregateInputType = {
    PedidoId?: true
    PedidoDtCriacao?: true
    PedidoDtImportacao?: true
    PedidoTipoCriacao?: true
    PedidoStatus?: true
    PedidoValorTotal?: true
    ClienteId?: true
    VendedorId?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedido to aggregate.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type PedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithAggregationInput | PedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: PedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    PedidoId: string
    PedidoDtCriacao: Date
    PedidoDtImportacao: Date
    PedidoTipoCriacao: string
    PedidoStatus: string
    PedidoValorTotal: Decimal
    ClienteId: number
    VendedorId: number
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends PedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type PedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PedidoId?: boolean
    PedidoDtCriacao?: boolean
    PedidoDtImportacao?: boolean
    PedidoTipoCriacao?: boolean
    PedidoStatus?: boolean
    PedidoValorTotal?: boolean
    ClienteId?: boolean
    VendedorId?: boolean
    Cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    Vendedor?: boolean | VendedorDefaultArgs<ExtArgs>
    ItemPedido?: boolean | Pedido$ItemPedidoArgs<ExtArgs>
    MetadadosPedido?: boolean | Pedido$MetadadosPedidoArgs<ExtArgs>
    PagamentoPedido?: boolean | Pedido$PagamentoPedidoArgs<ExtArgs>
    CarregamentoPedido?: boolean | Pedido$CarregamentoPedidoArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PedidoId?: boolean
    PedidoDtCriacao?: boolean
    PedidoDtImportacao?: boolean
    PedidoTipoCriacao?: boolean
    PedidoStatus?: boolean
    PedidoValorTotal?: boolean
    ClienteId?: boolean
    VendedorId?: boolean
    Cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    Vendedor?: boolean | VendedorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PedidoId?: boolean
    PedidoDtCriacao?: boolean
    PedidoDtImportacao?: boolean
    PedidoTipoCriacao?: boolean
    PedidoStatus?: boolean
    PedidoValorTotal?: boolean
    ClienteId?: boolean
    VendedorId?: boolean
    Cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    Vendedor?: boolean | VendedorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectScalar = {
    PedidoId?: boolean
    PedidoDtCriacao?: boolean
    PedidoDtImportacao?: boolean
    PedidoTipoCriacao?: boolean
    PedidoStatus?: boolean
    PedidoValorTotal?: boolean
    ClienteId?: boolean
    VendedorId?: boolean
  }

  export type PedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"PedidoId" | "PedidoDtCriacao" | "PedidoDtImportacao" | "PedidoTipoCriacao" | "PedidoStatus" | "PedidoValorTotal" | "ClienteId" | "VendedorId", ExtArgs["result"]["pedido"]>
  export type PedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    Vendedor?: boolean | VendedorDefaultArgs<ExtArgs>
    ItemPedido?: boolean | Pedido$ItemPedidoArgs<ExtArgs>
    MetadadosPedido?: boolean | Pedido$MetadadosPedidoArgs<ExtArgs>
    PagamentoPedido?: boolean | Pedido$PagamentoPedidoArgs<ExtArgs>
    CarregamentoPedido?: boolean | Pedido$CarregamentoPedidoArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PedidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    Vendedor?: boolean | VendedorDefaultArgs<ExtArgs>
  }
  export type PedidoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    Vendedor?: boolean | VendedorDefaultArgs<ExtArgs>
  }

  export type $PedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pedido"
    objects: {
      Cliente: Prisma.$ClientePayload<ExtArgs>
      Vendedor: Prisma.$VendedorPayload<ExtArgs>
      ItemPedido: Prisma.$ItemPedidoPayload<ExtArgs>[]
      MetadadosPedido: Prisma.$MetadadosPedidoPayload<ExtArgs>[]
      PagamentoPedido: Prisma.$PagamentoPedidoPayload<ExtArgs>[]
      CarregamentoPedido: Prisma.$CarregamentoPedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      PedidoId: string
      PedidoDtCriacao: Date
      PedidoDtImportacao: Date
      PedidoTipoCriacao: string
      PedidoStatus: string
      PedidoValorTotal: Prisma.Decimal
      ClienteId: number
      VendedorId: number
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type PedidoGetPayload<S extends boolean | null | undefined | PedidoDefaultArgs> = $Result.GetResult<Prisma.$PedidoPayload, S>

  type PedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface PedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pedido'], meta: { name: 'Pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {PedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoFindUniqueArgs>(args: SelectSubset<T, PedidoFindUniqueArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoFindFirstArgs>(args?: SelectSubset<T, PedidoFindFirstArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `PedidoId`
     * const pedidoWithPedidoIdOnly = await prisma.pedido.findMany({ select: { PedidoId: true } })
     * 
     */
    findMany<T extends PedidoFindManyArgs>(args?: SelectSubset<T, PedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido.
     * @param {PedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends PedidoCreateArgs>(args: SelectSubset<T, PedidoCreateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {PedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoCreateManyArgs>(args?: SelectSubset<T, PedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pedidos and returns the data saved in the database.
     * @param {PedidoCreateManyAndReturnArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pedidos and only return the `PedidoId`
     * const pedidoWithPedidoIdOnly = await prisma.pedido.createManyAndReturn({
     *   select: { PedidoId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, PedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pedido.
     * @param {PedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends PedidoDeleteArgs>(args: SelectSubset<T, PedidoDeleteArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido.
     * @param {PedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoUpdateArgs>(args: SelectSubset<T, PedidoUpdateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {PedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoDeleteManyArgs>(args?: SelectSubset<T, PedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoUpdateManyArgs>(args: SelectSubset<T, PedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos and returns the data updated in the database.
     * @param {PedidoUpdateManyAndReturnArgs} args - Arguments to update many Pedidos.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pedidos and only return the `PedidoId`
     * const pedidoWithPedidoIdOnly = await prisma.pedido.updateManyAndReturn({
     *   select: { PedidoId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PedidoUpdateManyAndReturnArgs>(args: SelectSubset<T, PedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pedido.
     * @param {PedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends PedidoUpsertArgs>(args: SelectSubset<T, PedidoUpsertArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends PedidoCountArgs>(
      args?: Subset<T, PedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoGroupByArgs['orderBy'] }
        : { orderBy?: PedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pedido model
   */
  readonly fields: PedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Vendedor<T extends VendedorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendedorDefaultArgs<ExtArgs>>): Prisma__VendedorClient<$Result.GetResult<Prisma.$VendedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ItemPedido<T extends Pedido$ItemPedidoArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$ItemPedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    MetadadosPedido<T extends Pedido$MetadadosPedidoArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$MetadadosPedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetadadosPedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PagamentoPedido<T extends Pedido$PagamentoPedidoArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$PagamentoPedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentoPedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CarregamentoPedido<T extends Pedido$CarregamentoPedidoArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$CarregamentoPedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarregamentoPedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pedido model
   */
  interface PedidoFieldRefs {
    readonly PedidoId: FieldRef<"Pedido", 'String'>
    readonly PedidoDtCriacao: FieldRef<"Pedido", 'DateTime'>
    readonly PedidoDtImportacao: FieldRef<"Pedido", 'DateTime'>
    readonly PedidoTipoCriacao: FieldRef<"Pedido", 'String'>
    readonly PedidoStatus: FieldRef<"Pedido", 'String'>
    readonly PedidoValorTotal: FieldRef<"Pedido", 'Decimal'>
    readonly ClienteId: FieldRef<"Pedido", 'Int'>
    readonly VendedorId: FieldRef<"Pedido", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Pedido findUnique
   */
  export type PedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findUniqueOrThrow
   */
  export type PedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findFirst
   */
  export type PedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findFirstOrThrow
   */
  export type PedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findMany
   */
  export type PedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedidos to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido create
   */
  export type PedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pedido.
     */
    data: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
  }

  /**
   * Pedido createMany
   */
  export type PedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pedido createManyAndReturn
   */
  export type PedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pedido update
   */
  export type PedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pedido.
     */
    data: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
    /**
     * Choose, which Pedido to update.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido updateMany
   */
  export type PedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
  }

  /**
   * Pedido updateManyAndReturn
   */
  export type PedidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pedido upsert
   */
  export type PedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pedido to update in case it exists.
     */
    where: PedidoWhereUniqueInput
    /**
     * In case the Pedido found by the `where` argument doesn't exist, create a new Pedido with this data.
     */
    create: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
    /**
     * In case the Pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
  }

  /**
   * Pedido delete
   */
  export type PedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter which Pedido to delete.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido deleteMany
   */
  export type PedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedidos to delete
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to delete.
     */
    limit?: number
  }

  /**
   * Pedido.ItemPedido
   */
  export type Pedido$ItemPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    where?: ItemPedidoWhereInput
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    cursor?: ItemPedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * Pedido.MetadadosPedido
   */
  export type Pedido$MetadadosPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetadadosPedido
     */
    select?: MetadadosPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetadadosPedido
     */
    omit?: MetadadosPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetadadosPedidoInclude<ExtArgs> | null
    where?: MetadadosPedidoWhereInput
    orderBy?: MetadadosPedidoOrderByWithRelationInput | MetadadosPedidoOrderByWithRelationInput[]
    cursor?: MetadadosPedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MetadadosPedidoScalarFieldEnum | MetadadosPedidoScalarFieldEnum[]
  }

  /**
   * Pedido.PagamentoPedido
   */
  export type Pedido$PagamentoPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagamentoPedido
     */
    select?: PagamentoPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagamentoPedido
     */
    omit?: PagamentoPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoPedidoInclude<ExtArgs> | null
    where?: PagamentoPedidoWhereInput
    orderBy?: PagamentoPedidoOrderByWithRelationInput | PagamentoPedidoOrderByWithRelationInput[]
    cursor?: PagamentoPedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagamentoPedidoScalarFieldEnum | PagamentoPedidoScalarFieldEnum[]
  }

  /**
   * Pedido.CarregamentoPedido
   */
  export type Pedido$CarregamentoPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarregamentoPedido
     */
    select?: CarregamentoPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarregamentoPedido
     */
    omit?: CarregamentoPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarregamentoPedidoInclude<ExtArgs> | null
    where?: CarregamentoPedidoWhereInput
    orderBy?: CarregamentoPedidoOrderByWithRelationInput | CarregamentoPedidoOrderByWithRelationInput[]
    cursor?: CarregamentoPedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarregamentoPedidoScalarFieldEnum | CarregamentoPedidoScalarFieldEnum[]
  }

  /**
   * Pedido without action
   */
  export type PedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
  }


  /**
   * Model ItemPedido
   */

  export type AggregateItemPedido = {
    _count: ItemPedidoCountAggregateOutputType | null
    _avg: ItemPedidoAvgAggregateOutputType | null
    _sum: ItemPedidoSumAggregateOutputType | null
    _min: ItemPedidoMinAggregateOutputType | null
    _max: ItemPedidoMaxAggregateOutputType | null
  }

  export type ItemPedidoAvgAggregateOutputType = {
    ItemPedidoId: number | null
    ItemPedidoQuantidade: number | null
    ItemPedidoPrecoUnitario: Decimal | null
    ItemPedidoValorTotal: Decimal | null
  }

  export type ItemPedidoSumAggregateOutputType = {
    ItemPedidoId: number | null
    ItemPedidoQuantidade: number | null
    ItemPedidoPrecoUnitario: Decimal | null
    ItemPedidoValorTotal: Decimal | null
  }

  export type ItemPedidoMinAggregateOutputType = {
    ItemPedidoId: number | null
    PedidoId: string | null
    ProdutoId: string | null
    ItemPedidoQuantidade: number | null
    ItemPedidoPrecoUnitario: Decimal | null
    ItemPedidoValorTotal: Decimal | null
    SubCategoriaId: string | null
    CategoriaId: string | null
  }

  export type ItemPedidoMaxAggregateOutputType = {
    ItemPedidoId: number | null
    PedidoId: string | null
    ProdutoId: string | null
    ItemPedidoQuantidade: number | null
    ItemPedidoPrecoUnitario: Decimal | null
    ItemPedidoValorTotal: Decimal | null
    SubCategoriaId: string | null
    CategoriaId: string | null
  }

  export type ItemPedidoCountAggregateOutputType = {
    ItemPedidoId: number
    PedidoId: number
    ProdutoId: number
    ItemPedidoQuantidade: number
    ItemPedidoPrecoUnitario: number
    ItemPedidoValorTotal: number
    SubCategoriaId: number
    CategoriaId: number
    _all: number
  }


  export type ItemPedidoAvgAggregateInputType = {
    ItemPedidoId?: true
    ItemPedidoQuantidade?: true
    ItemPedidoPrecoUnitario?: true
    ItemPedidoValorTotal?: true
  }

  export type ItemPedidoSumAggregateInputType = {
    ItemPedidoId?: true
    ItemPedidoQuantidade?: true
    ItemPedidoPrecoUnitario?: true
    ItemPedidoValorTotal?: true
  }

  export type ItemPedidoMinAggregateInputType = {
    ItemPedidoId?: true
    PedidoId?: true
    ProdutoId?: true
    ItemPedidoQuantidade?: true
    ItemPedidoPrecoUnitario?: true
    ItemPedidoValorTotal?: true
    SubCategoriaId?: true
    CategoriaId?: true
  }

  export type ItemPedidoMaxAggregateInputType = {
    ItemPedidoId?: true
    PedidoId?: true
    ProdutoId?: true
    ItemPedidoQuantidade?: true
    ItemPedidoPrecoUnitario?: true
    ItemPedidoValorTotal?: true
    SubCategoriaId?: true
    CategoriaId?: true
  }

  export type ItemPedidoCountAggregateInputType = {
    ItemPedidoId?: true
    PedidoId?: true
    ProdutoId?: true
    ItemPedidoQuantidade?: true
    ItemPedidoPrecoUnitario?: true
    ItemPedidoValorTotal?: true
    SubCategoriaId?: true
    CategoriaId?: true
    _all?: true
  }

  export type ItemPedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemPedido to aggregate.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemPedidos
    **/
    _count?: true | ItemPedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemPedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemPedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemPedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemPedidoMaxAggregateInputType
  }

  export type GetItemPedidoAggregateType<T extends ItemPedidoAggregateArgs> = {
        [P in keyof T & keyof AggregateItemPedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemPedido[P]>
      : GetScalarType<T[P], AggregateItemPedido[P]>
  }




  export type ItemPedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPedidoWhereInput
    orderBy?: ItemPedidoOrderByWithAggregationInput | ItemPedidoOrderByWithAggregationInput[]
    by: ItemPedidoScalarFieldEnum[] | ItemPedidoScalarFieldEnum
    having?: ItemPedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemPedidoCountAggregateInputType | true
    _avg?: ItemPedidoAvgAggregateInputType
    _sum?: ItemPedidoSumAggregateInputType
    _min?: ItemPedidoMinAggregateInputType
    _max?: ItemPedidoMaxAggregateInputType
  }

  export type ItemPedidoGroupByOutputType = {
    ItemPedidoId: number
    PedidoId: string
    ProdutoId: string
    ItemPedidoQuantidade: number
    ItemPedidoPrecoUnitario: Decimal
    ItemPedidoValorTotal: Decimal
    SubCategoriaId: string
    CategoriaId: string
    _count: ItemPedidoCountAggregateOutputType | null
    _avg: ItemPedidoAvgAggregateOutputType | null
    _sum: ItemPedidoSumAggregateOutputType | null
    _min: ItemPedidoMinAggregateOutputType | null
    _max: ItemPedidoMaxAggregateOutputType | null
  }

  type GetItemPedidoGroupByPayload<T extends ItemPedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemPedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemPedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemPedidoGroupByOutputType[P]>
            : GetScalarType<T[P], ItemPedidoGroupByOutputType[P]>
        }
      >
    >


  export type ItemPedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ItemPedidoId?: boolean
    PedidoId?: boolean
    ProdutoId?: boolean
    ItemPedidoQuantidade?: boolean
    ItemPedidoPrecoUnitario?: boolean
    ItemPedidoValorTotal?: boolean
    SubCategoriaId?: boolean
    CategoriaId?: boolean
    Pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    Produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    SubCategoria?: boolean | SubCategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemPedido"]>

  export type ItemPedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ItemPedidoId?: boolean
    PedidoId?: boolean
    ProdutoId?: boolean
    ItemPedidoQuantidade?: boolean
    ItemPedidoPrecoUnitario?: boolean
    ItemPedidoValorTotal?: boolean
    SubCategoriaId?: boolean
    CategoriaId?: boolean
    Pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    Produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    SubCategoria?: boolean | SubCategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemPedido"]>

  export type ItemPedidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ItemPedidoId?: boolean
    PedidoId?: boolean
    ProdutoId?: boolean
    ItemPedidoQuantidade?: boolean
    ItemPedidoPrecoUnitario?: boolean
    ItemPedidoValorTotal?: boolean
    SubCategoriaId?: boolean
    CategoriaId?: boolean
    Pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    Produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    SubCategoria?: boolean | SubCategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemPedido"]>

  export type ItemPedidoSelectScalar = {
    ItemPedidoId?: boolean
    PedidoId?: boolean
    ProdutoId?: boolean
    ItemPedidoQuantidade?: boolean
    ItemPedidoPrecoUnitario?: boolean
    ItemPedidoValorTotal?: boolean
    SubCategoriaId?: boolean
    CategoriaId?: boolean
  }

  export type ItemPedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ItemPedidoId" | "PedidoId" | "ProdutoId" | "ItemPedidoQuantidade" | "ItemPedidoPrecoUnitario" | "ItemPedidoValorTotal" | "SubCategoriaId" | "CategoriaId", ExtArgs["result"]["itemPedido"]>
  export type ItemPedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    Produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    SubCategoria?: boolean | SubCategoriaDefaultArgs<ExtArgs>
  }
  export type ItemPedidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    Produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    SubCategoria?: boolean | SubCategoriaDefaultArgs<ExtArgs>
  }
  export type ItemPedidoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    Produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    SubCategoria?: boolean | SubCategoriaDefaultArgs<ExtArgs>
  }

  export type $ItemPedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemPedido"
    objects: {
      Pedido: Prisma.$PedidoPayload<ExtArgs>
      Produto: Prisma.$ProdutoPayload<ExtArgs>
      SubCategoria: Prisma.$SubCategoriaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ItemPedidoId: number
      PedidoId: string
      ProdutoId: string
      ItemPedidoQuantidade: number
      ItemPedidoPrecoUnitario: Prisma.Decimal
      ItemPedidoValorTotal: Prisma.Decimal
      SubCategoriaId: string
      CategoriaId: string
    }, ExtArgs["result"]["itemPedido"]>
    composites: {}
  }

  type ItemPedidoGetPayload<S extends boolean | null | undefined | ItemPedidoDefaultArgs> = $Result.GetResult<Prisma.$ItemPedidoPayload, S>

  type ItemPedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemPedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemPedidoCountAggregateInputType | true
    }

  export interface ItemPedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemPedido'], meta: { name: 'ItemPedido' } }
    /**
     * Find zero or one ItemPedido that matches the filter.
     * @param {ItemPedidoFindUniqueArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemPedidoFindUniqueArgs>(args: SelectSubset<T, ItemPedidoFindUniqueArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemPedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemPedidoFindUniqueOrThrowArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemPedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemPedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemPedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoFindFirstArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemPedidoFindFirstArgs>(args?: SelectSubset<T, ItemPedidoFindFirstArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemPedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoFindFirstOrThrowArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemPedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemPedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemPedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemPedidos
     * const itemPedidos = await prisma.itemPedido.findMany()
     * 
     * // Get first 10 ItemPedidos
     * const itemPedidos = await prisma.itemPedido.findMany({ take: 10 })
     * 
     * // Only select the `ItemPedidoId`
     * const itemPedidoWithItemPedidoIdOnly = await prisma.itemPedido.findMany({ select: { ItemPedidoId: true } })
     * 
     */
    findMany<T extends ItemPedidoFindManyArgs>(args?: SelectSubset<T, ItemPedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemPedido.
     * @param {ItemPedidoCreateArgs} args - Arguments to create a ItemPedido.
     * @example
     * // Create one ItemPedido
     * const ItemPedido = await prisma.itemPedido.create({
     *   data: {
     *     // ... data to create a ItemPedido
     *   }
     * })
     * 
     */
    create<T extends ItemPedidoCreateArgs>(args: SelectSubset<T, ItemPedidoCreateArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemPedidos.
     * @param {ItemPedidoCreateManyArgs} args - Arguments to create many ItemPedidos.
     * @example
     * // Create many ItemPedidos
     * const itemPedido = await prisma.itemPedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemPedidoCreateManyArgs>(args?: SelectSubset<T, ItemPedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemPedidos and returns the data saved in the database.
     * @param {ItemPedidoCreateManyAndReturnArgs} args - Arguments to create many ItemPedidos.
     * @example
     * // Create many ItemPedidos
     * const itemPedido = await prisma.itemPedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemPedidos and only return the `ItemPedidoId`
     * const itemPedidoWithItemPedidoIdOnly = await prisma.itemPedido.createManyAndReturn({
     *   select: { ItemPedidoId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemPedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemPedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemPedido.
     * @param {ItemPedidoDeleteArgs} args - Arguments to delete one ItemPedido.
     * @example
     * // Delete one ItemPedido
     * const ItemPedido = await prisma.itemPedido.delete({
     *   where: {
     *     // ... filter to delete one ItemPedido
     *   }
     * })
     * 
     */
    delete<T extends ItemPedidoDeleteArgs>(args: SelectSubset<T, ItemPedidoDeleteArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemPedido.
     * @param {ItemPedidoUpdateArgs} args - Arguments to update one ItemPedido.
     * @example
     * // Update one ItemPedido
     * const itemPedido = await prisma.itemPedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemPedidoUpdateArgs>(args: SelectSubset<T, ItemPedidoUpdateArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemPedidos.
     * @param {ItemPedidoDeleteManyArgs} args - Arguments to filter ItemPedidos to delete.
     * @example
     * // Delete a few ItemPedidos
     * const { count } = await prisma.itemPedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemPedidoDeleteManyArgs>(args?: SelectSubset<T, ItemPedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemPedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemPedidos
     * const itemPedido = await prisma.itemPedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemPedidoUpdateManyArgs>(args: SelectSubset<T, ItemPedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemPedidos and returns the data updated in the database.
     * @param {ItemPedidoUpdateManyAndReturnArgs} args - Arguments to update many ItemPedidos.
     * @example
     * // Update many ItemPedidos
     * const itemPedido = await prisma.itemPedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemPedidos and only return the `ItemPedidoId`
     * const itemPedidoWithItemPedidoIdOnly = await prisma.itemPedido.updateManyAndReturn({
     *   select: { ItemPedidoId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemPedidoUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemPedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemPedido.
     * @param {ItemPedidoUpsertArgs} args - Arguments to update or create a ItemPedido.
     * @example
     * // Update or create a ItemPedido
     * const itemPedido = await prisma.itemPedido.upsert({
     *   create: {
     *     // ... data to create a ItemPedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemPedido we want to update
     *   }
     * })
     */
    upsert<T extends ItemPedidoUpsertArgs>(args: SelectSubset<T, ItemPedidoUpsertArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemPedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoCountArgs} args - Arguments to filter ItemPedidos to count.
     * @example
     * // Count the number of ItemPedidos
     * const count = await prisma.itemPedido.count({
     *   where: {
     *     // ... the filter for the ItemPedidos we want to count
     *   }
     * })
    **/
    count<T extends ItemPedidoCountArgs>(
      args?: Subset<T, ItemPedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemPedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemPedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemPedidoAggregateArgs>(args: Subset<T, ItemPedidoAggregateArgs>): Prisma.PrismaPromise<GetItemPedidoAggregateType<T>>

    /**
     * Group by ItemPedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemPedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemPedidoGroupByArgs['orderBy'] }
        : { orderBy?: ItemPedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemPedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemPedido model
   */
  readonly fields: ItemPedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemPedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemPedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Produto<T extends ProdutoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdutoDefaultArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    SubCategoria<T extends SubCategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubCategoriaDefaultArgs<ExtArgs>>): Prisma__SubCategoriaClient<$Result.GetResult<Prisma.$SubCategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemPedido model
   */
  interface ItemPedidoFieldRefs {
    readonly ItemPedidoId: FieldRef<"ItemPedido", 'Int'>
    readonly PedidoId: FieldRef<"ItemPedido", 'String'>
    readonly ProdutoId: FieldRef<"ItemPedido", 'String'>
    readonly ItemPedidoQuantidade: FieldRef<"ItemPedido", 'Int'>
    readonly ItemPedidoPrecoUnitario: FieldRef<"ItemPedido", 'Decimal'>
    readonly ItemPedidoValorTotal: FieldRef<"ItemPedido", 'Decimal'>
    readonly SubCategoriaId: FieldRef<"ItemPedido", 'String'>
    readonly CategoriaId: FieldRef<"ItemPedido", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ItemPedido findUnique
   */
  export type ItemPedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido findUniqueOrThrow
   */
  export type ItemPedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido findFirst
   */
  export type ItemPedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemPedidos.
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemPedidos.
     */
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * ItemPedido findFirstOrThrow
   */
  export type ItemPedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemPedidos.
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemPedidos.
     */
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * ItemPedido findMany
   */
  export type ItemPedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedidos to fetch.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemPedidos.
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemPedidos.
     */
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * ItemPedido create
   */
  export type ItemPedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemPedido.
     */
    data: XOR<ItemPedidoCreateInput, ItemPedidoUncheckedCreateInput>
  }

  /**
   * ItemPedido createMany
   */
  export type ItemPedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemPedidos.
     */
    data: ItemPedidoCreateManyInput | ItemPedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemPedido createManyAndReturn
   */
  export type ItemPedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * The data used to create many ItemPedidos.
     */
    data: ItemPedidoCreateManyInput | ItemPedidoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemPedido update
   */
  export type ItemPedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemPedido.
     */
    data: XOR<ItemPedidoUpdateInput, ItemPedidoUncheckedUpdateInput>
    /**
     * Choose, which ItemPedido to update.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido updateMany
   */
  export type ItemPedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemPedidos.
     */
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyInput>
    /**
     * Filter which ItemPedidos to update
     */
    where?: ItemPedidoWhereInput
    /**
     * Limit how many ItemPedidos to update.
     */
    limit?: number
  }

  /**
   * ItemPedido updateManyAndReturn
   */
  export type ItemPedidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * The data used to update ItemPedidos.
     */
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyInput>
    /**
     * Filter which ItemPedidos to update
     */
    where?: ItemPedidoWhereInput
    /**
     * Limit how many ItemPedidos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemPedido upsert
   */
  export type ItemPedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemPedido to update in case it exists.
     */
    where: ItemPedidoWhereUniqueInput
    /**
     * In case the ItemPedido found by the `where` argument doesn't exist, create a new ItemPedido with this data.
     */
    create: XOR<ItemPedidoCreateInput, ItemPedidoUncheckedCreateInput>
    /**
     * In case the ItemPedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemPedidoUpdateInput, ItemPedidoUncheckedUpdateInput>
  }

  /**
   * ItemPedido delete
   */
  export type ItemPedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter which ItemPedido to delete.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido deleteMany
   */
  export type ItemPedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemPedidos to delete
     */
    where?: ItemPedidoWhereInput
    /**
     * Limit how many ItemPedidos to delete.
     */
    limit?: number
  }

  /**
   * ItemPedido without action
   */
  export type ItemPedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
  }


  /**
   * Model MetadadosPedido
   */

  export type AggregateMetadadosPedido = {
    _count: MetadadosPedidoCountAggregateOutputType | null
    _min: MetadadosPedidoMinAggregateOutputType | null
    _max: MetadadosPedidoMaxAggregateOutputType | null
  }

  export type MetadadosPedidoMinAggregateOutputType = {
    MetadadosPedidoId: string | null
    PedidoId: string | null
    MetadadosSource: string | null
    MetadadosUserAgent: string | null
    MetadadosIP: string | null
  }

  export type MetadadosPedidoMaxAggregateOutputType = {
    MetadadosPedidoId: string | null
    PedidoId: string | null
    MetadadosSource: string | null
    MetadadosUserAgent: string | null
    MetadadosIP: string | null
  }

  export type MetadadosPedidoCountAggregateOutputType = {
    MetadadosPedidoId: number
    PedidoId: number
    MetadadosSource: number
    MetadadosUserAgent: number
    MetadadosIP: number
    _all: number
  }


  export type MetadadosPedidoMinAggregateInputType = {
    MetadadosPedidoId?: true
    PedidoId?: true
    MetadadosSource?: true
    MetadadosUserAgent?: true
    MetadadosIP?: true
  }

  export type MetadadosPedidoMaxAggregateInputType = {
    MetadadosPedidoId?: true
    PedidoId?: true
    MetadadosSource?: true
    MetadadosUserAgent?: true
    MetadadosIP?: true
  }

  export type MetadadosPedidoCountAggregateInputType = {
    MetadadosPedidoId?: true
    PedidoId?: true
    MetadadosSource?: true
    MetadadosUserAgent?: true
    MetadadosIP?: true
    _all?: true
  }

  export type MetadadosPedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetadadosPedido to aggregate.
     */
    where?: MetadadosPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetadadosPedidos to fetch.
     */
    orderBy?: MetadadosPedidoOrderByWithRelationInput | MetadadosPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetadadosPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetadadosPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetadadosPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MetadadosPedidos
    **/
    _count?: true | MetadadosPedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetadadosPedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetadadosPedidoMaxAggregateInputType
  }

  export type GetMetadadosPedidoAggregateType<T extends MetadadosPedidoAggregateArgs> = {
        [P in keyof T & keyof AggregateMetadadosPedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetadadosPedido[P]>
      : GetScalarType<T[P], AggregateMetadadosPedido[P]>
  }




  export type MetadadosPedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetadadosPedidoWhereInput
    orderBy?: MetadadosPedidoOrderByWithAggregationInput | MetadadosPedidoOrderByWithAggregationInput[]
    by: MetadadosPedidoScalarFieldEnum[] | MetadadosPedidoScalarFieldEnum
    having?: MetadadosPedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetadadosPedidoCountAggregateInputType | true
    _min?: MetadadosPedidoMinAggregateInputType
    _max?: MetadadosPedidoMaxAggregateInputType
  }

  export type MetadadosPedidoGroupByOutputType = {
    MetadadosPedidoId: string
    PedidoId: string
    MetadadosSource: string
    MetadadosUserAgent: string
    MetadadosIP: string
    _count: MetadadosPedidoCountAggregateOutputType | null
    _min: MetadadosPedidoMinAggregateOutputType | null
    _max: MetadadosPedidoMaxAggregateOutputType | null
  }

  type GetMetadadosPedidoGroupByPayload<T extends MetadadosPedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetadadosPedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetadadosPedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetadadosPedidoGroupByOutputType[P]>
            : GetScalarType<T[P], MetadadosPedidoGroupByOutputType[P]>
        }
      >
    >


  export type MetadadosPedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MetadadosPedidoId?: boolean
    PedidoId?: boolean
    MetadadosSource?: boolean
    MetadadosUserAgent?: boolean
    MetadadosIP?: boolean
    Pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metadadosPedido"]>

  export type MetadadosPedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MetadadosPedidoId?: boolean
    PedidoId?: boolean
    MetadadosSource?: boolean
    MetadadosUserAgent?: boolean
    MetadadosIP?: boolean
    Pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metadadosPedido"]>

  export type MetadadosPedidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MetadadosPedidoId?: boolean
    PedidoId?: boolean
    MetadadosSource?: boolean
    MetadadosUserAgent?: boolean
    MetadadosIP?: boolean
    Pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metadadosPedido"]>

  export type MetadadosPedidoSelectScalar = {
    MetadadosPedidoId?: boolean
    PedidoId?: boolean
    MetadadosSource?: boolean
    MetadadosUserAgent?: boolean
    MetadadosIP?: boolean
  }

  export type MetadadosPedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MetadadosPedidoId" | "PedidoId" | "MetadadosSource" | "MetadadosUserAgent" | "MetadadosIP", ExtArgs["result"]["metadadosPedido"]>
  export type MetadadosPedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }
  export type MetadadosPedidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }
  export type MetadadosPedidoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }

  export type $MetadadosPedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MetadadosPedido"
    objects: {
      Pedido: Prisma.$PedidoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      MetadadosPedidoId: string
      PedidoId: string
      MetadadosSource: string
      MetadadosUserAgent: string
      MetadadosIP: string
    }, ExtArgs["result"]["metadadosPedido"]>
    composites: {}
  }

  type MetadadosPedidoGetPayload<S extends boolean | null | undefined | MetadadosPedidoDefaultArgs> = $Result.GetResult<Prisma.$MetadadosPedidoPayload, S>

  type MetadadosPedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetadadosPedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetadadosPedidoCountAggregateInputType | true
    }

  export interface MetadadosPedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MetadadosPedido'], meta: { name: 'MetadadosPedido' } }
    /**
     * Find zero or one MetadadosPedido that matches the filter.
     * @param {MetadadosPedidoFindUniqueArgs} args - Arguments to find a MetadadosPedido
     * @example
     * // Get one MetadadosPedido
     * const metadadosPedido = await prisma.metadadosPedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetadadosPedidoFindUniqueArgs>(args: SelectSubset<T, MetadadosPedidoFindUniqueArgs<ExtArgs>>): Prisma__MetadadosPedidoClient<$Result.GetResult<Prisma.$MetadadosPedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MetadadosPedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetadadosPedidoFindUniqueOrThrowArgs} args - Arguments to find a MetadadosPedido
     * @example
     * // Get one MetadadosPedido
     * const metadadosPedido = await prisma.metadadosPedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetadadosPedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, MetadadosPedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetadadosPedidoClient<$Result.GetResult<Prisma.$MetadadosPedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetadadosPedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetadadosPedidoFindFirstArgs} args - Arguments to find a MetadadosPedido
     * @example
     * // Get one MetadadosPedido
     * const metadadosPedido = await prisma.metadadosPedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetadadosPedidoFindFirstArgs>(args?: SelectSubset<T, MetadadosPedidoFindFirstArgs<ExtArgs>>): Prisma__MetadadosPedidoClient<$Result.GetResult<Prisma.$MetadadosPedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetadadosPedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetadadosPedidoFindFirstOrThrowArgs} args - Arguments to find a MetadadosPedido
     * @example
     * // Get one MetadadosPedido
     * const metadadosPedido = await prisma.metadadosPedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetadadosPedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, MetadadosPedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetadadosPedidoClient<$Result.GetResult<Prisma.$MetadadosPedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MetadadosPedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetadadosPedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MetadadosPedidos
     * const metadadosPedidos = await prisma.metadadosPedido.findMany()
     * 
     * // Get first 10 MetadadosPedidos
     * const metadadosPedidos = await prisma.metadadosPedido.findMany({ take: 10 })
     * 
     * // Only select the `MetadadosPedidoId`
     * const metadadosPedidoWithMetadadosPedidoIdOnly = await prisma.metadadosPedido.findMany({ select: { MetadadosPedidoId: true } })
     * 
     */
    findMany<T extends MetadadosPedidoFindManyArgs>(args?: SelectSubset<T, MetadadosPedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetadadosPedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MetadadosPedido.
     * @param {MetadadosPedidoCreateArgs} args - Arguments to create a MetadadosPedido.
     * @example
     * // Create one MetadadosPedido
     * const MetadadosPedido = await prisma.metadadosPedido.create({
     *   data: {
     *     // ... data to create a MetadadosPedido
     *   }
     * })
     * 
     */
    create<T extends MetadadosPedidoCreateArgs>(args: SelectSubset<T, MetadadosPedidoCreateArgs<ExtArgs>>): Prisma__MetadadosPedidoClient<$Result.GetResult<Prisma.$MetadadosPedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MetadadosPedidos.
     * @param {MetadadosPedidoCreateManyArgs} args - Arguments to create many MetadadosPedidos.
     * @example
     * // Create many MetadadosPedidos
     * const metadadosPedido = await prisma.metadadosPedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetadadosPedidoCreateManyArgs>(args?: SelectSubset<T, MetadadosPedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MetadadosPedidos and returns the data saved in the database.
     * @param {MetadadosPedidoCreateManyAndReturnArgs} args - Arguments to create many MetadadosPedidos.
     * @example
     * // Create many MetadadosPedidos
     * const metadadosPedido = await prisma.metadadosPedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MetadadosPedidos and only return the `MetadadosPedidoId`
     * const metadadosPedidoWithMetadadosPedidoIdOnly = await prisma.metadadosPedido.createManyAndReturn({
     *   select: { MetadadosPedidoId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MetadadosPedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, MetadadosPedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetadadosPedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MetadadosPedido.
     * @param {MetadadosPedidoDeleteArgs} args - Arguments to delete one MetadadosPedido.
     * @example
     * // Delete one MetadadosPedido
     * const MetadadosPedido = await prisma.metadadosPedido.delete({
     *   where: {
     *     // ... filter to delete one MetadadosPedido
     *   }
     * })
     * 
     */
    delete<T extends MetadadosPedidoDeleteArgs>(args: SelectSubset<T, MetadadosPedidoDeleteArgs<ExtArgs>>): Prisma__MetadadosPedidoClient<$Result.GetResult<Prisma.$MetadadosPedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MetadadosPedido.
     * @param {MetadadosPedidoUpdateArgs} args - Arguments to update one MetadadosPedido.
     * @example
     * // Update one MetadadosPedido
     * const metadadosPedido = await prisma.metadadosPedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetadadosPedidoUpdateArgs>(args: SelectSubset<T, MetadadosPedidoUpdateArgs<ExtArgs>>): Prisma__MetadadosPedidoClient<$Result.GetResult<Prisma.$MetadadosPedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MetadadosPedidos.
     * @param {MetadadosPedidoDeleteManyArgs} args - Arguments to filter MetadadosPedidos to delete.
     * @example
     * // Delete a few MetadadosPedidos
     * const { count } = await prisma.metadadosPedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetadadosPedidoDeleteManyArgs>(args?: SelectSubset<T, MetadadosPedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetadadosPedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetadadosPedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MetadadosPedidos
     * const metadadosPedido = await prisma.metadadosPedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetadadosPedidoUpdateManyArgs>(args: SelectSubset<T, MetadadosPedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetadadosPedidos and returns the data updated in the database.
     * @param {MetadadosPedidoUpdateManyAndReturnArgs} args - Arguments to update many MetadadosPedidos.
     * @example
     * // Update many MetadadosPedidos
     * const metadadosPedido = await prisma.metadadosPedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MetadadosPedidos and only return the `MetadadosPedidoId`
     * const metadadosPedidoWithMetadadosPedidoIdOnly = await prisma.metadadosPedido.updateManyAndReturn({
     *   select: { MetadadosPedidoId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MetadadosPedidoUpdateManyAndReturnArgs>(args: SelectSubset<T, MetadadosPedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetadadosPedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MetadadosPedido.
     * @param {MetadadosPedidoUpsertArgs} args - Arguments to update or create a MetadadosPedido.
     * @example
     * // Update or create a MetadadosPedido
     * const metadadosPedido = await prisma.metadadosPedido.upsert({
     *   create: {
     *     // ... data to create a MetadadosPedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MetadadosPedido we want to update
     *   }
     * })
     */
    upsert<T extends MetadadosPedidoUpsertArgs>(args: SelectSubset<T, MetadadosPedidoUpsertArgs<ExtArgs>>): Prisma__MetadadosPedidoClient<$Result.GetResult<Prisma.$MetadadosPedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MetadadosPedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetadadosPedidoCountArgs} args - Arguments to filter MetadadosPedidos to count.
     * @example
     * // Count the number of MetadadosPedidos
     * const count = await prisma.metadadosPedido.count({
     *   where: {
     *     // ... the filter for the MetadadosPedidos we want to count
     *   }
     * })
    **/
    count<T extends MetadadosPedidoCountArgs>(
      args?: Subset<T, MetadadosPedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetadadosPedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MetadadosPedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetadadosPedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MetadadosPedidoAggregateArgs>(args: Subset<T, MetadadosPedidoAggregateArgs>): Prisma.PrismaPromise<GetMetadadosPedidoAggregateType<T>>

    /**
     * Group by MetadadosPedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetadadosPedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MetadadosPedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetadadosPedidoGroupByArgs['orderBy'] }
        : { orderBy?: MetadadosPedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MetadadosPedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetadadosPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MetadadosPedido model
   */
  readonly fields: MetadadosPedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MetadadosPedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetadadosPedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MetadadosPedido model
   */
  interface MetadadosPedidoFieldRefs {
    readonly MetadadosPedidoId: FieldRef<"MetadadosPedido", 'String'>
    readonly PedidoId: FieldRef<"MetadadosPedido", 'String'>
    readonly MetadadosSource: FieldRef<"MetadadosPedido", 'String'>
    readonly MetadadosUserAgent: FieldRef<"MetadadosPedido", 'String'>
    readonly MetadadosIP: FieldRef<"MetadadosPedido", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MetadadosPedido findUnique
   */
  export type MetadadosPedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetadadosPedido
     */
    select?: MetadadosPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetadadosPedido
     */
    omit?: MetadadosPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetadadosPedidoInclude<ExtArgs> | null
    /**
     * Filter, which MetadadosPedido to fetch.
     */
    where: MetadadosPedidoWhereUniqueInput
  }

  /**
   * MetadadosPedido findUniqueOrThrow
   */
  export type MetadadosPedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetadadosPedido
     */
    select?: MetadadosPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetadadosPedido
     */
    omit?: MetadadosPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetadadosPedidoInclude<ExtArgs> | null
    /**
     * Filter, which MetadadosPedido to fetch.
     */
    where: MetadadosPedidoWhereUniqueInput
  }

  /**
   * MetadadosPedido findFirst
   */
  export type MetadadosPedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetadadosPedido
     */
    select?: MetadadosPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetadadosPedido
     */
    omit?: MetadadosPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetadadosPedidoInclude<ExtArgs> | null
    /**
     * Filter, which MetadadosPedido to fetch.
     */
    where?: MetadadosPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetadadosPedidos to fetch.
     */
    orderBy?: MetadadosPedidoOrderByWithRelationInput | MetadadosPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetadadosPedidos.
     */
    cursor?: MetadadosPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetadadosPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetadadosPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetadadosPedidos.
     */
    distinct?: MetadadosPedidoScalarFieldEnum | MetadadosPedidoScalarFieldEnum[]
  }

  /**
   * MetadadosPedido findFirstOrThrow
   */
  export type MetadadosPedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetadadosPedido
     */
    select?: MetadadosPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetadadosPedido
     */
    omit?: MetadadosPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetadadosPedidoInclude<ExtArgs> | null
    /**
     * Filter, which MetadadosPedido to fetch.
     */
    where?: MetadadosPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetadadosPedidos to fetch.
     */
    orderBy?: MetadadosPedidoOrderByWithRelationInput | MetadadosPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetadadosPedidos.
     */
    cursor?: MetadadosPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetadadosPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetadadosPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetadadosPedidos.
     */
    distinct?: MetadadosPedidoScalarFieldEnum | MetadadosPedidoScalarFieldEnum[]
  }

  /**
   * MetadadosPedido findMany
   */
  export type MetadadosPedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetadadosPedido
     */
    select?: MetadadosPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetadadosPedido
     */
    omit?: MetadadosPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetadadosPedidoInclude<ExtArgs> | null
    /**
     * Filter, which MetadadosPedidos to fetch.
     */
    where?: MetadadosPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetadadosPedidos to fetch.
     */
    orderBy?: MetadadosPedidoOrderByWithRelationInput | MetadadosPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MetadadosPedidos.
     */
    cursor?: MetadadosPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetadadosPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetadadosPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetadadosPedidos.
     */
    distinct?: MetadadosPedidoScalarFieldEnum | MetadadosPedidoScalarFieldEnum[]
  }

  /**
   * MetadadosPedido create
   */
  export type MetadadosPedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetadadosPedido
     */
    select?: MetadadosPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetadadosPedido
     */
    omit?: MetadadosPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetadadosPedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a MetadadosPedido.
     */
    data: XOR<MetadadosPedidoCreateInput, MetadadosPedidoUncheckedCreateInput>
  }

  /**
   * MetadadosPedido createMany
   */
  export type MetadadosPedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MetadadosPedidos.
     */
    data: MetadadosPedidoCreateManyInput | MetadadosPedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MetadadosPedido createManyAndReturn
   */
  export type MetadadosPedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetadadosPedido
     */
    select?: MetadadosPedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MetadadosPedido
     */
    omit?: MetadadosPedidoOmit<ExtArgs> | null
    /**
     * The data used to create many MetadadosPedidos.
     */
    data: MetadadosPedidoCreateManyInput | MetadadosPedidoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetadadosPedidoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MetadadosPedido update
   */
  export type MetadadosPedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetadadosPedido
     */
    select?: MetadadosPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetadadosPedido
     */
    omit?: MetadadosPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetadadosPedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a MetadadosPedido.
     */
    data: XOR<MetadadosPedidoUpdateInput, MetadadosPedidoUncheckedUpdateInput>
    /**
     * Choose, which MetadadosPedido to update.
     */
    where: MetadadosPedidoWhereUniqueInput
  }

  /**
   * MetadadosPedido updateMany
   */
  export type MetadadosPedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MetadadosPedidos.
     */
    data: XOR<MetadadosPedidoUpdateManyMutationInput, MetadadosPedidoUncheckedUpdateManyInput>
    /**
     * Filter which MetadadosPedidos to update
     */
    where?: MetadadosPedidoWhereInput
    /**
     * Limit how many MetadadosPedidos to update.
     */
    limit?: number
  }

  /**
   * MetadadosPedido updateManyAndReturn
   */
  export type MetadadosPedidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetadadosPedido
     */
    select?: MetadadosPedidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MetadadosPedido
     */
    omit?: MetadadosPedidoOmit<ExtArgs> | null
    /**
     * The data used to update MetadadosPedidos.
     */
    data: XOR<MetadadosPedidoUpdateManyMutationInput, MetadadosPedidoUncheckedUpdateManyInput>
    /**
     * Filter which MetadadosPedidos to update
     */
    where?: MetadadosPedidoWhereInput
    /**
     * Limit how many MetadadosPedidos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetadadosPedidoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MetadadosPedido upsert
   */
  export type MetadadosPedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetadadosPedido
     */
    select?: MetadadosPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetadadosPedido
     */
    omit?: MetadadosPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetadadosPedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the MetadadosPedido to update in case it exists.
     */
    where: MetadadosPedidoWhereUniqueInput
    /**
     * In case the MetadadosPedido found by the `where` argument doesn't exist, create a new MetadadosPedido with this data.
     */
    create: XOR<MetadadosPedidoCreateInput, MetadadosPedidoUncheckedCreateInput>
    /**
     * In case the MetadadosPedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetadadosPedidoUpdateInput, MetadadosPedidoUncheckedUpdateInput>
  }

  /**
   * MetadadosPedido delete
   */
  export type MetadadosPedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetadadosPedido
     */
    select?: MetadadosPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetadadosPedido
     */
    omit?: MetadadosPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetadadosPedidoInclude<ExtArgs> | null
    /**
     * Filter which MetadadosPedido to delete.
     */
    where: MetadadosPedidoWhereUniqueInput
  }

  /**
   * MetadadosPedido deleteMany
   */
  export type MetadadosPedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetadadosPedidos to delete
     */
    where?: MetadadosPedidoWhereInput
    /**
     * Limit how many MetadadosPedidos to delete.
     */
    limit?: number
  }

  /**
   * MetadadosPedido without action
   */
  export type MetadadosPedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetadadosPedido
     */
    select?: MetadadosPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetadadosPedido
     */
    omit?: MetadadosPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetadadosPedidoInclude<ExtArgs> | null
  }


  /**
   * Model PagamentoPedido
   */

  export type AggregatePagamentoPedido = {
    _count: PagamentoPedidoCountAggregateOutputType | null
    _min: PagamentoPedidoMinAggregateOutputType | null
    _max: PagamentoPedidoMaxAggregateOutputType | null
  }

  export type PagamentoPedidoMinAggregateOutputType = {
    PagamentoPedidoId: string | null
    PedidoId: string | null
    PagamentoMetodo: string | null
    PagamentoStatus: string | null
    PagamentoTransacao: string | null
  }

  export type PagamentoPedidoMaxAggregateOutputType = {
    PagamentoPedidoId: string | null
    PedidoId: string | null
    PagamentoMetodo: string | null
    PagamentoStatus: string | null
    PagamentoTransacao: string | null
  }

  export type PagamentoPedidoCountAggregateOutputType = {
    PagamentoPedidoId: number
    PedidoId: number
    PagamentoMetodo: number
    PagamentoStatus: number
    PagamentoTransacao: number
    _all: number
  }


  export type PagamentoPedidoMinAggregateInputType = {
    PagamentoPedidoId?: true
    PedidoId?: true
    PagamentoMetodo?: true
    PagamentoStatus?: true
    PagamentoTransacao?: true
  }

  export type PagamentoPedidoMaxAggregateInputType = {
    PagamentoPedidoId?: true
    PedidoId?: true
    PagamentoMetodo?: true
    PagamentoStatus?: true
    PagamentoTransacao?: true
  }

  export type PagamentoPedidoCountAggregateInputType = {
    PagamentoPedidoId?: true
    PedidoId?: true
    PagamentoMetodo?: true
    PagamentoStatus?: true
    PagamentoTransacao?: true
    _all?: true
  }

  export type PagamentoPedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PagamentoPedido to aggregate.
     */
    where?: PagamentoPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PagamentoPedidos to fetch.
     */
    orderBy?: PagamentoPedidoOrderByWithRelationInput | PagamentoPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PagamentoPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PagamentoPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PagamentoPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PagamentoPedidos
    **/
    _count?: true | PagamentoPedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagamentoPedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagamentoPedidoMaxAggregateInputType
  }

  export type GetPagamentoPedidoAggregateType<T extends PagamentoPedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePagamentoPedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePagamentoPedido[P]>
      : GetScalarType<T[P], AggregatePagamentoPedido[P]>
  }




  export type PagamentoPedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagamentoPedidoWhereInput
    orderBy?: PagamentoPedidoOrderByWithAggregationInput | PagamentoPedidoOrderByWithAggregationInput[]
    by: PagamentoPedidoScalarFieldEnum[] | PagamentoPedidoScalarFieldEnum
    having?: PagamentoPedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagamentoPedidoCountAggregateInputType | true
    _min?: PagamentoPedidoMinAggregateInputType
    _max?: PagamentoPedidoMaxAggregateInputType
  }

  export type PagamentoPedidoGroupByOutputType = {
    PagamentoPedidoId: string
    PedidoId: string
    PagamentoMetodo: string
    PagamentoStatus: string
    PagamentoTransacao: string
    _count: PagamentoPedidoCountAggregateOutputType | null
    _min: PagamentoPedidoMinAggregateOutputType | null
    _max: PagamentoPedidoMaxAggregateOutputType | null
  }

  type GetPagamentoPedidoGroupByPayload<T extends PagamentoPedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagamentoPedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagamentoPedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagamentoPedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PagamentoPedidoGroupByOutputType[P]>
        }
      >
    >


  export type PagamentoPedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PagamentoPedidoId?: boolean
    PedidoId?: boolean
    PagamentoMetodo?: boolean
    PagamentoStatus?: boolean
    PagamentoTransacao?: boolean
    Pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamentoPedido"]>

  export type PagamentoPedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PagamentoPedidoId?: boolean
    PedidoId?: boolean
    PagamentoMetodo?: boolean
    PagamentoStatus?: boolean
    PagamentoTransacao?: boolean
    Pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamentoPedido"]>

  export type PagamentoPedidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PagamentoPedidoId?: boolean
    PedidoId?: boolean
    PagamentoMetodo?: boolean
    PagamentoStatus?: boolean
    PagamentoTransacao?: boolean
    Pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamentoPedido"]>

  export type PagamentoPedidoSelectScalar = {
    PagamentoPedidoId?: boolean
    PedidoId?: boolean
    PagamentoMetodo?: boolean
    PagamentoStatus?: boolean
    PagamentoTransacao?: boolean
  }

  export type PagamentoPedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"PagamentoPedidoId" | "PedidoId" | "PagamentoMetodo" | "PagamentoStatus" | "PagamentoTransacao", ExtArgs["result"]["pagamentoPedido"]>
  export type PagamentoPedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }
  export type PagamentoPedidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }
  export type PagamentoPedidoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }

  export type $PagamentoPedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PagamentoPedido"
    objects: {
      Pedido: Prisma.$PedidoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      PagamentoPedidoId: string
      PedidoId: string
      PagamentoMetodo: string
      PagamentoStatus: string
      PagamentoTransacao: string
    }, ExtArgs["result"]["pagamentoPedido"]>
    composites: {}
  }

  type PagamentoPedidoGetPayload<S extends boolean | null | undefined | PagamentoPedidoDefaultArgs> = $Result.GetResult<Prisma.$PagamentoPedidoPayload, S>

  type PagamentoPedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PagamentoPedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PagamentoPedidoCountAggregateInputType | true
    }

  export interface PagamentoPedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PagamentoPedido'], meta: { name: 'PagamentoPedido' } }
    /**
     * Find zero or one PagamentoPedido that matches the filter.
     * @param {PagamentoPedidoFindUniqueArgs} args - Arguments to find a PagamentoPedido
     * @example
     * // Get one PagamentoPedido
     * const pagamentoPedido = await prisma.pagamentoPedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PagamentoPedidoFindUniqueArgs>(args: SelectSubset<T, PagamentoPedidoFindUniqueArgs<ExtArgs>>): Prisma__PagamentoPedidoClient<$Result.GetResult<Prisma.$PagamentoPedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PagamentoPedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PagamentoPedidoFindUniqueOrThrowArgs} args - Arguments to find a PagamentoPedido
     * @example
     * // Get one PagamentoPedido
     * const pagamentoPedido = await prisma.pagamentoPedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PagamentoPedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, PagamentoPedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PagamentoPedidoClient<$Result.GetResult<Prisma.$PagamentoPedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PagamentoPedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoPedidoFindFirstArgs} args - Arguments to find a PagamentoPedido
     * @example
     * // Get one PagamentoPedido
     * const pagamentoPedido = await prisma.pagamentoPedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PagamentoPedidoFindFirstArgs>(args?: SelectSubset<T, PagamentoPedidoFindFirstArgs<ExtArgs>>): Prisma__PagamentoPedidoClient<$Result.GetResult<Prisma.$PagamentoPedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PagamentoPedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoPedidoFindFirstOrThrowArgs} args - Arguments to find a PagamentoPedido
     * @example
     * // Get one PagamentoPedido
     * const pagamentoPedido = await prisma.pagamentoPedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PagamentoPedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, PagamentoPedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PagamentoPedidoClient<$Result.GetResult<Prisma.$PagamentoPedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PagamentoPedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoPedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PagamentoPedidos
     * const pagamentoPedidos = await prisma.pagamentoPedido.findMany()
     * 
     * // Get first 10 PagamentoPedidos
     * const pagamentoPedidos = await prisma.pagamentoPedido.findMany({ take: 10 })
     * 
     * // Only select the `PagamentoPedidoId`
     * const pagamentoPedidoWithPagamentoPedidoIdOnly = await prisma.pagamentoPedido.findMany({ select: { PagamentoPedidoId: true } })
     * 
     */
    findMany<T extends PagamentoPedidoFindManyArgs>(args?: SelectSubset<T, PagamentoPedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentoPedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PagamentoPedido.
     * @param {PagamentoPedidoCreateArgs} args - Arguments to create a PagamentoPedido.
     * @example
     * // Create one PagamentoPedido
     * const PagamentoPedido = await prisma.pagamentoPedido.create({
     *   data: {
     *     // ... data to create a PagamentoPedido
     *   }
     * })
     * 
     */
    create<T extends PagamentoPedidoCreateArgs>(args: SelectSubset<T, PagamentoPedidoCreateArgs<ExtArgs>>): Prisma__PagamentoPedidoClient<$Result.GetResult<Prisma.$PagamentoPedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PagamentoPedidos.
     * @param {PagamentoPedidoCreateManyArgs} args - Arguments to create many PagamentoPedidos.
     * @example
     * // Create many PagamentoPedidos
     * const pagamentoPedido = await prisma.pagamentoPedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PagamentoPedidoCreateManyArgs>(args?: SelectSubset<T, PagamentoPedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PagamentoPedidos and returns the data saved in the database.
     * @param {PagamentoPedidoCreateManyAndReturnArgs} args - Arguments to create many PagamentoPedidos.
     * @example
     * // Create many PagamentoPedidos
     * const pagamentoPedido = await prisma.pagamentoPedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PagamentoPedidos and only return the `PagamentoPedidoId`
     * const pagamentoPedidoWithPagamentoPedidoIdOnly = await prisma.pagamentoPedido.createManyAndReturn({
     *   select: { PagamentoPedidoId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PagamentoPedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, PagamentoPedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentoPedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PagamentoPedido.
     * @param {PagamentoPedidoDeleteArgs} args - Arguments to delete one PagamentoPedido.
     * @example
     * // Delete one PagamentoPedido
     * const PagamentoPedido = await prisma.pagamentoPedido.delete({
     *   where: {
     *     // ... filter to delete one PagamentoPedido
     *   }
     * })
     * 
     */
    delete<T extends PagamentoPedidoDeleteArgs>(args: SelectSubset<T, PagamentoPedidoDeleteArgs<ExtArgs>>): Prisma__PagamentoPedidoClient<$Result.GetResult<Prisma.$PagamentoPedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PagamentoPedido.
     * @param {PagamentoPedidoUpdateArgs} args - Arguments to update one PagamentoPedido.
     * @example
     * // Update one PagamentoPedido
     * const pagamentoPedido = await prisma.pagamentoPedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PagamentoPedidoUpdateArgs>(args: SelectSubset<T, PagamentoPedidoUpdateArgs<ExtArgs>>): Prisma__PagamentoPedidoClient<$Result.GetResult<Prisma.$PagamentoPedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PagamentoPedidos.
     * @param {PagamentoPedidoDeleteManyArgs} args - Arguments to filter PagamentoPedidos to delete.
     * @example
     * // Delete a few PagamentoPedidos
     * const { count } = await prisma.pagamentoPedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PagamentoPedidoDeleteManyArgs>(args?: SelectSubset<T, PagamentoPedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PagamentoPedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoPedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PagamentoPedidos
     * const pagamentoPedido = await prisma.pagamentoPedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PagamentoPedidoUpdateManyArgs>(args: SelectSubset<T, PagamentoPedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PagamentoPedidos and returns the data updated in the database.
     * @param {PagamentoPedidoUpdateManyAndReturnArgs} args - Arguments to update many PagamentoPedidos.
     * @example
     * // Update many PagamentoPedidos
     * const pagamentoPedido = await prisma.pagamentoPedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PagamentoPedidos and only return the `PagamentoPedidoId`
     * const pagamentoPedidoWithPagamentoPedidoIdOnly = await prisma.pagamentoPedido.updateManyAndReturn({
     *   select: { PagamentoPedidoId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PagamentoPedidoUpdateManyAndReturnArgs>(args: SelectSubset<T, PagamentoPedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentoPedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PagamentoPedido.
     * @param {PagamentoPedidoUpsertArgs} args - Arguments to update or create a PagamentoPedido.
     * @example
     * // Update or create a PagamentoPedido
     * const pagamentoPedido = await prisma.pagamentoPedido.upsert({
     *   create: {
     *     // ... data to create a PagamentoPedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PagamentoPedido we want to update
     *   }
     * })
     */
    upsert<T extends PagamentoPedidoUpsertArgs>(args: SelectSubset<T, PagamentoPedidoUpsertArgs<ExtArgs>>): Prisma__PagamentoPedidoClient<$Result.GetResult<Prisma.$PagamentoPedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PagamentoPedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoPedidoCountArgs} args - Arguments to filter PagamentoPedidos to count.
     * @example
     * // Count the number of PagamentoPedidos
     * const count = await prisma.pagamentoPedido.count({
     *   where: {
     *     // ... the filter for the PagamentoPedidos we want to count
     *   }
     * })
    **/
    count<T extends PagamentoPedidoCountArgs>(
      args?: Subset<T, PagamentoPedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagamentoPedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PagamentoPedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoPedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PagamentoPedidoAggregateArgs>(args: Subset<T, PagamentoPedidoAggregateArgs>): Prisma.PrismaPromise<GetPagamentoPedidoAggregateType<T>>

    /**
     * Group by PagamentoPedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoPedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PagamentoPedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PagamentoPedidoGroupByArgs['orderBy'] }
        : { orderBy?: PagamentoPedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PagamentoPedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagamentoPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PagamentoPedido model
   */
  readonly fields: PagamentoPedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PagamentoPedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PagamentoPedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PagamentoPedido model
   */
  interface PagamentoPedidoFieldRefs {
    readonly PagamentoPedidoId: FieldRef<"PagamentoPedido", 'String'>
    readonly PedidoId: FieldRef<"PagamentoPedido", 'String'>
    readonly PagamentoMetodo: FieldRef<"PagamentoPedido", 'String'>
    readonly PagamentoStatus: FieldRef<"PagamentoPedido", 'String'>
    readonly PagamentoTransacao: FieldRef<"PagamentoPedido", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PagamentoPedido findUnique
   */
  export type PagamentoPedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagamentoPedido
     */
    select?: PagamentoPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagamentoPedido
     */
    omit?: PagamentoPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoPedidoInclude<ExtArgs> | null
    /**
     * Filter, which PagamentoPedido to fetch.
     */
    where: PagamentoPedidoWhereUniqueInput
  }

  /**
   * PagamentoPedido findUniqueOrThrow
   */
  export type PagamentoPedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagamentoPedido
     */
    select?: PagamentoPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagamentoPedido
     */
    omit?: PagamentoPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoPedidoInclude<ExtArgs> | null
    /**
     * Filter, which PagamentoPedido to fetch.
     */
    where: PagamentoPedidoWhereUniqueInput
  }

  /**
   * PagamentoPedido findFirst
   */
  export type PagamentoPedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagamentoPedido
     */
    select?: PagamentoPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagamentoPedido
     */
    omit?: PagamentoPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoPedidoInclude<ExtArgs> | null
    /**
     * Filter, which PagamentoPedido to fetch.
     */
    where?: PagamentoPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PagamentoPedidos to fetch.
     */
    orderBy?: PagamentoPedidoOrderByWithRelationInput | PagamentoPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PagamentoPedidos.
     */
    cursor?: PagamentoPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PagamentoPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PagamentoPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PagamentoPedidos.
     */
    distinct?: PagamentoPedidoScalarFieldEnum | PagamentoPedidoScalarFieldEnum[]
  }

  /**
   * PagamentoPedido findFirstOrThrow
   */
  export type PagamentoPedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagamentoPedido
     */
    select?: PagamentoPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagamentoPedido
     */
    omit?: PagamentoPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoPedidoInclude<ExtArgs> | null
    /**
     * Filter, which PagamentoPedido to fetch.
     */
    where?: PagamentoPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PagamentoPedidos to fetch.
     */
    orderBy?: PagamentoPedidoOrderByWithRelationInput | PagamentoPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PagamentoPedidos.
     */
    cursor?: PagamentoPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PagamentoPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PagamentoPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PagamentoPedidos.
     */
    distinct?: PagamentoPedidoScalarFieldEnum | PagamentoPedidoScalarFieldEnum[]
  }

  /**
   * PagamentoPedido findMany
   */
  export type PagamentoPedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagamentoPedido
     */
    select?: PagamentoPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagamentoPedido
     */
    omit?: PagamentoPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoPedidoInclude<ExtArgs> | null
    /**
     * Filter, which PagamentoPedidos to fetch.
     */
    where?: PagamentoPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PagamentoPedidos to fetch.
     */
    orderBy?: PagamentoPedidoOrderByWithRelationInput | PagamentoPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PagamentoPedidos.
     */
    cursor?: PagamentoPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PagamentoPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PagamentoPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PagamentoPedidos.
     */
    distinct?: PagamentoPedidoScalarFieldEnum | PagamentoPedidoScalarFieldEnum[]
  }

  /**
   * PagamentoPedido create
   */
  export type PagamentoPedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagamentoPedido
     */
    select?: PagamentoPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagamentoPedido
     */
    omit?: PagamentoPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoPedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a PagamentoPedido.
     */
    data: XOR<PagamentoPedidoCreateInput, PagamentoPedidoUncheckedCreateInput>
  }

  /**
   * PagamentoPedido createMany
   */
  export type PagamentoPedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PagamentoPedidos.
     */
    data: PagamentoPedidoCreateManyInput | PagamentoPedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PagamentoPedido createManyAndReturn
   */
  export type PagamentoPedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagamentoPedido
     */
    select?: PagamentoPedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PagamentoPedido
     */
    omit?: PagamentoPedidoOmit<ExtArgs> | null
    /**
     * The data used to create many PagamentoPedidos.
     */
    data: PagamentoPedidoCreateManyInput | PagamentoPedidoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoPedidoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PagamentoPedido update
   */
  export type PagamentoPedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagamentoPedido
     */
    select?: PagamentoPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagamentoPedido
     */
    omit?: PagamentoPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoPedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a PagamentoPedido.
     */
    data: XOR<PagamentoPedidoUpdateInput, PagamentoPedidoUncheckedUpdateInput>
    /**
     * Choose, which PagamentoPedido to update.
     */
    where: PagamentoPedidoWhereUniqueInput
  }

  /**
   * PagamentoPedido updateMany
   */
  export type PagamentoPedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PagamentoPedidos.
     */
    data: XOR<PagamentoPedidoUpdateManyMutationInput, PagamentoPedidoUncheckedUpdateManyInput>
    /**
     * Filter which PagamentoPedidos to update
     */
    where?: PagamentoPedidoWhereInput
    /**
     * Limit how many PagamentoPedidos to update.
     */
    limit?: number
  }

  /**
   * PagamentoPedido updateManyAndReturn
   */
  export type PagamentoPedidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagamentoPedido
     */
    select?: PagamentoPedidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PagamentoPedido
     */
    omit?: PagamentoPedidoOmit<ExtArgs> | null
    /**
     * The data used to update PagamentoPedidos.
     */
    data: XOR<PagamentoPedidoUpdateManyMutationInput, PagamentoPedidoUncheckedUpdateManyInput>
    /**
     * Filter which PagamentoPedidos to update
     */
    where?: PagamentoPedidoWhereInput
    /**
     * Limit how many PagamentoPedidos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoPedidoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PagamentoPedido upsert
   */
  export type PagamentoPedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagamentoPedido
     */
    select?: PagamentoPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagamentoPedido
     */
    omit?: PagamentoPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoPedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the PagamentoPedido to update in case it exists.
     */
    where: PagamentoPedidoWhereUniqueInput
    /**
     * In case the PagamentoPedido found by the `where` argument doesn't exist, create a new PagamentoPedido with this data.
     */
    create: XOR<PagamentoPedidoCreateInput, PagamentoPedidoUncheckedCreateInput>
    /**
     * In case the PagamentoPedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PagamentoPedidoUpdateInput, PagamentoPedidoUncheckedUpdateInput>
  }

  /**
   * PagamentoPedido delete
   */
  export type PagamentoPedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagamentoPedido
     */
    select?: PagamentoPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagamentoPedido
     */
    omit?: PagamentoPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoPedidoInclude<ExtArgs> | null
    /**
     * Filter which PagamentoPedido to delete.
     */
    where: PagamentoPedidoWhereUniqueInput
  }

  /**
   * PagamentoPedido deleteMany
   */
  export type PagamentoPedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PagamentoPedidos to delete
     */
    where?: PagamentoPedidoWhereInput
    /**
     * Limit how many PagamentoPedidos to delete.
     */
    limit?: number
  }

  /**
   * PagamentoPedido without action
   */
  export type PagamentoPedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagamentoPedido
     */
    select?: PagamentoPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PagamentoPedido
     */
    omit?: PagamentoPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoPedidoInclude<ExtArgs> | null
  }


  /**
   * Model CarregamentoPedido
   */

  export type AggregateCarregamentoPedido = {
    _count: CarregamentoPedidoCountAggregateOutputType | null
    _min: CarregamentoPedidoMinAggregateOutputType | null
    _max: CarregamentoPedidoMaxAggregateOutputType | null
  }

  export type CarregamentoPedidoMinAggregateOutputType = {
    CarregamentoPedidoId: string | null
    PedidoId: string | null
    CarregamentoOperadora: string | null
    CarregamentoServico: string | null
    CarregamentoStatus: string | null
    CarregamentoCodigoRastreio: string | null
  }

  export type CarregamentoPedidoMaxAggregateOutputType = {
    CarregamentoPedidoId: string | null
    PedidoId: string | null
    CarregamentoOperadora: string | null
    CarregamentoServico: string | null
    CarregamentoStatus: string | null
    CarregamentoCodigoRastreio: string | null
  }

  export type CarregamentoPedidoCountAggregateOutputType = {
    CarregamentoPedidoId: number
    PedidoId: number
    CarregamentoOperadora: number
    CarregamentoServico: number
    CarregamentoStatus: number
    CarregamentoCodigoRastreio: number
    _all: number
  }


  export type CarregamentoPedidoMinAggregateInputType = {
    CarregamentoPedidoId?: true
    PedidoId?: true
    CarregamentoOperadora?: true
    CarregamentoServico?: true
    CarregamentoStatus?: true
    CarregamentoCodigoRastreio?: true
  }

  export type CarregamentoPedidoMaxAggregateInputType = {
    CarregamentoPedidoId?: true
    PedidoId?: true
    CarregamentoOperadora?: true
    CarregamentoServico?: true
    CarregamentoStatus?: true
    CarregamentoCodigoRastreio?: true
  }

  export type CarregamentoPedidoCountAggregateInputType = {
    CarregamentoPedidoId?: true
    PedidoId?: true
    CarregamentoOperadora?: true
    CarregamentoServico?: true
    CarregamentoStatus?: true
    CarregamentoCodigoRastreio?: true
    _all?: true
  }

  export type CarregamentoPedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarregamentoPedido to aggregate.
     */
    where?: CarregamentoPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarregamentoPedidos to fetch.
     */
    orderBy?: CarregamentoPedidoOrderByWithRelationInput | CarregamentoPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarregamentoPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarregamentoPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarregamentoPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CarregamentoPedidos
    **/
    _count?: true | CarregamentoPedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarregamentoPedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarregamentoPedidoMaxAggregateInputType
  }

  export type GetCarregamentoPedidoAggregateType<T extends CarregamentoPedidoAggregateArgs> = {
        [P in keyof T & keyof AggregateCarregamentoPedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarregamentoPedido[P]>
      : GetScalarType<T[P], AggregateCarregamentoPedido[P]>
  }




  export type CarregamentoPedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarregamentoPedidoWhereInput
    orderBy?: CarregamentoPedidoOrderByWithAggregationInput | CarregamentoPedidoOrderByWithAggregationInput[]
    by: CarregamentoPedidoScalarFieldEnum[] | CarregamentoPedidoScalarFieldEnum
    having?: CarregamentoPedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarregamentoPedidoCountAggregateInputType | true
    _min?: CarregamentoPedidoMinAggregateInputType
    _max?: CarregamentoPedidoMaxAggregateInputType
  }

  export type CarregamentoPedidoGroupByOutputType = {
    CarregamentoPedidoId: string
    PedidoId: string
    CarregamentoOperadora: string
    CarregamentoServico: string
    CarregamentoStatus: string
    CarregamentoCodigoRastreio: string
    _count: CarregamentoPedidoCountAggregateOutputType | null
    _min: CarregamentoPedidoMinAggregateOutputType | null
    _max: CarregamentoPedidoMaxAggregateOutputType | null
  }

  type GetCarregamentoPedidoGroupByPayload<T extends CarregamentoPedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarregamentoPedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarregamentoPedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarregamentoPedidoGroupByOutputType[P]>
            : GetScalarType<T[P], CarregamentoPedidoGroupByOutputType[P]>
        }
      >
    >


  export type CarregamentoPedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CarregamentoPedidoId?: boolean
    PedidoId?: boolean
    CarregamentoOperadora?: boolean
    CarregamentoServico?: boolean
    CarregamentoStatus?: boolean
    CarregamentoCodigoRastreio?: boolean
    Pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carregamentoPedido"]>

  export type CarregamentoPedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CarregamentoPedidoId?: boolean
    PedidoId?: boolean
    CarregamentoOperadora?: boolean
    CarregamentoServico?: boolean
    CarregamentoStatus?: boolean
    CarregamentoCodigoRastreio?: boolean
    Pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carregamentoPedido"]>

  export type CarregamentoPedidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CarregamentoPedidoId?: boolean
    PedidoId?: boolean
    CarregamentoOperadora?: boolean
    CarregamentoServico?: boolean
    CarregamentoStatus?: boolean
    CarregamentoCodigoRastreio?: boolean
    Pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carregamentoPedido"]>

  export type CarregamentoPedidoSelectScalar = {
    CarregamentoPedidoId?: boolean
    PedidoId?: boolean
    CarregamentoOperadora?: boolean
    CarregamentoServico?: boolean
    CarregamentoStatus?: boolean
    CarregamentoCodigoRastreio?: boolean
  }

  export type CarregamentoPedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"CarregamentoPedidoId" | "PedidoId" | "CarregamentoOperadora" | "CarregamentoServico" | "CarregamentoStatus" | "CarregamentoCodigoRastreio", ExtArgs["result"]["carregamentoPedido"]>
  export type CarregamentoPedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }
  export type CarregamentoPedidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }
  export type CarregamentoPedidoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }

  export type $CarregamentoPedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CarregamentoPedido"
    objects: {
      Pedido: Prisma.$PedidoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      CarregamentoPedidoId: string
      PedidoId: string
      CarregamentoOperadora: string
      CarregamentoServico: string
      CarregamentoStatus: string
      CarregamentoCodigoRastreio: string
    }, ExtArgs["result"]["carregamentoPedido"]>
    composites: {}
  }

  type CarregamentoPedidoGetPayload<S extends boolean | null | undefined | CarregamentoPedidoDefaultArgs> = $Result.GetResult<Prisma.$CarregamentoPedidoPayload, S>

  type CarregamentoPedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarregamentoPedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarregamentoPedidoCountAggregateInputType | true
    }

  export interface CarregamentoPedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CarregamentoPedido'], meta: { name: 'CarregamentoPedido' } }
    /**
     * Find zero or one CarregamentoPedido that matches the filter.
     * @param {CarregamentoPedidoFindUniqueArgs} args - Arguments to find a CarregamentoPedido
     * @example
     * // Get one CarregamentoPedido
     * const carregamentoPedido = await prisma.carregamentoPedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarregamentoPedidoFindUniqueArgs>(args: SelectSubset<T, CarregamentoPedidoFindUniqueArgs<ExtArgs>>): Prisma__CarregamentoPedidoClient<$Result.GetResult<Prisma.$CarregamentoPedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CarregamentoPedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarregamentoPedidoFindUniqueOrThrowArgs} args - Arguments to find a CarregamentoPedido
     * @example
     * // Get one CarregamentoPedido
     * const carregamentoPedido = await prisma.carregamentoPedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarregamentoPedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, CarregamentoPedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarregamentoPedidoClient<$Result.GetResult<Prisma.$CarregamentoPedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarregamentoPedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarregamentoPedidoFindFirstArgs} args - Arguments to find a CarregamentoPedido
     * @example
     * // Get one CarregamentoPedido
     * const carregamentoPedido = await prisma.carregamentoPedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarregamentoPedidoFindFirstArgs>(args?: SelectSubset<T, CarregamentoPedidoFindFirstArgs<ExtArgs>>): Prisma__CarregamentoPedidoClient<$Result.GetResult<Prisma.$CarregamentoPedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarregamentoPedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarregamentoPedidoFindFirstOrThrowArgs} args - Arguments to find a CarregamentoPedido
     * @example
     * // Get one CarregamentoPedido
     * const carregamentoPedido = await prisma.carregamentoPedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarregamentoPedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, CarregamentoPedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarregamentoPedidoClient<$Result.GetResult<Prisma.$CarregamentoPedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CarregamentoPedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarregamentoPedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CarregamentoPedidos
     * const carregamentoPedidos = await prisma.carregamentoPedido.findMany()
     * 
     * // Get first 10 CarregamentoPedidos
     * const carregamentoPedidos = await prisma.carregamentoPedido.findMany({ take: 10 })
     * 
     * // Only select the `CarregamentoPedidoId`
     * const carregamentoPedidoWithCarregamentoPedidoIdOnly = await prisma.carregamentoPedido.findMany({ select: { CarregamentoPedidoId: true } })
     * 
     */
    findMany<T extends CarregamentoPedidoFindManyArgs>(args?: SelectSubset<T, CarregamentoPedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarregamentoPedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CarregamentoPedido.
     * @param {CarregamentoPedidoCreateArgs} args - Arguments to create a CarregamentoPedido.
     * @example
     * // Create one CarregamentoPedido
     * const CarregamentoPedido = await prisma.carregamentoPedido.create({
     *   data: {
     *     // ... data to create a CarregamentoPedido
     *   }
     * })
     * 
     */
    create<T extends CarregamentoPedidoCreateArgs>(args: SelectSubset<T, CarregamentoPedidoCreateArgs<ExtArgs>>): Prisma__CarregamentoPedidoClient<$Result.GetResult<Prisma.$CarregamentoPedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CarregamentoPedidos.
     * @param {CarregamentoPedidoCreateManyArgs} args - Arguments to create many CarregamentoPedidos.
     * @example
     * // Create many CarregamentoPedidos
     * const carregamentoPedido = await prisma.carregamentoPedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarregamentoPedidoCreateManyArgs>(args?: SelectSubset<T, CarregamentoPedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CarregamentoPedidos and returns the data saved in the database.
     * @param {CarregamentoPedidoCreateManyAndReturnArgs} args - Arguments to create many CarregamentoPedidos.
     * @example
     * // Create many CarregamentoPedidos
     * const carregamentoPedido = await prisma.carregamentoPedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CarregamentoPedidos and only return the `CarregamentoPedidoId`
     * const carregamentoPedidoWithCarregamentoPedidoIdOnly = await prisma.carregamentoPedido.createManyAndReturn({
     *   select: { CarregamentoPedidoId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarregamentoPedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, CarregamentoPedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarregamentoPedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CarregamentoPedido.
     * @param {CarregamentoPedidoDeleteArgs} args - Arguments to delete one CarregamentoPedido.
     * @example
     * // Delete one CarregamentoPedido
     * const CarregamentoPedido = await prisma.carregamentoPedido.delete({
     *   where: {
     *     // ... filter to delete one CarregamentoPedido
     *   }
     * })
     * 
     */
    delete<T extends CarregamentoPedidoDeleteArgs>(args: SelectSubset<T, CarregamentoPedidoDeleteArgs<ExtArgs>>): Prisma__CarregamentoPedidoClient<$Result.GetResult<Prisma.$CarregamentoPedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CarregamentoPedido.
     * @param {CarregamentoPedidoUpdateArgs} args - Arguments to update one CarregamentoPedido.
     * @example
     * // Update one CarregamentoPedido
     * const carregamentoPedido = await prisma.carregamentoPedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarregamentoPedidoUpdateArgs>(args: SelectSubset<T, CarregamentoPedidoUpdateArgs<ExtArgs>>): Prisma__CarregamentoPedidoClient<$Result.GetResult<Prisma.$CarregamentoPedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CarregamentoPedidos.
     * @param {CarregamentoPedidoDeleteManyArgs} args - Arguments to filter CarregamentoPedidos to delete.
     * @example
     * // Delete a few CarregamentoPedidos
     * const { count } = await prisma.carregamentoPedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarregamentoPedidoDeleteManyArgs>(args?: SelectSubset<T, CarregamentoPedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarregamentoPedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarregamentoPedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CarregamentoPedidos
     * const carregamentoPedido = await prisma.carregamentoPedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarregamentoPedidoUpdateManyArgs>(args: SelectSubset<T, CarregamentoPedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarregamentoPedidos and returns the data updated in the database.
     * @param {CarregamentoPedidoUpdateManyAndReturnArgs} args - Arguments to update many CarregamentoPedidos.
     * @example
     * // Update many CarregamentoPedidos
     * const carregamentoPedido = await prisma.carregamentoPedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CarregamentoPedidos and only return the `CarregamentoPedidoId`
     * const carregamentoPedidoWithCarregamentoPedidoIdOnly = await prisma.carregamentoPedido.updateManyAndReturn({
     *   select: { CarregamentoPedidoId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CarregamentoPedidoUpdateManyAndReturnArgs>(args: SelectSubset<T, CarregamentoPedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarregamentoPedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CarregamentoPedido.
     * @param {CarregamentoPedidoUpsertArgs} args - Arguments to update or create a CarregamentoPedido.
     * @example
     * // Update or create a CarregamentoPedido
     * const carregamentoPedido = await prisma.carregamentoPedido.upsert({
     *   create: {
     *     // ... data to create a CarregamentoPedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CarregamentoPedido we want to update
     *   }
     * })
     */
    upsert<T extends CarregamentoPedidoUpsertArgs>(args: SelectSubset<T, CarregamentoPedidoUpsertArgs<ExtArgs>>): Prisma__CarregamentoPedidoClient<$Result.GetResult<Prisma.$CarregamentoPedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CarregamentoPedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarregamentoPedidoCountArgs} args - Arguments to filter CarregamentoPedidos to count.
     * @example
     * // Count the number of CarregamentoPedidos
     * const count = await prisma.carregamentoPedido.count({
     *   where: {
     *     // ... the filter for the CarregamentoPedidos we want to count
     *   }
     * })
    **/
    count<T extends CarregamentoPedidoCountArgs>(
      args?: Subset<T, CarregamentoPedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarregamentoPedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CarregamentoPedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarregamentoPedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarregamentoPedidoAggregateArgs>(args: Subset<T, CarregamentoPedidoAggregateArgs>): Prisma.PrismaPromise<GetCarregamentoPedidoAggregateType<T>>

    /**
     * Group by CarregamentoPedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarregamentoPedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CarregamentoPedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarregamentoPedidoGroupByArgs['orderBy'] }
        : { orderBy?: CarregamentoPedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CarregamentoPedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarregamentoPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CarregamentoPedido model
   */
  readonly fields: CarregamentoPedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CarregamentoPedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarregamentoPedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CarregamentoPedido model
   */
  interface CarregamentoPedidoFieldRefs {
    readonly CarregamentoPedidoId: FieldRef<"CarregamentoPedido", 'String'>
    readonly PedidoId: FieldRef<"CarregamentoPedido", 'String'>
    readonly CarregamentoOperadora: FieldRef<"CarregamentoPedido", 'String'>
    readonly CarregamentoServico: FieldRef<"CarregamentoPedido", 'String'>
    readonly CarregamentoStatus: FieldRef<"CarregamentoPedido", 'String'>
    readonly CarregamentoCodigoRastreio: FieldRef<"CarregamentoPedido", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CarregamentoPedido findUnique
   */
  export type CarregamentoPedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarregamentoPedido
     */
    select?: CarregamentoPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarregamentoPedido
     */
    omit?: CarregamentoPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarregamentoPedidoInclude<ExtArgs> | null
    /**
     * Filter, which CarregamentoPedido to fetch.
     */
    where: CarregamentoPedidoWhereUniqueInput
  }

  /**
   * CarregamentoPedido findUniqueOrThrow
   */
  export type CarregamentoPedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarregamentoPedido
     */
    select?: CarregamentoPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarregamentoPedido
     */
    omit?: CarregamentoPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarregamentoPedidoInclude<ExtArgs> | null
    /**
     * Filter, which CarregamentoPedido to fetch.
     */
    where: CarregamentoPedidoWhereUniqueInput
  }

  /**
   * CarregamentoPedido findFirst
   */
  export type CarregamentoPedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarregamentoPedido
     */
    select?: CarregamentoPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarregamentoPedido
     */
    omit?: CarregamentoPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarregamentoPedidoInclude<ExtArgs> | null
    /**
     * Filter, which CarregamentoPedido to fetch.
     */
    where?: CarregamentoPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarregamentoPedidos to fetch.
     */
    orderBy?: CarregamentoPedidoOrderByWithRelationInput | CarregamentoPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarregamentoPedidos.
     */
    cursor?: CarregamentoPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarregamentoPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarregamentoPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarregamentoPedidos.
     */
    distinct?: CarregamentoPedidoScalarFieldEnum | CarregamentoPedidoScalarFieldEnum[]
  }

  /**
   * CarregamentoPedido findFirstOrThrow
   */
  export type CarregamentoPedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarregamentoPedido
     */
    select?: CarregamentoPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarregamentoPedido
     */
    omit?: CarregamentoPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarregamentoPedidoInclude<ExtArgs> | null
    /**
     * Filter, which CarregamentoPedido to fetch.
     */
    where?: CarregamentoPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarregamentoPedidos to fetch.
     */
    orderBy?: CarregamentoPedidoOrderByWithRelationInput | CarregamentoPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarregamentoPedidos.
     */
    cursor?: CarregamentoPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarregamentoPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarregamentoPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarregamentoPedidos.
     */
    distinct?: CarregamentoPedidoScalarFieldEnum | CarregamentoPedidoScalarFieldEnum[]
  }

  /**
   * CarregamentoPedido findMany
   */
  export type CarregamentoPedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarregamentoPedido
     */
    select?: CarregamentoPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarregamentoPedido
     */
    omit?: CarregamentoPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarregamentoPedidoInclude<ExtArgs> | null
    /**
     * Filter, which CarregamentoPedidos to fetch.
     */
    where?: CarregamentoPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarregamentoPedidos to fetch.
     */
    orderBy?: CarregamentoPedidoOrderByWithRelationInput | CarregamentoPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CarregamentoPedidos.
     */
    cursor?: CarregamentoPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarregamentoPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarregamentoPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarregamentoPedidos.
     */
    distinct?: CarregamentoPedidoScalarFieldEnum | CarregamentoPedidoScalarFieldEnum[]
  }

  /**
   * CarregamentoPedido create
   */
  export type CarregamentoPedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarregamentoPedido
     */
    select?: CarregamentoPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarregamentoPedido
     */
    omit?: CarregamentoPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarregamentoPedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a CarregamentoPedido.
     */
    data: XOR<CarregamentoPedidoCreateInput, CarregamentoPedidoUncheckedCreateInput>
  }

  /**
   * CarregamentoPedido createMany
   */
  export type CarregamentoPedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CarregamentoPedidos.
     */
    data: CarregamentoPedidoCreateManyInput | CarregamentoPedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CarregamentoPedido createManyAndReturn
   */
  export type CarregamentoPedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarregamentoPedido
     */
    select?: CarregamentoPedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CarregamentoPedido
     */
    omit?: CarregamentoPedidoOmit<ExtArgs> | null
    /**
     * The data used to create many CarregamentoPedidos.
     */
    data: CarregamentoPedidoCreateManyInput | CarregamentoPedidoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarregamentoPedidoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CarregamentoPedido update
   */
  export type CarregamentoPedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarregamentoPedido
     */
    select?: CarregamentoPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarregamentoPedido
     */
    omit?: CarregamentoPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarregamentoPedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a CarregamentoPedido.
     */
    data: XOR<CarregamentoPedidoUpdateInput, CarregamentoPedidoUncheckedUpdateInput>
    /**
     * Choose, which CarregamentoPedido to update.
     */
    where: CarregamentoPedidoWhereUniqueInput
  }

  /**
   * CarregamentoPedido updateMany
   */
  export type CarregamentoPedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CarregamentoPedidos.
     */
    data: XOR<CarregamentoPedidoUpdateManyMutationInput, CarregamentoPedidoUncheckedUpdateManyInput>
    /**
     * Filter which CarregamentoPedidos to update
     */
    where?: CarregamentoPedidoWhereInput
    /**
     * Limit how many CarregamentoPedidos to update.
     */
    limit?: number
  }

  /**
   * CarregamentoPedido updateManyAndReturn
   */
  export type CarregamentoPedidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarregamentoPedido
     */
    select?: CarregamentoPedidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CarregamentoPedido
     */
    omit?: CarregamentoPedidoOmit<ExtArgs> | null
    /**
     * The data used to update CarregamentoPedidos.
     */
    data: XOR<CarregamentoPedidoUpdateManyMutationInput, CarregamentoPedidoUncheckedUpdateManyInput>
    /**
     * Filter which CarregamentoPedidos to update
     */
    where?: CarregamentoPedidoWhereInput
    /**
     * Limit how many CarregamentoPedidos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarregamentoPedidoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CarregamentoPedido upsert
   */
  export type CarregamentoPedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarregamentoPedido
     */
    select?: CarregamentoPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarregamentoPedido
     */
    omit?: CarregamentoPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarregamentoPedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the CarregamentoPedido to update in case it exists.
     */
    where: CarregamentoPedidoWhereUniqueInput
    /**
     * In case the CarregamentoPedido found by the `where` argument doesn't exist, create a new CarregamentoPedido with this data.
     */
    create: XOR<CarregamentoPedidoCreateInput, CarregamentoPedidoUncheckedCreateInput>
    /**
     * In case the CarregamentoPedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarregamentoPedidoUpdateInput, CarregamentoPedidoUncheckedUpdateInput>
  }

  /**
   * CarregamentoPedido delete
   */
  export type CarregamentoPedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarregamentoPedido
     */
    select?: CarregamentoPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarregamentoPedido
     */
    omit?: CarregamentoPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarregamentoPedidoInclude<ExtArgs> | null
    /**
     * Filter which CarregamentoPedido to delete.
     */
    where: CarregamentoPedidoWhereUniqueInput
  }

  /**
   * CarregamentoPedido deleteMany
   */
  export type CarregamentoPedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarregamentoPedidos to delete
     */
    where?: CarregamentoPedidoWhereInput
    /**
     * Limit how many CarregamentoPedidos to delete.
     */
    limit?: number
  }

  /**
   * CarregamentoPedido without action
   */
  export type CarregamentoPedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarregamentoPedido
     */
    select?: CarregamentoPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarregamentoPedido
     */
    omit?: CarregamentoPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarregamentoPedidoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClienteScalarFieldEnum: {
    ClienteId: 'ClienteId',
    ClienteNome: 'ClienteNome',
    ClienteEmail: 'ClienteEmail',
    ClienteDocumento: 'ClienteDocumento',
    ClienteDtImportacao: 'ClienteDtImportacao'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const VendedorScalarFieldEnum: {
    VendedorId: 'VendedorId',
    VendedorNome: 'VendedorNome',
    VendedorCidade: 'VendedorCidade',
    VendedorUF: 'VendedorUF',
    VendedorDtImportacao: 'VendedorDtImportacao'
  };

  export type VendedorScalarFieldEnum = (typeof VendedorScalarFieldEnum)[keyof typeof VendedorScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    CategoriaId: 'CategoriaId',
    CategoriaNome: 'CategoriaNome',
    CategoriaDtImportacao: 'CategoriaDtImportacao'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const SubCategoriaScalarFieldEnum: {
    SubCategoriaId: 'SubCategoriaId',
    CategoriaId: 'CategoriaId',
    SubCategoriaNome: 'SubCategoriaNome',
    SubCategoriaDtImportacao: 'SubCategoriaDtImportacao'
  };

  export type SubCategoriaScalarFieldEnum = (typeof SubCategoriaScalarFieldEnum)[keyof typeof SubCategoriaScalarFieldEnum]


  export const ProdutoScalarFieldEnum: {
    ProdutoId: 'ProdutoId',
    ProdutoNome: 'ProdutoNome',
    ProdutoDtImportacao: 'ProdutoDtImportacao'
  };

  export type ProdutoScalarFieldEnum = (typeof ProdutoScalarFieldEnum)[keyof typeof ProdutoScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    PedidoId: 'PedidoId',
    PedidoDtCriacao: 'PedidoDtCriacao',
    PedidoDtImportacao: 'PedidoDtImportacao',
    PedidoTipoCriacao: 'PedidoTipoCriacao',
    PedidoStatus: 'PedidoStatus',
    PedidoValorTotal: 'PedidoValorTotal',
    ClienteId: 'ClienteId',
    VendedorId: 'VendedorId'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const ItemPedidoScalarFieldEnum: {
    ItemPedidoId: 'ItemPedidoId',
    PedidoId: 'PedidoId',
    ProdutoId: 'ProdutoId',
    ItemPedidoQuantidade: 'ItemPedidoQuantidade',
    ItemPedidoPrecoUnitario: 'ItemPedidoPrecoUnitario',
    ItemPedidoValorTotal: 'ItemPedidoValorTotal',
    SubCategoriaId: 'SubCategoriaId',
    CategoriaId: 'CategoriaId'
  };

  export type ItemPedidoScalarFieldEnum = (typeof ItemPedidoScalarFieldEnum)[keyof typeof ItemPedidoScalarFieldEnum]


  export const MetadadosPedidoScalarFieldEnum: {
    MetadadosPedidoId: 'MetadadosPedidoId',
    PedidoId: 'PedidoId',
    MetadadosSource: 'MetadadosSource',
    MetadadosUserAgent: 'MetadadosUserAgent',
    MetadadosIP: 'MetadadosIP'
  };

  export type MetadadosPedidoScalarFieldEnum = (typeof MetadadosPedidoScalarFieldEnum)[keyof typeof MetadadosPedidoScalarFieldEnum]


  export const PagamentoPedidoScalarFieldEnum: {
    PagamentoPedidoId: 'PagamentoPedidoId',
    PedidoId: 'PedidoId',
    PagamentoMetodo: 'PagamentoMetodo',
    PagamentoStatus: 'PagamentoStatus',
    PagamentoTransacao: 'PagamentoTransacao'
  };

  export type PagamentoPedidoScalarFieldEnum = (typeof PagamentoPedidoScalarFieldEnum)[keyof typeof PagamentoPedidoScalarFieldEnum]


  export const CarregamentoPedidoScalarFieldEnum: {
    CarregamentoPedidoId: 'CarregamentoPedidoId',
    PedidoId: 'PedidoId',
    CarregamentoOperadora: 'CarregamentoOperadora',
    CarregamentoServico: 'CarregamentoServico',
    CarregamentoStatus: 'CarregamentoStatus',
    CarregamentoCodigoRastreio: 'CarregamentoCodigoRastreio'
  };

  export type CarregamentoPedidoScalarFieldEnum = (typeof CarregamentoPedidoScalarFieldEnum)[keyof typeof CarregamentoPedidoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    ClienteId?: IntFilter<"Cliente"> | number
    ClienteNome?: StringFilter<"Cliente"> | string
    ClienteEmail?: StringFilter<"Cliente"> | string
    ClienteDocumento?: StringFilter<"Cliente"> | string
    ClienteDtImportacao?: DateTimeFilter<"Cliente"> | Date | string
    Pedido?: PedidoListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    ClienteId?: SortOrder
    ClienteNome?: SortOrder
    ClienteEmail?: SortOrder
    ClienteDocumento?: SortOrder
    ClienteDtImportacao?: SortOrder
    Pedido?: PedidoOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    ClienteId?: number
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    ClienteNome?: StringFilter<"Cliente"> | string
    ClienteEmail?: StringFilter<"Cliente"> | string
    ClienteDocumento?: StringFilter<"Cliente"> | string
    ClienteDtImportacao?: DateTimeFilter<"Cliente"> | Date | string
    Pedido?: PedidoListRelationFilter
  }, "ClienteId">

  export type ClienteOrderByWithAggregationInput = {
    ClienteId?: SortOrder
    ClienteNome?: SortOrder
    ClienteEmail?: SortOrder
    ClienteDocumento?: SortOrder
    ClienteDtImportacao?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    ClienteId?: IntWithAggregatesFilter<"Cliente"> | number
    ClienteNome?: StringWithAggregatesFilter<"Cliente"> | string
    ClienteEmail?: StringWithAggregatesFilter<"Cliente"> | string
    ClienteDocumento?: StringWithAggregatesFilter<"Cliente"> | string
    ClienteDtImportacao?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
  }

  export type VendedorWhereInput = {
    AND?: VendedorWhereInput | VendedorWhereInput[]
    OR?: VendedorWhereInput[]
    NOT?: VendedorWhereInput | VendedorWhereInput[]
    VendedorId?: IntFilter<"Vendedor"> | number
    VendedorNome?: StringFilter<"Vendedor"> | string
    VendedorCidade?: StringFilter<"Vendedor"> | string
    VendedorUF?: StringFilter<"Vendedor"> | string
    VendedorDtImportacao?: DateTimeFilter<"Vendedor"> | Date | string
    Pedido?: PedidoListRelationFilter
  }

  export type VendedorOrderByWithRelationInput = {
    VendedorId?: SortOrder
    VendedorNome?: SortOrder
    VendedorCidade?: SortOrder
    VendedorUF?: SortOrder
    VendedorDtImportacao?: SortOrder
    Pedido?: PedidoOrderByRelationAggregateInput
  }

  export type VendedorWhereUniqueInput = Prisma.AtLeast<{
    VendedorId?: number
    AND?: VendedorWhereInput | VendedorWhereInput[]
    OR?: VendedorWhereInput[]
    NOT?: VendedorWhereInput | VendedorWhereInput[]
    VendedorNome?: StringFilter<"Vendedor"> | string
    VendedorCidade?: StringFilter<"Vendedor"> | string
    VendedorUF?: StringFilter<"Vendedor"> | string
    VendedorDtImportacao?: DateTimeFilter<"Vendedor"> | Date | string
    Pedido?: PedidoListRelationFilter
  }, "VendedorId">

  export type VendedorOrderByWithAggregationInput = {
    VendedorId?: SortOrder
    VendedorNome?: SortOrder
    VendedorCidade?: SortOrder
    VendedorUF?: SortOrder
    VendedorDtImportacao?: SortOrder
    _count?: VendedorCountOrderByAggregateInput
    _avg?: VendedorAvgOrderByAggregateInput
    _max?: VendedorMaxOrderByAggregateInput
    _min?: VendedorMinOrderByAggregateInput
    _sum?: VendedorSumOrderByAggregateInput
  }

  export type VendedorScalarWhereWithAggregatesInput = {
    AND?: VendedorScalarWhereWithAggregatesInput | VendedorScalarWhereWithAggregatesInput[]
    OR?: VendedorScalarWhereWithAggregatesInput[]
    NOT?: VendedorScalarWhereWithAggregatesInput | VendedorScalarWhereWithAggregatesInput[]
    VendedorId?: IntWithAggregatesFilter<"Vendedor"> | number
    VendedorNome?: StringWithAggregatesFilter<"Vendedor"> | string
    VendedorCidade?: StringWithAggregatesFilter<"Vendedor"> | string
    VendedorUF?: StringWithAggregatesFilter<"Vendedor"> | string
    VendedorDtImportacao?: DateTimeWithAggregatesFilter<"Vendedor"> | Date | string
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    CategoriaId?: StringFilter<"Categoria"> | string
    CategoriaNome?: StringFilter<"Categoria"> | string
    CategoriaDtImportacao?: DateTimeFilter<"Categoria"> | Date | string
    SubCategoria?: SubCategoriaListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    CategoriaId?: SortOrder
    CategoriaNome?: SortOrder
    CategoriaDtImportacao?: SortOrder
    SubCategoria?: SubCategoriaOrderByRelationAggregateInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    CategoriaId?: string
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    CategoriaNome?: StringFilter<"Categoria"> | string
    CategoriaDtImportacao?: DateTimeFilter<"Categoria"> | Date | string
    SubCategoria?: SubCategoriaListRelationFilter
  }, "CategoriaId">

  export type CategoriaOrderByWithAggregationInput = {
    CategoriaId?: SortOrder
    CategoriaNome?: SortOrder
    CategoriaDtImportacao?: SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    CategoriaId?: StringWithAggregatesFilter<"Categoria"> | string
    CategoriaNome?: StringWithAggregatesFilter<"Categoria"> | string
    CategoriaDtImportacao?: DateTimeWithAggregatesFilter<"Categoria"> | Date | string
  }

  export type SubCategoriaWhereInput = {
    AND?: SubCategoriaWhereInput | SubCategoriaWhereInput[]
    OR?: SubCategoriaWhereInput[]
    NOT?: SubCategoriaWhereInput | SubCategoriaWhereInput[]
    SubCategoriaId?: StringFilter<"SubCategoria"> | string
    CategoriaId?: StringFilter<"SubCategoria"> | string
    SubCategoriaNome?: StringFilter<"SubCategoria"> | string
    SubCategoriaDtImportacao?: DateTimeFilter<"SubCategoria"> | Date | string
    Categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    ItemPedido?: ItemPedidoListRelationFilter
  }

  export type SubCategoriaOrderByWithRelationInput = {
    SubCategoriaId?: SortOrder
    CategoriaId?: SortOrder
    SubCategoriaNome?: SortOrder
    SubCategoriaDtImportacao?: SortOrder
    Categoria?: CategoriaOrderByWithRelationInput
    ItemPedido?: ItemPedidoOrderByRelationAggregateInput
  }

  export type SubCategoriaWhereUniqueInput = Prisma.AtLeast<{
    SubCategoriaId_CategoriaId?: SubCategoriaSubCategoriaIdCategoriaIdCompoundUniqueInput
    AND?: SubCategoriaWhereInput | SubCategoriaWhereInput[]
    OR?: SubCategoriaWhereInput[]
    NOT?: SubCategoriaWhereInput | SubCategoriaWhereInput[]
    SubCategoriaId?: StringFilter<"SubCategoria"> | string
    CategoriaId?: StringFilter<"SubCategoria"> | string
    SubCategoriaNome?: StringFilter<"SubCategoria"> | string
    SubCategoriaDtImportacao?: DateTimeFilter<"SubCategoria"> | Date | string
    Categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    ItemPedido?: ItemPedidoListRelationFilter
  }, "SubCategoriaId_CategoriaId">

  export type SubCategoriaOrderByWithAggregationInput = {
    SubCategoriaId?: SortOrder
    CategoriaId?: SortOrder
    SubCategoriaNome?: SortOrder
    SubCategoriaDtImportacao?: SortOrder
    _count?: SubCategoriaCountOrderByAggregateInput
    _max?: SubCategoriaMaxOrderByAggregateInput
    _min?: SubCategoriaMinOrderByAggregateInput
  }

  export type SubCategoriaScalarWhereWithAggregatesInput = {
    AND?: SubCategoriaScalarWhereWithAggregatesInput | SubCategoriaScalarWhereWithAggregatesInput[]
    OR?: SubCategoriaScalarWhereWithAggregatesInput[]
    NOT?: SubCategoriaScalarWhereWithAggregatesInput | SubCategoriaScalarWhereWithAggregatesInput[]
    SubCategoriaId?: StringWithAggregatesFilter<"SubCategoria"> | string
    CategoriaId?: StringWithAggregatesFilter<"SubCategoria"> | string
    SubCategoriaNome?: StringWithAggregatesFilter<"SubCategoria"> | string
    SubCategoriaDtImportacao?: DateTimeWithAggregatesFilter<"SubCategoria"> | Date | string
  }

  export type ProdutoWhereInput = {
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    ProdutoId?: StringFilter<"Produto"> | string
    ProdutoNome?: StringFilter<"Produto"> | string
    ProdutoDtImportacao?: DateTimeFilter<"Produto"> | Date | string
    ItemPedido?: ItemPedidoListRelationFilter
  }

  export type ProdutoOrderByWithRelationInput = {
    ProdutoId?: SortOrder
    ProdutoNome?: SortOrder
    ProdutoDtImportacao?: SortOrder
    ItemPedido?: ItemPedidoOrderByRelationAggregateInput
  }

  export type ProdutoWhereUniqueInput = Prisma.AtLeast<{
    ProdutoId?: string
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    ProdutoNome?: StringFilter<"Produto"> | string
    ProdutoDtImportacao?: DateTimeFilter<"Produto"> | Date | string
    ItemPedido?: ItemPedidoListRelationFilter
  }, "ProdutoId">

  export type ProdutoOrderByWithAggregationInput = {
    ProdutoId?: SortOrder
    ProdutoNome?: SortOrder
    ProdutoDtImportacao?: SortOrder
    _count?: ProdutoCountOrderByAggregateInput
    _max?: ProdutoMaxOrderByAggregateInput
    _min?: ProdutoMinOrderByAggregateInput
  }

  export type ProdutoScalarWhereWithAggregatesInput = {
    AND?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    OR?: ProdutoScalarWhereWithAggregatesInput[]
    NOT?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    ProdutoId?: StringWithAggregatesFilter<"Produto"> | string
    ProdutoNome?: StringWithAggregatesFilter<"Produto"> | string
    ProdutoDtImportacao?: DateTimeWithAggregatesFilter<"Produto"> | Date | string
  }

  export type PedidoWhereInput = {
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    PedidoId?: StringFilter<"Pedido"> | string
    PedidoDtCriacao?: DateTimeFilter<"Pedido"> | Date | string
    PedidoDtImportacao?: DateTimeFilter<"Pedido"> | Date | string
    PedidoTipoCriacao?: StringFilter<"Pedido"> | string
    PedidoStatus?: StringFilter<"Pedido"> | string
    PedidoValorTotal?: DecimalFilter<"Pedido"> | Decimal | DecimalJsLike | number | string
    ClienteId?: IntFilter<"Pedido"> | number
    VendedorId?: IntFilter<"Pedido"> | number
    Cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    Vendedor?: XOR<VendedorScalarRelationFilter, VendedorWhereInput>
    ItemPedido?: ItemPedidoListRelationFilter
    MetadadosPedido?: MetadadosPedidoListRelationFilter
    PagamentoPedido?: PagamentoPedidoListRelationFilter
    CarregamentoPedido?: CarregamentoPedidoListRelationFilter
  }

  export type PedidoOrderByWithRelationInput = {
    PedidoId?: SortOrder
    PedidoDtCriacao?: SortOrder
    PedidoDtImportacao?: SortOrder
    PedidoTipoCriacao?: SortOrder
    PedidoStatus?: SortOrder
    PedidoValorTotal?: SortOrder
    ClienteId?: SortOrder
    VendedorId?: SortOrder
    Cliente?: ClienteOrderByWithRelationInput
    Vendedor?: VendedorOrderByWithRelationInput
    ItemPedido?: ItemPedidoOrderByRelationAggregateInput
    MetadadosPedido?: MetadadosPedidoOrderByRelationAggregateInput
    PagamentoPedido?: PagamentoPedidoOrderByRelationAggregateInput
    CarregamentoPedido?: CarregamentoPedidoOrderByRelationAggregateInput
  }

  export type PedidoWhereUniqueInput = Prisma.AtLeast<{
    PedidoId?: string
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    PedidoDtCriacao?: DateTimeFilter<"Pedido"> | Date | string
    PedidoDtImportacao?: DateTimeFilter<"Pedido"> | Date | string
    PedidoTipoCriacao?: StringFilter<"Pedido"> | string
    PedidoStatus?: StringFilter<"Pedido"> | string
    PedidoValorTotal?: DecimalFilter<"Pedido"> | Decimal | DecimalJsLike | number | string
    ClienteId?: IntFilter<"Pedido"> | number
    VendedorId?: IntFilter<"Pedido"> | number
    Cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    Vendedor?: XOR<VendedorScalarRelationFilter, VendedorWhereInput>
    ItemPedido?: ItemPedidoListRelationFilter
    MetadadosPedido?: MetadadosPedidoListRelationFilter
    PagamentoPedido?: PagamentoPedidoListRelationFilter
    CarregamentoPedido?: CarregamentoPedidoListRelationFilter
  }, "PedidoId">

  export type PedidoOrderByWithAggregationInput = {
    PedidoId?: SortOrder
    PedidoDtCriacao?: SortOrder
    PedidoDtImportacao?: SortOrder
    PedidoTipoCriacao?: SortOrder
    PedidoStatus?: SortOrder
    PedidoValorTotal?: SortOrder
    ClienteId?: SortOrder
    VendedorId?: SortOrder
    _count?: PedidoCountOrderByAggregateInput
    _avg?: PedidoAvgOrderByAggregateInput
    _max?: PedidoMaxOrderByAggregateInput
    _min?: PedidoMinOrderByAggregateInput
    _sum?: PedidoSumOrderByAggregateInput
  }

  export type PedidoScalarWhereWithAggregatesInput = {
    AND?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    OR?: PedidoScalarWhereWithAggregatesInput[]
    NOT?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    PedidoId?: StringWithAggregatesFilter<"Pedido"> | string
    PedidoDtCriacao?: DateTimeWithAggregatesFilter<"Pedido"> | Date | string
    PedidoDtImportacao?: DateTimeWithAggregatesFilter<"Pedido"> | Date | string
    PedidoTipoCriacao?: StringWithAggregatesFilter<"Pedido"> | string
    PedidoStatus?: StringWithAggregatesFilter<"Pedido"> | string
    PedidoValorTotal?: DecimalWithAggregatesFilter<"Pedido"> | Decimal | DecimalJsLike | number | string
    ClienteId?: IntWithAggregatesFilter<"Pedido"> | number
    VendedorId?: IntWithAggregatesFilter<"Pedido"> | number
  }

  export type ItemPedidoWhereInput = {
    AND?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    OR?: ItemPedidoWhereInput[]
    NOT?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    ItemPedidoId?: IntFilter<"ItemPedido"> | number
    PedidoId?: StringFilter<"ItemPedido"> | string
    ProdutoId?: StringFilter<"ItemPedido"> | string
    ItemPedidoQuantidade?: IntFilter<"ItemPedido"> | number
    ItemPedidoPrecoUnitario?: DecimalFilter<"ItemPedido"> | Decimal | DecimalJsLike | number | string
    ItemPedidoValorTotal?: DecimalFilter<"ItemPedido"> | Decimal | DecimalJsLike | number | string
    SubCategoriaId?: StringFilter<"ItemPedido"> | string
    CategoriaId?: StringFilter<"ItemPedido"> | string
    Pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    Produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
    SubCategoria?: XOR<SubCategoriaScalarRelationFilter, SubCategoriaWhereInput>
  }

  export type ItemPedidoOrderByWithRelationInput = {
    ItemPedidoId?: SortOrder
    PedidoId?: SortOrder
    ProdutoId?: SortOrder
    ItemPedidoQuantidade?: SortOrder
    ItemPedidoPrecoUnitario?: SortOrder
    ItemPedidoValorTotal?: SortOrder
    SubCategoriaId?: SortOrder
    CategoriaId?: SortOrder
    Pedido?: PedidoOrderByWithRelationInput
    Produto?: ProdutoOrderByWithRelationInput
    SubCategoria?: SubCategoriaOrderByWithRelationInput
  }

  export type ItemPedidoWhereUniqueInput = Prisma.AtLeast<{
    ItemPedidoId_PedidoId?: ItemPedidoItemPedidoIdPedidoIdCompoundUniqueInput
    AND?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    OR?: ItemPedidoWhereInput[]
    NOT?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    ItemPedidoId?: IntFilter<"ItemPedido"> | number
    PedidoId?: StringFilter<"ItemPedido"> | string
    ProdutoId?: StringFilter<"ItemPedido"> | string
    ItemPedidoQuantidade?: IntFilter<"ItemPedido"> | number
    ItemPedidoPrecoUnitario?: DecimalFilter<"ItemPedido"> | Decimal | DecimalJsLike | number | string
    ItemPedidoValorTotal?: DecimalFilter<"ItemPedido"> | Decimal | DecimalJsLike | number | string
    SubCategoriaId?: StringFilter<"ItemPedido"> | string
    CategoriaId?: StringFilter<"ItemPedido"> | string
    Pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    Produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
    SubCategoria?: XOR<SubCategoriaScalarRelationFilter, SubCategoriaWhereInput>
  }, "ItemPedidoId_PedidoId">

  export type ItemPedidoOrderByWithAggregationInput = {
    ItemPedidoId?: SortOrder
    PedidoId?: SortOrder
    ProdutoId?: SortOrder
    ItemPedidoQuantidade?: SortOrder
    ItemPedidoPrecoUnitario?: SortOrder
    ItemPedidoValorTotal?: SortOrder
    SubCategoriaId?: SortOrder
    CategoriaId?: SortOrder
    _count?: ItemPedidoCountOrderByAggregateInput
    _avg?: ItemPedidoAvgOrderByAggregateInput
    _max?: ItemPedidoMaxOrderByAggregateInput
    _min?: ItemPedidoMinOrderByAggregateInput
    _sum?: ItemPedidoSumOrderByAggregateInput
  }

  export type ItemPedidoScalarWhereWithAggregatesInput = {
    AND?: ItemPedidoScalarWhereWithAggregatesInput | ItemPedidoScalarWhereWithAggregatesInput[]
    OR?: ItemPedidoScalarWhereWithAggregatesInput[]
    NOT?: ItemPedidoScalarWhereWithAggregatesInput | ItemPedidoScalarWhereWithAggregatesInput[]
    ItemPedidoId?: IntWithAggregatesFilter<"ItemPedido"> | number
    PedidoId?: StringWithAggregatesFilter<"ItemPedido"> | string
    ProdutoId?: StringWithAggregatesFilter<"ItemPedido"> | string
    ItemPedidoQuantidade?: IntWithAggregatesFilter<"ItemPedido"> | number
    ItemPedidoPrecoUnitario?: DecimalWithAggregatesFilter<"ItemPedido"> | Decimal | DecimalJsLike | number | string
    ItemPedidoValorTotal?: DecimalWithAggregatesFilter<"ItemPedido"> | Decimal | DecimalJsLike | number | string
    SubCategoriaId?: StringWithAggregatesFilter<"ItemPedido"> | string
    CategoriaId?: StringWithAggregatesFilter<"ItemPedido"> | string
  }

  export type MetadadosPedidoWhereInput = {
    AND?: MetadadosPedidoWhereInput | MetadadosPedidoWhereInput[]
    OR?: MetadadosPedidoWhereInput[]
    NOT?: MetadadosPedidoWhereInput | MetadadosPedidoWhereInput[]
    MetadadosPedidoId?: StringFilter<"MetadadosPedido"> | string
    PedidoId?: StringFilter<"MetadadosPedido"> | string
    MetadadosSource?: StringFilter<"MetadadosPedido"> | string
    MetadadosUserAgent?: StringFilter<"MetadadosPedido"> | string
    MetadadosIP?: StringFilter<"MetadadosPedido"> | string
    Pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
  }

  export type MetadadosPedidoOrderByWithRelationInput = {
    MetadadosPedidoId?: SortOrder
    PedidoId?: SortOrder
    MetadadosSource?: SortOrder
    MetadadosUserAgent?: SortOrder
    MetadadosIP?: SortOrder
    Pedido?: PedidoOrderByWithRelationInput
  }

  export type MetadadosPedidoWhereUniqueInput = Prisma.AtLeast<{
    MetadadosPedidoId?: string
    AND?: MetadadosPedidoWhereInput | MetadadosPedidoWhereInput[]
    OR?: MetadadosPedidoWhereInput[]
    NOT?: MetadadosPedidoWhereInput | MetadadosPedidoWhereInput[]
    PedidoId?: StringFilter<"MetadadosPedido"> | string
    MetadadosSource?: StringFilter<"MetadadosPedido"> | string
    MetadadosUserAgent?: StringFilter<"MetadadosPedido"> | string
    MetadadosIP?: StringFilter<"MetadadosPedido"> | string
    Pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
  }, "MetadadosPedidoId">

  export type MetadadosPedidoOrderByWithAggregationInput = {
    MetadadosPedidoId?: SortOrder
    PedidoId?: SortOrder
    MetadadosSource?: SortOrder
    MetadadosUserAgent?: SortOrder
    MetadadosIP?: SortOrder
    _count?: MetadadosPedidoCountOrderByAggregateInput
    _max?: MetadadosPedidoMaxOrderByAggregateInput
    _min?: MetadadosPedidoMinOrderByAggregateInput
  }

  export type MetadadosPedidoScalarWhereWithAggregatesInput = {
    AND?: MetadadosPedidoScalarWhereWithAggregatesInput | MetadadosPedidoScalarWhereWithAggregatesInput[]
    OR?: MetadadosPedidoScalarWhereWithAggregatesInput[]
    NOT?: MetadadosPedidoScalarWhereWithAggregatesInput | MetadadosPedidoScalarWhereWithAggregatesInput[]
    MetadadosPedidoId?: StringWithAggregatesFilter<"MetadadosPedido"> | string
    PedidoId?: StringWithAggregatesFilter<"MetadadosPedido"> | string
    MetadadosSource?: StringWithAggregatesFilter<"MetadadosPedido"> | string
    MetadadosUserAgent?: StringWithAggregatesFilter<"MetadadosPedido"> | string
    MetadadosIP?: StringWithAggregatesFilter<"MetadadosPedido"> | string
  }

  export type PagamentoPedidoWhereInput = {
    AND?: PagamentoPedidoWhereInput | PagamentoPedidoWhereInput[]
    OR?: PagamentoPedidoWhereInput[]
    NOT?: PagamentoPedidoWhereInput | PagamentoPedidoWhereInput[]
    PagamentoPedidoId?: StringFilter<"PagamentoPedido"> | string
    PedidoId?: StringFilter<"PagamentoPedido"> | string
    PagamentoMetodo?: StringFilter<"PagamentoPedido"> | string
    PagamentoStatus?: StringFilter<"PagamentoPedido"> | string
    PagamentoTransacao?: StringFilter<"PagamentoPedido"> | string
    Pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
  }

  export type PagamentoPedidoOrderByWithRelationInput = {
    PagamentoPedidoId?: SortOrder
    PedidoId?: SortOrder
    PagamentoMetodo?: SortOrder
    PagamentoStatus?: SortOrder
    PagamentoTransacao?: SortOrder
    Pedido?: PedidoOrderByWithRelationInput
  }

  export type PagamentoPedidoWhereUniqueInput = Prisma.AtLeast<{
    PagamentoPedidoId?: string
    AND?: PagamentoPedidoWhereInput | PagamentoPedidoWhereInput[]
    OR?: PagamentoPedidoWhereInput[]
    NOT?: PagamentoPedidoWhereInput | PagamentoPedidoWhereInput[]
    PedidoId?: StringFilter<"PagamentoPedido"> | string
    PagamentoMetodo?: StringFilter<"PagamentoPedido"> | string
    PagamentoStatus?: StringFilter<"PagamentoPedido"> | string
    PagamentoTransacao?: StringFilter<"PagamentoPedido"> | string
    Pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
  }, "PagamentoPedidoId">

  export type PagamentoPedidoOrderByWithAggregationInput = {
    PagamentoPedidoId?: SortOrder
    PedidoId?: SortOrder
    PagamentoMetodo?: SortOrder
    PagamentoStatus?: SortOrder
    PagamentoTransacao?: SortOrder
    _count?: PagamentoPedidoCountOrderByAggregateInput
    _max?: PagamentoPedidoMaxOrderByAggregateInput
    _min?: PagamentoPedidoMinOrderByAggregateInput
  }

  export type PagamentoPedidoScalarWhereWithAggregatesInput = {
    AND?: PagamentoPedidoScalarWhereWithAggregatesInput | PagamentoPedidoScalarWhereWithAggregatesInput[]
    OR?: PagamentoPedidoScalarWhereWithAggregatesInput[]
    NOT?: PagamentoPedidoScalarWhereWithAggregatesInput | PagamentoPedidoScalarWhereWithAggregatesInput[]
    PagamentoPedidoId?: StringWithAggregatesFilter<"PagamentoPedido"> | string
    PedidoId?: StringWithAggregatesFilter<"PagamentoPedido"> | string
    PagamentoMetodo?: StringWithAggregatesFilter<"PagamentoPedido"> | string
    PagamentoStatus?: StringWithAggregatesFilter<"PagamentoPedido"> | string
    PagamentoTransacao?: StringWithAggregatesFilter<"PagamentoPedido"> | string
  }

  export type CarregamentoPedidoWhereInput = {
    AND?: CarregamentoPedidoWhereInput | CarregamentoPedidoWhereInput[]
    OR?: CarregamentoPedidoWhereInput[]
    NOT?: CarregamentoPedidoWhereInput | CarregamentoPedidoWhereInput[]
    CarregamentoPedidoId?: StringFilter<"CarregamentoPedido"> | string
    PedidoId?: StringFilter<"CarregamentoPedido"> | string
    CarregamentoOperadora?: StringFilter<"CarregamentoPedido"> | string
    CarregamentoServico?: StringFilter<"CarregamentoPedido"> | string
    CarregamentoStatus?: StringFilter<"CarregamentoPedido"> | string
    CarregamentoCodigoRastreio?: StringFilter<"CarregamentoPedido"> | string
    Pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
  }

  export type CarregamentoPedidoOrderByWithRelationInput = {
    CarregamentoPedidoId?: SortOrder
    PedidoId?: SortOrder
    CarregamentoOperadora?: SortOrder
    CarregamentoServico?: SortOrder
    CarregamentoStatus?: SortOrder
    CarregamentoCodigoRastreio?: SortOrder
    Pedido?: PedidoOrderByWithRelationInput
  }

  export type CarregamentoPedidoWhereUniqueInput = Prisma.AtLeast<{
    CarregamentoPedidoId?: string
    AND?: CarregamentoPedidoWhereInput | CarregamentoPedidoWhereInput[]
    OR?: CarregamentoPedidoWhereInput[]
    NOT?: CarregamentoPedidoWhereInput | CarregamentoPedidoWhereInput[]
    PedidoId?: StringFilter<"CarregamentoPedido"> | string
    CarregamentoOperadora?: StringFilter<"CarregamentoPedido"> | string
    CarregamentoServico?: StringFilter<"CarregamentoPedido"> | string
    CarregamentoStatus?: StringFilter<"CarregamentoPedido"> | string
    CarregamentoCodigoRastreio?: StringFilter<"CarregamentoPedido"> | string
    Pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
  }, "CarregamentoPedidoId">

  export type CarregamentoPedidoOrderByWithAggregationInput = {
    CarregamentoPedidoId?: SortOrder
    PedidoId?: SortOrder
    CarregamentoOperadora?: SortOrder
    CarregamentoServico?: SortOrder
    CarregamentoStatus?: SortOrder
    CarregamentoCodigoRastreio?: SortOrder
    _count?: CarregamentoPedidoCountOrderByAggregateInput
    _max?: CarregamentoPedidoMaxOrderByAggregateInput
    _min?: CarregamentoPedidoMinOrderByAggregateInput
  }

  export type CarregamentoPedidoScalarWhereWithAggregatesInput = {
    AND?: CarregamentoPedidoScalarWhereWithAggregatesInput | CarregamentoPedidoScalarWhereWithAggregatesInput[]
    OR?: CarregamentoPedidoScalarWhereWithAggregatesInput[]
    NOT?: CarregamentoPedidoScalarWhereWithAggregatesInput | CarregamentoPedidoScalarWhereWithAggregatesInput[]
    CarregamentoPedidoId?: StringWithAggregatesFilter<"CarregamentoPedido"> | string
    PedidoId?: StringWithAggregatesFilter<"CarregamentoPedido"> | string
    CarregamentoOperadora?: StringWithAggregatesFilter<"CarregamentoPedido"> | string
    CarregamentoServico?: StringWithAggregatesFilter<"CarregamentoPedido"> | string
    CarregamentoStatus?: StringWithAggregatesFilter<"CarregamentoPedido"> | string
    CarregamentoCodigoRastreio?: StringWithAggregatesFilter<"CarregamentoPedido"> | string
  }

  export type ClienteCreateInput = {
    ClienteId: number
    ClienteNome: string
    ClienteEmail: string
    ClienteDocumento: string
    ClienteDtImportacao?: Date | string
    Pedido?: PedidoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    ClienteId: number
    ClienteNome: string
    ClienteEmail: string
    ClienteDocumento: string
    ClienteDtImportacao?: Date | string
    Pedido?: PedidoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    ClienteId?: IntFieldUpdateOperationsInput | number
    ClienteNome?: StringFieldUpdateOperationsInput | string
    ClienteEmail?: StringFieldUpdateOperationsInput | string
    ClienteDocumento?: StringFieldUpdateOperationsInput | string
    ClienteDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
    Pedido?: PedidoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    ClienteId?: IntFieldUpdateOperationsInput | number
    ClienteNome?: StringFieldUpdateOperationsInput | string
    ClienteEmail?: StringFieldUpdateOperationsInput | string
    ClienteDocumento?: StringFieldUpdateOperationsInput | string
    ClienteDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
    Pedido?: PedidoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    ClienteId: number
    ClienteNome: string
    ClienteEmail: string
    ClienteDocumento: string
    ClienteDtImportacao?: Date | string
  }

  export type ClienteUpdateManyMutationInput = {
    ClienteId?: IntFieldUpdateOperationsInput | number
    ClienteNome?: StringFieldUpdateOperationsInput | string
    ClienteEmail?: StringFieldUpdateOperationsInput | string
    ClienteDocumento?: StringFieldUpdateOperationsInput | string
    ClienteDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    ClienteId?: IntFieldUpdateOperationsInput | number
    ClienteNome?: StringFieldUpdateOperationsInput | string
    ClienteEmail?: StringFieldUpdateOperationsInput | string
    ClienteDocumento?: StringFieldUpdateOperationsInput | string
    ClienteDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendedorCreateInput = {
    VendedorId: number
    VendedorNome: string
    VendedorCidade: string
    VendedorUF: string
    VendedorDtImportacao?: Date | string
    Pedido?: PedidoCreateNestedManyWithoutVendedorInput
  }

  export type VendedorUncheckedCreateInput = {
    VendedorId: number
    VendedorNome: string
    VendedorCidade: string
    VendedorUF: string
    VendedorDtImportacao?: Date | string
    Pedido?: PedidoUncheckedCreateNestedManyWithoutVendedorInput
  }

  export type VendedorUpdateInput = {
    VendedorId?: IntFieldUpdateOperationsInput | number
    VendedorNome?: StringFieldUpdateOperationsInput | string
    VendedorCidade?: StringFieldUpdateOperationsInput | string
    VendedorUF?: StringFieldUpdateOperationsInput | string
    VendedorDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
    Pedido?: PedidoUpdateManyWithoutVendedorNestedInput
  }

  export type VendedorUncheckedUpdateInput = {
    VendedorId?: IntFieldUpdateOperationsInput | number
    VendedorNome?: StringFieldUpdateOperationsInput | string
    VendedorCidade?: StringFieldUpdateOperationsInput | string
    VendedorUF?: StringFieldUpdateOperationsInput | string
    VendedorDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
    Pedido?: PedidoUncheckedUpdateManyWithoutVendedorNestedInput
  }

  export type VendedorCreateManyInput = {
    VendedorId: number
    VendedorNome: string
    VendedorCidade: string
    VendedorUF: string
    VendedorDtImportacao?: Date | string
  }

  export type VendedorUpdateManyMutationInput = {
    VendedorId?: IntFieldUpdateOperationsInput | number
    VendedorNome?: StringFieldUpdateOperationsInput | string
    VendedorCidade?: StringFieldUpdateOperationsInput | string
    VendedorUF?: StringFieldUpdateOperationsInput | string
    VendedorDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendedorUncheckedUpdateManyInput = {
    VendedorId?: IntFieldUpdateOperationsInput | number
    VendedorNome?: StringFieldUpdateOperationsInput | string
    VendedorCidade?: StringFieldUpdateOperationsInput | string
    VendedorUF?: StringFieldUpdateOperationsInput | string
    VendedorDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaCreateInput = {
    CategoriaId: string
    CategoriaNome: string
    CategoriaDtImportacao?: Date | string
    SubCategoria?: SubCategoriaCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    CategoriaId: string
    CategoriaNome: string
    CategoriaDtImportacao?: Date | string
    SubCategoria?: SubCategoriaUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    CategoriaId?: StringFieldUpdateOperationsInput | string
    CategoriaNome?: StringFieldUpdateOperationsInput | string
    CategoriaDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
    SubCategoria?: SubCategoriaUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    CategoriaId?: StringFieldUpdateOperationsInput | string
    CategoriaNome?: StringFieldUpdateOperationsInput | string
    CategoriaDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
    SubCategoria?: SubCategoriaUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    CategoriaId: string
    CategoriaNome: string
    CategoriaDtImportacao?: Date | string
  }

  export type CategoriaUpdateManyMutationInput = {
    CategoriaId?: StringFieldUpdateOperationsInput | string
    CategoriaNome?: StringFieldUpdateOperationsInput | string
    CategoriaDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaUncheckedUpdateManyInput = {
    CategoriaId?: StringFieldUpdateOperationsInput | string
    CategoriaNome?: StringFieldUpdateOperationsInput | string
    CategoriaDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCategoriaCreateInput = {
    SubCategoriaId: string
    SubCategoriaNome: string
    SubCategoriaDtImportacao?: Date | string
    Categoria: CategoriaCreateNestedOneWithoutSubCategoriaInput
    ItemPedido?: ItemPedidoCreateNestedManyWithoutSubCategoriaInput
  }

  export type SubCategoriaUncheckedCreateInput = {
    SubCategoriaId: string
    CategoriaId: string
    SubCategoriaNome: string
    SubCategoriaDtImportacao?: Date | string
    ItemPedido?: ItemPedidoUncheckedCreateNestedManyWithoutSubCategoriaInput
  }

  export type SubCategoriaUpdateInput = {
    SubCategoriaId?: StringFieldUpdateOperationsInput | string
    SubCategoriaNome?: StringFieldUpdateOperationsInput | string
    SubCategoriaDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
    Categoria?: CategoriaUpdateOneRequiredWithoutSubCategoriaNestedInput
    ItemPedido?: ItemPedidoUpdateManyWithoutSubCategoriaNestedInput
  }

  export type SubCategoriaUncheckedUpdateInput = {
    SubCategoriaId?: StringFieldUpdateOperationsInput | string
    CategoriaId?: StringFieldUpdateOperationsInput | string
    SubCategoriaNome?: StringFieldUpdateOperationsInput | string
    SubCategoriaDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
    ItemPedido?: ItemPedidoUncheckedUpdateManyWithoutSubCategoriaNestedInput
  }

  export type SubCategoriaCreateManyInput = {
    SubCategoriaId: string
    CategoriaId: string
    SubCategoriaNome: string
    SubCategoriaDtImportacao?: Date | string
  }

  export type SubCategoriaUpdateManyMutationInput = {
    SubCategoriaId?: StringFieldUpdateOperationsInput | string
    SubCategoriaNome?: StringFieldUpdateOperationsInput | string
    SubCategoriaDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCategoriaUncheckedUpdateManyInput = {
    SubCategoriaId?: StringFieldUpdateOperationsInput | string
    CategoriaId?: StringFieldUpdateOperationsInput | string
    SubCategoriaNome?: StringFieldUpdateOperationsInput | string
    SubCategoriaDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProdutoCreateInput = {
    ProdutoId: string
    ProdutoNome: string
    ProdutoDtImportacao?: Date | string
    ItemPedido?: ItemPedidoCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateInput = {
    ProdutoId: string
    ProdutoNome: string
    ProdutoDtImportacao?: Date | string
    ItemPedido?: ItemPedidoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUpdateInput = {
    ProdutoId?: StringFieldUpdateOperationsInput | string
    ProdutoNome?: StringFieldUpdateOperationsInput | string
    ProdutoDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
    ItemPedido?: ItemPedidoUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateInput = {
    ProdutoId?: StringFieldUpdateOperationsInput | string
    ProdutoNome?: StringFieldUpdateOperationsInput | string
    ProdutoDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
    ItemPedido?: ItemPedidoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoCreateManyInput = {
    ProdutoId: string
    ProdutoNome: string
    ProdutoDtImportacao?: Date | string
  }

  export type ProdutoUpdateManyMutationInput = {
    ProdutoId?: StringFieldUpdateOperationsInput | string
    ProdutoNome?: StringFieldUpdateOperationsInput | string
    ProdutoDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProdutoUncheckedUpdateManyInput = {
    ProdutoId?: StringFieldUpdateOperationsInput | string
    ProdutoNome?: StringFieldUpdateOperationsInput | string
    ProdutoDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoCreateInput = {
    PedidoId: string
    PedidoDtCriacao: Date | string
    PedidoDtImportacao?: Date | string
    PedidoTipoCriacao: string
    PedidoStatus: string
    PedidoValorTotal: Decimal | DecimalJsLike | number | string
    Cliente: ClienteCreateNestedOneWithoutPedidoInput
    Vendedor: VendedorCreateNestedOneWithoutPedidoInput
    ItemPedido?: ItemPedidoCreateNestedManyWithoutPedidoInput
    MetadadosPedido?: MetadadosPedidoCreateNestedManyWithoutPedidoInput
    PagamentoPedido?: PagamentoPedidoCreateNestedManyWithoutPedidoInput
    CarregamentoPedido?: CarregamentoPedidoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateInput = {
    PedidoId: string
    PedidoDtCriacao: Date | string
    PedidoDtImportacao?: Date | string
    PedidoTipoCriacao: string
    PedidoStatus: string
    PedidoValorTotal: Decimal | DecimalJsLike | number | string
    ClienteId: number
    VendedorId: number
    ItemPedido?: ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput
    MetadadosPedido?: MetadadosPedidoUncheckedCreateNestedManyWithoutPedidoInput
    PagamentoPedido?: PagamentoPedidoUncheckedCreateNestedManyWithoutPedidoInput
    CarregamentoPedido?: CarregamentoPedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUpdateInput = {
    PedidoId?: StringFieldUpdateOperationsInput | string
    PedidoDtCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    PedidoDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
    PedidoTipoCriacao?: StringFieldUpdateOperationsInput | string
    PedidoStatus?: StringFieldUpdateOperationsInput | string
    PedidoValorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Cliente?: ClienteUpdateOneRequiredWithoutPedidoNestedInput
    Vendedor?: VendedorUpdateOneRequiredWithoutPedidoNestedInput
    ItemPedido?: ItemPedidoUpdateManyWithoutPedidoNestedInput
    MetadadosPedido?: MetadadosPedidoUpdateManyWithoutPedidoNestedInput
    PagamentoPedido?: PagamentoPedidoUpdateManyWithoutPedidoNestedInput
    CarregamentoPedido?: CarregamentoPedidoUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateInput = {
    PedidoId?: StringFieldUpdateOperationsInput | string
    PedidoDtCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    PedidoDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
    PedidoTipoCriacao?: StringFieldUpdateOperationsInput | string
    PedidoStatus?: StringFieldUpdateOperationsInput | string
    PedidoValorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ClienteId?: IntFieldUpdateOperationsInput | number
    VendedorId?: IntFieldUpdateOperationsInput | number
    ItemPedido?: ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput
    MetadadosPedido?: MetadadosPedidoUncheckedUpdateManyWithoutPedidoNestedInput
    PagamentoPedido?: PagamentoPedidoUncheckedUpdateManyWithoutPedidoNestedInput
    CarregamentoPedido?: CarregamentoPedidoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoCreateManyInput = {
    PedidoId: string
    PedidoDtCriacao: Date | string
    PedidoDtImportacao?: Date | string
    PedidoTipoCriacao: string
    PedidoStatus: string
    PedidoValorTotal: Decimal | DecimalJsLike | number | string
    ClienteId: number
    VendedorId: number
  }

  export type PedidoUpdateManyMutationInput = {
    PedidoId?: StringFieldUpdateOperationsInput | string
    PedidoDtCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    PedidoDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
    PedidoTipoCriacao?: StringFieldUpdateOperationsInput | string
    PedidoStatus?: StringFieldUpdateOperationsInput | string
    PedidoValorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PedidoUncheckedUpdateManyInput = {
    PedidoId?: StringFieldUpdateOperationsInput | string
    PedidoDtCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    PedidoDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
    PedidoTipoCriacao?: StringFieldUpdateOperationsInput | string
    PedidoStatus?: StringFieldUpdateOperationsInput | string
    PedidoValorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ClienteId?: IntFieldUpdateOperationsInput | number
    VendedorId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemPedidoCreateInput = {
    ItemPedidoId: number
    ItemPedidoQuantidade: number
    ItemPedidoPrecoUnitario: Decimal | DecimalJsLike | number | string
    ItemPedidoValorTotal: Decimal | DecimalJsLike | number | string
    Pedido: PedidoCreateNestedOneWithoutItemPedidoInput
    Produto: ProdutoCreateNestedOneWithoutItemPedidoInput
    SubCategoria: SubCategoriaCreateNestedOneWithoutItemPedidoInput
  }

  export type ItemPedidoUncheckedCreateInput = {
    ItemPedidoId: number
    PedidoId: string
    ProdutoId: string
    ItemPedidoQuantidade: number
    ItemPedidoPrecoUnitario: Decimal | DecimalJsLike | number | string
    ItemPedidoValorTotal: Decimal | DecimalJsLike | number | string
    SubCategoriaId: string
    CategoriaId: string
  }

  export type ItemPedidoUpdateInput = {
    ItemPedidoId?: IntFieldUpdateOperationsInput | number
    ItemPedidoQuantidade?: IntFieldUpdateOperationsInput | number
    ItemPedidoPrecoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ItemPedidoValorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Pedido?: PedidoUpdateOneRequiredWithoutItemPedidoNestedInput
    Produto?: ProdutoUpdateOneRequiredWithoutItemPedidoNestedInput
    SubCategoria?: SubCategoriaUpdateOneRequiredWithoutItemPedidoNestedInput
  }

  export type ItemPedidoUncheckedUpdateInput = {
    ItemPedidoId?: IntFieldUpdateOperationsInput | number
    PedidoId?: StringFieldUpdateOperationsInput | string
    ProdutoId?: StringFieldUpdateOperationsInput | string
    ItemPedidoQuantidade?: IntFieldUpdateOperationsInput | number
    ItemPedidoPrecoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ItemPedidoValorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    SubCategoriaId?: StringFieldUpdateOperationsInput | string
    CategoriaId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemPedidoCreateManyInput = {
    ItemPedidoId: number
    PedidoId: string
    ProdutoId: string
    ItemPedidoQuantidade: number
    ItemPedidoPrecoUnitario: Decimal | DecimalJsLike | number | string
    ItemPedidoValorTotal: Decimal | DecimalJsLike | number | string
    SubCategoriaId: string
    CategoriaId: string
  }

  export type ItemPedidoUpdateManyMutationInput = {
    ItemPedidoId?: IntFieldUpdateOperationsInput | number
    ItemPedidoQuantidade?: IntFieldUpdateOperationsInput | number
    ItemPedidoPrecoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ItemPedidoValorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ItemPedidoUncheckedUpdateManyInput = {
    ItemPedidoId?: IntFieldUpdateOperationsInput | number
    PedidoId?: StringFieldUpdateOperationsInput | string
    ProdutoId?: StringFieldUpdateOperationsInput | string
    ItemPedidoQuantidade?: IntFieldUpdateOperationsInput | number
    ItemPedidoPrecoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ItemPedidoValorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    SubCategoriaId?: StringFieldUpdateOperationsInput | string
    CategoriaId?: StringFieldUpdateOperationsInput | string
  }

  export type MetadadosPedidoCreateInput = {
    MetadadosPedidoId?: string
    MetadadosSource: string
    MetadadosUserAgent: string
    MetadadosIP: string
    Pedido: PedidoCreateNestedOneWithoutMetadadosPedidoInput
  }

  export type MetadadosPedidoUncheckedCreateInput = {
    MetadadosPedidoId?: string
    PedidoId: string
    MetadadosSource: string
    MetadadosUserAgent: string
    MetadadosIP: string
  }

  export type MetadadosPedidoUpdateInput = {
    MetadadosPedidoId?: StringFieldUpdateOperationsInput | string
    MetadadosSource?: StringFieldUpdateOperationsInput | string
    MetadadosUserAgent?: StringFieldUpdateOperationsInput | string
    MetadadosIP?: StringFieldUpdateOperationsInput | string
    Pedido?: PedidoUpdateOneRequiredWithoutMetadadosPedidoNestedInput
  }

  export type MetadadosPedidoUncheckedUpdateInput = {
    MetadadosPedidoId?: StringFieldUpdateOperationsInput | string
    PedidoId?: StringFieldUpdateOperationsInput | string
    MetadadosSource?: StringFieldUpdateOperationsInput | string
    MetadadosUserAgent?: StringFieldUpdateOperationsInput | string
    MetadadosIP?: StringFieldUpdateOperationsInput | string
  }

  export type MetadadosPedidoCreateManyInput = {
    MetadadosPedidoId?: string
    PedidoId: string
    MetadadosSource: string
    MetadadosUserAgent: string
    MetadadosIP: string
  }

  export type MetadadosPedidoUpdateManyMutationInput = {
    MetadadosPedidoId?: StringFieldUpdateOperationsInput | string
    MetadadosSource?: StringFieldUpdateOperationsInput | string
    MetadadosUserAgent?: StringFieldUpdateOperationsInput | string
    MetadadosIP?: StringFieldUpdateOperationsInput | string
  }

  export type MetadadosPedidoUncheckedUpdateManyInput = {
    MetadadosPedidoId?: StringFieldUpdateOperationsInput | string
    PedidoId?: StringFieldUpdateOperationsInput | string
    MetadadosSource?: StringFieldUpdateOperationsInput | string
    MetadadosUserAgent?: StringFieldUpdateOperationsInput | string
    MetadadosIP?: StringFieldUpdateOperationsInput | string
  }

  export type PagamentoPedidoCreateInput = {
    PagamentoPedidoId?: string
    PagamentoMetodo: string
    PagamentoStatus: string
    PagamentoTransacao: string
    Pedido: PedidoCreateNestedOneWithoutPagamentoPedidoInput
  }

  export type PagamentoPedidoUncheckedCreateInput = {
    PagamentoPedidoId?: string
    PedidoId: string
    PagamentoMetodo: string
    PagamentoStatus: string
    PagamentoTransacao: string
  }

  export type PagamentoPedidoUpdateInput = {
    PagamentoPedidoId?: StringFieldUpdateOperationsInput | string
    PagamentoMetodo?: StringFieldUpdateOperationsInput | string
    PagamentoStatus?: StringFieldUpdateOperationsInput | string
    PagamentoTransacao?: StringFieldUpdateOperationsInput | string
    Pedido?: PedidoUpdateOneRequiredWithoutPagamentoPedidoNestedInput
  }

  export type PagamentoPedidoUncheckedUpdateInput = {
    PagamentoPedidoId?: StringFieldUpdateOperationsInput | string
    PedidoId?: StringFieldUpdateOperationsInput | string
    PagamentoMetodo?: StringFieldUpdateOperationsInput | string
    PagamentoStatus?: StringFieldUpdateOperationsInput | string
    PagamentoTransacao?: StringFieldUpdateOperationsInput | string
  }

  export type PagamentoPedidoCreateManyInput = {
    PagamentoPedidoId?: string
    PedidoId: string
    PagamentoMetodo: string
    PagamentoStatus: string
    PagamentoTransacao: string
  }

  export type PagamentoPedidoUpdateManyMutationInput = {
    PagamentoPedidoId?: StringFieldUpdateOperationsInput | string
    PagamentoMetodo?: StringFieldUpdateOperationsInput | string
    PagamentoStatus?: StringFieldUpdateOperationsInput | string
    PagamentoTransacao?: StringFieldUpdateOperationsInput | string
  }

  export type PagamentoPedidoUncheckedUpdateManyInput = {
    PagamentoPedidoId?: StringFieldUpdateOperationsInput | string
    PedidoId?: StringFieldUpdateOperationsInput | string
    PagamentoMetodo?: StringFieldUpdateOperationsInput | string
    PagamentoStatus?: StringFieldUpdateOperationsInput | string
    PagamentoTransacao?: StringFieldUpdateOperationsInput | string
  }

  export type CarregamentoPedidoCreateInput = {
    CarregamentoPedidoId?: string
    CarregamentoOperadora: string
    CarregamentoServico: string
    CarregamentoStatus: string
    CarregamentoCodigoRastreio: string
    Pedido: PedidoCreateNestedOneWithoutCarregamentoPedidoInput
  }

  export type CarregamentoPedidoUncheckedCreateInput = {
    CarregamentoPedidoId?: string
    PedidoId: string
    CarregamentoOperadora: string
    CarregamentoServico: string
    CarregamentoStatus: string
    CarregamentoCodigoRastreio: string
  }

  export type CarregamentoPedidoUpdateInput = {
    CarregamentoPedidoId?: StringFieldUpdateOperationsInput | string
    CarregamentoOperadora?: StringFieldUpdateOperationsInput | string
    CarregamentoServico?: StringFieldUpdateOperationsInput | string
    CarregamentoStatus?: StringFieldUpdateOperationsInput | string
    CarregamentoCodigoRastreio?: StringFieldUpdateOperationsInput | string
    Pedido?: PedidoUpdateOneRequiredWithoutCarregamentoPedidoNestedInput
  }

  export type CarregamentoPedidoUncheckedUpdateInput = {
    CarregamentoPedidoId?: StringFieldUpdateOperationsInput | string
    PedidoId?: StringFieldUpdateOperationsInput | string
    CarregamentoOperadora?: StringFieldUpdateOperationsInput | string
    CarregamentoServico?: StringFieldUpdateOperationsInput | string
    CarregamentoStatus?: StringFieldUpdateOperationsInput | string
    CarregamentoCodigoRastreio?: StringFieldUpdateOperationsInput | string
  }

  export type CarregamentoPedidoCreateManyInput = {
    CarregamentoPedidoId?: string
    PedidoId: string
    CarregamentoOperadora: string
    CarregamentoServico: string
    CarregamentoStatus: string
    CarregamentoCodigoRastreio: string
  }

  export type CarregamentoPedidoUpdateManyMutationInput = {
    CarregamentoPedidoId?: StringFieldUpdateOperationsInput | string
    CarregamentoOperadora?: StringFieldUpdateOperationsInput | string
    CarregamentoServico?: StringFieldUpdateOperationsInput | string
    CarregamentoStatus?: StringFieldUpdateOperationsInput | string
    CarregamentoCodigoRastreio?: StringFieldUpdateOperationsInput | string
  }

  export type CarregamentoPedidoUncheckedUpdateManyInput = {
    CarregamentoPedidoId?: StringFieldUpdateOperationsInput | string
    PedidoId?: StringFieldUpdateOperationsInput | string
    CarregamentoOperadora?: StringFieldUpdateOperationsInput | string
    CarregamentoServico?: StringFieldUpdateOperationsInput | string
    CarregamentoStatus?: StringFieldUpdateOperationsInput | string
    CarregamentoCodigoRastreio?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PedidoListRelationFilter = {
    every?: PedidoWhereInput
    some?: PedidoWhereInput
    none?: PedidoWhereInput
  }

  export type PedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    ClienteId?: SortOrder
    ClienteNome?: SortOrder
    ClienteEmail?: SortOrder
    ClienteDocumento?: SortOrder
    ClienteDtImportacao?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    ClienteId?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    ClienteId?: SortOrder
    ClienteNome?: SortOrder
    ClienteEmail?: SortOrder
    ClienteDocumento?: SortOrder
    ClienteDtImportacao?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    ClienteId?: SortOrder
    ClienteNome?: SortOrder
    ClienteEmail?: SortOrder
    ClienteDocumento?: SortOrder
    ClienteDtImportacao?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    ClienteId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type VendedorCountOrderByAggregateInput = {
    VendedorId?: SortOrder
    VendedorNome?: SortOrder
    VendedorCidade?: SortOrder
    VendedorUF?: SortOrder
    VendedorDtImportacao?: SortOrder
  }

  export type VendedorAvgOrderByAggregateInput = {
    VendedorId?: SortOrder
  }

  export type VendedorMaxOrderByAggregateInput = {
    VendedorId?: SortOrder
    VendedorNome?: SortOrder
    VendedorCidade?: SortOrder
    VendedorUF?: SortOrder
    VendedorDtImportacao?: SortOrder
  }

  export type VendedorMinOrderByAggregateInput = {
    VendedorId?: SortOrder
    VendedorNome?: SortOrder
    VendedorCidade?: SortOrder
    VendedorUF?: SortOrder
    VendedorDtImportacao?: SortOrder
  }

  export type VendedorSumOrderByAggregateInput = {
    VendedorId?: SortOrder
  }

  export type SubCategoriaListRelationFilter = {
    every?: SubCategoriaWhereInput
    some?: SubCategoriaWhereInput
    none?: SubCategoriaWhereInput
  }

  export type SubCategoriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriaCountOrderByAggregateInput = {
    CategoriaId?: SortOrder
    CategoriaNome?: SortOrder
    CategoriaDtImportacao?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    CategoriaId?: SortOrder
    CategoriaNome?: SortOrder
    CategoriaDtImportacao?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    CategoriaId?: SortOrder
    CategoriaNome?: SortOrder
    CategoriaDtImportacao?: SortOrder
  }

  export type CategoriaScalarRelationFilter = {
    is?: CategoriaWhereInput
    isNot?: CategoriaWhereInput
  }

  export type ItemPedidoListRelationFilter = {
    every?: ItemPedidoWhereInput
    some?: ItemPedidoWhereInput
    none?: ItemPedidoWhereInput
  }

  export type ItemPedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubCategoriaSubCategoriaIdCategoriaIdCompoundUniqueInput = {
    SubCategoriaId: string
    CategoriaId: string
  }

  export type SubCategoriaCountOrderByAggregateInput = {
    SubCategoriaId?: SortOrder
    CategoriaId?: SortOrder
    SubCategoriaNome?: SortOrder
    SubCategoriaDtImportacao?: SortOrder
  }

  export type SubCategoriaMaxOrderByAggregateInput = {
    SubCategoriaId?: SortOrder
    CategoriaId?: SortOrder
    SubCategoriaNome?: SortOrder
    SubCategoriaDtImportacao?: SortOrder
  }

  export type SubCategoriaMinOrderByAggregateInput = {
    SubCategoriaId?: SortOrder
    CategoriaId?: SortOrder
    SubCategoriaNome?: SortOrder
    SubCategoriaDtImportacao?: SortOrder
  }

  export type ProdutoCountOrderByAggregateInput = {
    ProdutoId?: SortOrder
    ProdutoNome?: SortOrder
    ProdutoDtImportacao?: SortOrder
  }

  export type ProdutoMaxOrderByAggregateInput = {
    ProdutoId?: SortOrder
    ProdutoNome?: SortOrder
    ProdutoDtImportacao?: SortOrder
  }

  export type ProdutoMinOrderByAggregateInput = {
    ProdutoId?: SortOrder
    ProdutoNome?: SortOrder
    ProdutoDtImportacao?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type VendedorScalarRelationFilter = {
    is?: VendedorWhereInput
    isNot?: VendedorWhereInput
  }

  export type MetadadosPedidoListRelationFilter = {
    every?: MetadadosPedidoWhereInput
    some?: MetadadosPedidoWhereInput
    none?: MetadadosPedidoWhereInput
  }

  export type PagamentoPedidoListRelationFilter = {
    every?: PagamentoPedidoWhereInput
    some?: PagamentoPedidoWhereInput
    none?: PagamentoPedidoWhereInput
  }

  export type CarregamentoPedidoListRelationFilter = {
    every?: CarregamentoPedidoWhereInput
    some?: CarregamentoPedidoWhereInput
    none?: CarregamentoPedidoWhereInput
  }

  export type MetadadosPedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PagamentoPedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarregamentoPedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PedidoCountOrderByAggregateInput = {
    PedidoId?: SortOrder
    PedidoDtCriacao?: SortOrder
    PedidoDtImportacao?: SortOrder
    PedidoTipoCriacao?: SortOrder
    PedidoStatus?: SortOrder
    PedidoValorTotal?: SortOrder
    ClienteId?: SortOrder
    VendedorId?: SortOrder
  }

  export type PedidoAvgOrderByAggregateInput = {
    PedidoValorTotal?: SortOrder
    ClienteId?: SortOrder
    VendedorId?: SortOrder
  }

  export type PedidoMaxOrderByAggregateInput = {
    PedidoId?: SortOrder
    PedidoDtCriacao?: SortOrder
    PedidoDtImportacao?: SortOrder
    PedidoTipoCriacao?: SortOrder
    PedidoStatus?: SortOrder
    PedidoValorTotal?: SortOrder
    ClienteId?: SortOrder
    VendedorId?: SortOrder
  }

  export type PedidoMinOrderByAggregateInput = {
    PedidoId?: SortOrder
    PedidoDtCriacao?: SortOrder
    PedidoDtImportacao?: SortOrder
    PedidoTipoCriacao?: SortOrder
    PedidoStatus?: SortOrder
    PedidoValorTotal?: SortOrder
    ClienteId?: SortOrder
    VendedorId?: SortOrder
  }

  export type PedidoSumOrderByAggregateInput = {
    PedidoValorTotal?: SortOrder
    ClienteId?: SortOrder
    VendedorId?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type PedidoScalarRelationFilter = {
    is?: PedidoWhereInput
    isNot?: PedidoWhereInput
  }

  export type ProdutoScalarRelationFilter = {
    is?: ProdutoWhereInput
    isNot?: ProdutoWhereInput
  }

  export type SubCategoriaScalarRelationFilter = {
    is?: SubCategoriaWhereInput
    isNot?: SubCategoriaWhereInput
  }

  export type ItemPedidoItemPedidoIdPedidoIdCompoundUniqueInput = {
    ItemPedidoId: number
    PedidoId: string
  }

  export type ItemPedidoCountOrderByAggregateInput = {
    ItemPedidoId?: SortOrder
    PedidoId?: SortOrder
    ProdutoId?: SortOrder
    ItemPedidoQuantidade?: SortOrder
    ItemPedidoPrecoUnitario?: SortOrder
    ItemPedidoValorTotal?: SortOrder
    SubCategoriaId?: SortOrder
    CategoriaId?: SortOrder
  }

  export type ItemPedidoAvgOrderByAggregateInput = {
    ItemPedidoId?: SortOrder
    ItemPedidoQuantidade?: SortOrder
    ItemPedidoPrecoUnitario?: SortOrder
    ItemPedidoValorTotal?: SortOrder
  }

  export type ItemPedidoMaxOrderByAggregateInput = {
    ItemPedidoId?: SortOrder
    PedidoId?: SortOrder
    ProdutoId?: SortOrder
    ItemPedidoQuantidade?: SortOrder
    ItemPedidoPrecoUnitario?: SortOrder
    ItemPedidoValorTotal?: SortOrder
    SubCategoriaId?: SortOrder
    CategoriaId?: SortOrder
  }

  export type ItemPedidoMinOrderByAggregateInput = {
    ItemPedidoId?: SortOrder
    PedidoId?: SortOrder
    ProdutoId?: SortOrder
    ItemPedidoQuantidade?: SortOrder
    ItemPedidoPrecoUnitario?: SortOrder
    ItemPedidoValorTotal?: SortOrder
    SubCategoriaId?: SortOrder
    CategoriaId?: SortOrder
  }

  export type ItemPedidoSumOrderByAggregateInput = {
    ItemPedidoId?: SortOrder
    ItemPedidoQuantidade?: SortOrder
    ItemPedidoPrecoUnitario?: SortOrder
    ItemPedidoValorTotal?: SortOrder
  }

  export type MetadadosPedidoCountOrderByAggregateInput = {
    MetadadosPedidoId?: SortOrder
    PedidoId?: SortOrder
    MetadadosSource?: SortOrder
    MetadadosUserAgent?: SortOrder
    MetadadosIP?: SortOrder
  }

  export type MetadadosPedidoMaxOrderByAggregateInput = {
    MetadadosPedidoId?: SortOrder
    PedidoId?: SortOrder
    MetadadosSource?: SortOrder
    MetadadosUserAgent?: SortOrder
    MetadadosIP?: SortOrder
  }

  export type MetadadosPedidoMinOrderByAggregateInput = {
    MetadadosPedidoId?: SortOrder
    PedidoId?: SortOrder
    MetadadosSource?: SortOrder
    MetadadosUserAgent?: SortOrder
    MetadadosIP?: SortOrder
  }

  export type PagamentoPedidoCountOrderByAggregateInput = {
    PagamentoPedidoId?: SortOrder
    PedidoId?: SortOrder
    PagamentoMetodo?: SortOrder
    PagamentoStatus?: SortOrder
    PagamentoTransacao?: SortOrder
  }

  export type PagamentoPedidoMaxOrderByAggregateInput = {
    PagamentoPedidoId?: SortOrder
    PedidoId?: SortOrder
    PagamentoMetodo?: SortOrder
    PagamentoStatus?: SortOrder
    PagamentoTransacao?: SortOrder
  }

  export type PagamentoPedidoMinOrderByAggregateInput = {
    PagamentoPedidoId?: SortOrder
    PedidoId?: SortOrder
    PagamentoMetodo?: SortOrder
    PagamentoStatus?: SortOrder
    PagamentoTransacao?: SortOrder
  }

  export type CarregamentoPedidoCountOrderByAggregateInput = {
    CarregamentoPedidoId?: SortOrder
    PedidoId?: SortOrder
    CarregamentoOperadora?: SortOrder
    CarregamentoServico?: SortOrder
    CarregamentoStatus?: SortOrder
    CarregamentoCodigoRastreio?: SortOrder
  }

  export type CarregamentoPedidoMaxOrderByAggregateInput = {
    CarregamentoPedidoId?: SortOrder
    PedidoId?: SortOrder
    CarregamentoOperadora?: SortOrder
    CarregamentoServico?: SortOrder
    CarregamentoStatus?: SortOrder
    CarregamentoCodigoRastreio?: SortOrder
  }

  export type CarregamentoPedidoMinOrderByAggregateInput = {
    CarregamentoPedidoId?: SortOrder
    PedidoId?: SortOrder
    CarregamentoOperadora?: SortOrder
    CarregamentoServico?: SortOrder
    CarregamentoStatus?: SortOrder
    CarregamentoCodigoRastreio?: SortOrder
  }

  export type PedidoCreateNestedManyWithoutClienteInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PedidoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutClienteInput | PedidoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutClienteInput | PedidoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutClienteInput | PedidoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type PedidoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutClienteInput | PedidoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutClienteInput | PedidoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutClienteInput | PedidoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type PedidoCreateNestedManyWithoutVendedorInput = {
    create?: XOR<PedidoCreateWithoutVendedorInput, PedidoUncheckedCreateWithoutVendedorInput> | PedidoCreateWithoutVendedorInput[] | PedidoUncheckedCreateWithoutVendedorInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutVendedorInput | PedidoCreateOrConnectWithoutVendedorInput[]
    createMany?: PedidoCreateManyVendedorInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutVendedorInput = {
    create?: XOR<PedidoCreateWithoutVendedorInput, PedidoUncheckedCreateWithoutVendedorInput> | PedidoCreateWithoutVendedorInput[] | PedidoUncheckedCreateWithoutVendedorInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutVendedorInput | PedidoCreateOrConnectWithoutVendedorInput[]
    createMany?: PedidoCreateManyVendedorInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type PedidoUpdateManyWithoutVendedorNestedInput = {
    create?: XOR<PedidoCreateWithoutVendedorInput, PedidoUncheckedCreateWithoutVendedorInput> | PedidoCreateWithoutVendedorInput[] | PedidoUncheckedCreateWithoutVendedorInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutVendedorInput | PedidoCreateOrConnectWithoutVendedorInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutVendedorInput | PedidoUpsertWithWhereUniqueWithoutVendedorInput[]
    createMany?: PedidoCreateManyVendedorInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutVendedorInput | PedidoUpdateWithWhereUniqueWithoutVendedorInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutVendedorInput | PedidoUpdateManyWithWhereWithoutVendedorInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type PedidoUncheckedUpdateManyWithoutVendedorNestedInput = {
    create?: XOR<PedidoCreateWithoutVendedorInput, PedidoUncheckedCreateWithoutVendedorInput> | PedidoCreateWithoutVendedorInput[] | PedidoUncheckedCreateWithoutVendedorInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutVendedorInput | PedidoCreateOrConnectWithoutVendedorInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutVendedorInput | PedidoUpsertWithWhereUniqueWithoutVendedorInput[]
    createMany?: PedidoCreateManyVendedorInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutVendedorInput | PedidoUpdateWithWhereUniqueWithoutVendedorInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutVendedorInput | PedidoUpdateManyWithWhereWithoutVendedorInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type SubCategoriaCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<SubCategoriaCreateWithoutCategoriaInput, SubCategoriaUncheckedCreateWithoutCategoriaInput> | SubCategoriaCreateWithoutCategoriaInput[] | SubCategoriaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: SubCategoriaCreateOrConnectWithoutCategoriaInput | SubCategoriaCreateOrConnectWithoutCategoriaInput[]
    createMany?: SubCategoriaCreateManyCategoriaInputEnvelope
    connect?: SubCategoriaWhereUniqueInput | SubCategoriaWhereUniqueInput[]
  }

  export type SubCategoriaUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<SubCategoriaCreateWithoutCategoriaInput, SubCategoriaUncheckedCreateWithoutCategoriaInput> | SubCategoriaCreateWithoutCategoriaInput[] | SubCategoriaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: SubCategoriaCreateOrConnectWithoutCategoriaInput | SubCategoriaCreateOrConnectWithoutCategoriaInput[]
    createMany?: SubCategoriaCreateManyCategoriaInputEnvelope
    connect?: SubCategoriaWhereUniqueInput | SubCategoriaWhereUniqueInput[]
  }

  export type SubCategoriaUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<SubCategoriaCreateWithoutCategoriaInput, SubCategoriaUncheckedCreateWithoutCategoriaInput> | SubCategoriaCreateWithoutCategoriaInput[] | SubCategoriaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: SubCategoriaCreateOrConnectWithoutCategoriaInput | SubCategoriaCreateOrConnectWithoutCategoriaInput[]
    upsert?: SubCategoriaUpsertWithWhereUniqueWithoutCategoriaInput | SubCategoriaUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: SubCategoriaCreateManyCategoriaInputEnvelope
    set?: SubCategoriaWhereUniqueInput | SubCategoriaWhereUniqueInput[]
    disconnect?: SubCategoriaWhereUniqueInput | SubCategoriaWhereUniqueInput[]
    delete?: SubCategoriaWhereUniqueInput | SubCategoriaWhereUniqueInput[]
    connect?: SubCategoriaWhereUniqueInput | SubCategoriaWhereUniqueInput[]
    update?: SubCategoriaUpdateWithWhereUniqueWithoutCategoriaInput | SubCategoriaUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: SubCategoriaUpdateManyWithWhereWithoutCategoriaInput | SubCategoriaUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: SubCategoriaScalarWhereInput | SubCategoriaScalarWhereInput[]
  }

  export type SubCategoriaUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<SubCategoriaCreateWithoutCategoriaInput, SubCategoriaUncheckedCreateWithoutCategoriaInput> | SubCategoriaCreateWithoutCategoriaInput[] | SubCategoriaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: SubCategoriaCreateOrConnectWithoutCategoriaInput | SubCategoriaCreateOrConnectWithoutCategoriaInput[]
    upsert?: SubCategoriaUpsertWithWhereUniqueWithoutCategoriaInput | SubCategoriaUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: SubCategoriaCreateManyCategoriaInputEnvelope
    set?: SubCategoriaWhereUniqueInput | SubCategoriaWhereUniqueInput[]
    disconnect?: SubCategoriaWhereUniqueInput | SubCategoriaWhereUniqueInput[]
    delete?: SubCategoriaWhereUniqueInput | SubCategoriaWhereUniqueInput[]
    connect?: SubCategoriaWhereUniqueInput | SubCategoriaWhereUniqueInput[]
    update?: SubCategoriaUpdateWithWhereUniqueWithoutCategoriaInput | SubCategoriaUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: SubCategoriaUpdateManyWithWhereWithoutCategoriaInput | SubCategoriaUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: SubCategoriaScalarWhereInput | SubCategoriaScalarWhereInput[]
  }

  export type CategoriaCreateNestedOneWithoutSubCategoriaInput = {
    create?: XOR<CategoriaCreateWithoutSubCategoriaInput, CategoriaUncheckedCreateWithoutSubCategoriaInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutSubCategoriaInput
    connect?: CategoriaWhereUniqueInput
  }

  export type ItemPedidoCreateNestedManyWithoutSubCategoriaInput = {
    create?: XOR<ItemPedidoCreateWithoutSubCategoriaInput, ItemPedidoUncheckedCreateWithoutSubCategoriaInput> | ItemPedidoCreateWithoutSubCategoriaInput[] | ItemPedidoUncheckedCreateWithoutSubCategoriaInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutSubCategoriaInput | ItemPedidoCreateOrConnectWithoutSubCategoriaInput[]
    createMany?: ItemPedidoCreateManySubCategoriaInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type ItemPedidoUncheckedCreateNestedManyWithoutSubCategoriaInput = {
    create?: XOR<ItemPedidoCreateWithoutSubCategoriaInput, ItemPedidoUncheckedCreateWithoutSubCategoriaInput> | ItemPedidoCreateWithoutSubCategoriaInput[] | ItemPedidoUncheckedCreateWithoutSubCategoriaInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutSubCategoriaInput | ItemPedidoCreateOrConnectWithoutSubCategoriaInput[]
    createMany?: ItemPedidoCreateManySubCategoriaInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type CategoriaUpdateOneRequiredWithoutSubCategoriaNestedInput = {
    create?: XOR<CategoriaCreateWithoutSubCategoriaInput, CategoriaUncheckedCreateWithoutSubCategoriaInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutSubCategoriaInput
    upsert?: CategoriaUpsertWithoutSubCategoriaInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutSubCategoriaInput, CategoriaUpdateWithoutSubCategoriaInput>, CategoriaUncheckedUpdateWithoutSubCategoriaInput>
  }

  export type ItemPedidoUpdateManyWithoutSubCategoriaNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutSubCategoriaInput, ItemPedidoUncheckedCreateWithoutSubCategoriaInput> | ItemPedidoCreateWithoutSubCategoriaInput[] | ItemPedidoUncheckedCreateWithoutSubCategoriaInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutSubCategoriaInput | ItemPedidoCreateOrConnectWithoutSubCategoriaInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutSubCategoriaInput | ItemPedidoUpsertWithWhereUniqueWithoutSubCategoriaInput[]
    createMany?: ItemPedidoCreateManySubCategoriaInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutSubCategoriaInput | ItemPedidoUpdateWithWhereUniqueWithoutSubCategoriaInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutSubCategoriaInput | ItemPedidoUpdateManyWithWhereWithoutSubCategoriaInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type ItemPedidoUncheckedUpdateManyWithoutSubCategoriaNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutSubCategoriaInput, ItemPedidoUncheckedCreateWithoutSubCategoriaInput> | ItemPedidoCreateWithoutSubCategoriaInput[] | ItemPedidoUncheckedCreateWithoutSubCategoriaInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutSubCategoriaInput | ItemPedidoCreateOrConnectWithoutSubCategoriaInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutSubCategoriaInput | ItemPedidoUpsertWithWhereUniqueWithoutSubCategoriaInput[]
    createMany?: ItemPedidoCreateManySubCategoriaInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutSubCategoriaInput | ItemPedidoUpdateWithWhereUniqueWithoutSubCategoriaInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutSubCategoriaInput | ItemPedidoUpdateManyWithWhereWithoutSubCategoriaInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type ItemPedidoCreateNestedManyWithoutProdutoInput = {
    create?: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput> | ItemPedidoCreateWithoutProdutoInput[] | ItemPedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutProdutoInput | ItemPedidoCreateOrConnectWithoutProdutoInput[]
    createMany?: ItemPedidoCreateManyProdutoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type ItemPedidoUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput> | ItemPedidoCreateWithoutProdutoInput[] | ItemPedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutProdutoInput | ItemPedidoCreateOrConnectWithoutProdutoInput[]
    createMany?: ItemPedidoCreateManyProdutoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type ItemPedidoUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput> | ItemPedidoCreateWithoutProdutoInput[] | ItemPedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutProdutoInput | ItemPedidoCreateOrConnectWithoutProdutoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutProdutoInput | ItemPedidoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: ItemPedidoCreateManyProdutoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutProdutoInput | ItemPedidoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutProdutoInput | ItemPedidoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type ItemPedidoUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput> | ItemPedidoCreateWithoutProdutoInput[] | ItemPedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutProdutoInput | ItemPedidoCreateOrConnectWithoutProdutoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutProdutoInput | ItemPedidoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: ItemPedidoCreateManyProdutoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutProdutoInput | ItemPedidoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutProdutoInput | ItemPedidoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutPedidoInput = {
    create?: XOR<ClienteCreateWithoutPedidoInput, ClienteUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPedidoInput
    connect?: ClienteWhereUniqueInput
  }

  export type VendedorCreateNestedOneWithoutPedidoInput = {
    create?: XOR<VendedorCreateWithoutPedidoInput, VendedorUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: VendedorCreateOrConnectWithoutPedidoInput
    connect?: VendedorWhereUniqueInput
  }

  export type ItemPedidoCreateNestedManyWithoutPedidoInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type MetadadosPedidoCreateNestedManyWithoutPedidoInput = {
    create?: XOR<MetadadosPedidoCreateWithoutPedidoInput, MetadadosPedidoUncheckedCreateWithoutPedidoInput> | MetadadosPedidoCreateWithoutPedidoInput[] | MetadadosPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: MetadadosPedidoCreateOrConnectWithoutPedidoInput | MetadadosPedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: MetadadosPedidoCreateManyPedidoInputEnvelope
    connect?: MetadadosPedidoWhereUniqueInput | MetadadosPedidoWhereUniqueInput[]
  }

  export type PagamentoPedidoCreateNestedManyWithoutPedidoInput = {
    create?: XOR<PagamentoPedidoCreateWithoutPedidoInput, PagamentoPedidoUncheckedCreateWithoutPedidoInput> | PagamentoPedidoCreateWithoutPedidoInput[] | PagamentoPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PagamentoPedidoCreateOrConnectWithoutPedidoInput | PagamentoPedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: PagamentoPedidoCreateManyPedidoInputEnvelope
    connect?: PagamentoPedidoWhereUniqueInput | PagamentoPedidoWhereUniqueInput[]
  }

  export type CarregamentoPedidoCreateNestedManyWithoutPedidoInput = {
    create?: XOR<CarregamentoPedidoCreateWithoutPedidoInput, CarregamentoPedidoUncheckedCreateWithoutPedidoInput> | CarregamentoPedidoCreateWithoutPedidoInput[] | CarregamentoPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: CarregamentoPedidoCreateOrConnectWithoutPedidoInput | CarregamentoPedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: CarregamentoPedidoCreateManyPedidoInputEnvelope
    connect?: CarregamentoPedidoWhereUniqueInput | CarregamentoPedidoWhereUniqueInput[]
  }

  export type ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type MetadadosPedidoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<MetadadosPedidoCreateWithoutPedidoInput, MetadadosPedidoUncheckedCreateWithoutPedidoInput> | MetadadosPedidoCreateWithoutPedidoInput[] | MetadadosPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: MetadadosPedidoCreateOrConnectWithoutPedidoInput | MetadadosPedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: MetadadosPedidoCreateManyPedidoInputEnvelope
    connect?: MetadadosPedidoWhereUniqueInput | MetadadosPedidoWhereUniqueInput[]
  }

  export type PagamentoPedidoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<PagamentoPedidoCreateWithoutPedidoInput, PagamentoPedidoUncheckedCreateWithoutPedidoInput> | PagamentoPedidoCreateWithoutPedidoInput[] | PagamentoPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PagamentoPedidoCreateOrConnectWithoutPedidoInput | PagamentoPedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: PagamentoPedidoCreateManyPedidoInputEnvelope
    connect?: PagamentoPedidoWhereUniqueInput | PagamentoPedidoWhereUniqueInput[]
  }

  export type CarregamentoPedidoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<CarregamentoPedidoCreateWithoutPedidoInput, CarregamentoPedidoUncheckedCreateWithoutPedidoInput> | CarregamentoPedidoCreateWithoutPedidoInput[] | CarregamentoPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: CarregamentoPedidoCreateOrConnectWithoutPedidoInput | CarregamentoPedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: CarregamentoPedidoCreateManyPedidoInputEnvelope
    connect?: CarregamentoPedidoWhereUniqueInput | CarregamentoPedidoWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ClienteUpdateOneRequiredWithoutPedidoNestedInput = {
    create?: XOR<ClienteCreateWithoutPedidoInput, ClienteUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPedidoInput
    upsert?: ClienteUpsertWithoutPedidoInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutPedidoInput, ClienteUpdateWithoutPedidoInput>, ClienteUncheckedUpdateWithoutPedidoInput>
  }

  export type VendedorUpdateOneRequiredWithoutPedidoNestedInput = {
    create?: XOR<VendedorCreateWithoutPedidoInput, VendedorUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: VendedorCreateOrConnectWithoutPedidoInput
    upsert?: VendedorUpsertWithoutPedidoInput
    connect?: VendedorWhereUniqueInput
    update?: XOR<XOR<VendedorUpdateToOneWithWhereWithoutPedidoInput, VendedorUpdateWithoutPedidoInput>, VendedorUncheckedUpdateWithoutPedidoInput>
  }

  export type ItemPedidoUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput | ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput | ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutPedidoInput | ItemPedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type MetadadosPedidoUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<MetadadosPedidoCreateWithoutPedidoInput, MetadadosPedidoUncheckedCreateWithoutPedidoInput> | MetadadosPedidoCreateWithoutPedidoInput[] | MetadadosPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: MetadadosPedidoCreateOrConnectWithoutPedidoInput | MetadadosPedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: MetadadosPedidoUpsertWithWhereUniqueWithoutPedidoInput | MetadadosPedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: MetadadosPedidoCreateManyPedidoInputEnvelope
    set?: MetadadosPedidoWhereUniqueInput | MetadadosPedidoWhereUniqueInput[]
    disconnect?: MetadadosPedidoWhereUniqueInput | MetadadosPedidoWhereUniqueInput[]
    delete?: MetadadosPedidoWhereUniqueInput | MetadadosPedidoWhereUniqueInput[]
    connect?: MetadadosPedidoWhereUniqueInput | MetadadosPedidoWhereUniqueInput[]
    update?: MetadadosPedidoUpdateWithWhereUniqueWithoutPedidoInput | MetadadosPedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: MetadadosPedidoUpdateManyWithWhereWithoutPedidoInput | MetadadosPedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: MetadadosPedidoScalarWhereInput | MetadadosPedidoScalarWhereInput[]
  }

  export type PagamentoPedidoUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<PagamentoPedidoCreateWithoutPedidoInput, PagamentoPedidoUncheckedCreateWithoutPedidoInput> | PagamentoPedidoCreateWithoutPedidoInput[] | PagamentoPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PagamentoPedidoCreateOrConnectWithoutPedidoInput | PagamentoPedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: PagamentoPedidoUpsertWithWhereUniqueWithoutPedidoInput | PagamentoPedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: PagamentoPedidoCreateManyPedidoInputEnvelope
    set?: PagamentoPedidoWhereUniqueInput | PagamentoPedidoWhereUniqueInput[]
    disconnect?: PagamentoPedidoWhereUniqueInput | PagamentoPedidoWhereUniqueInput[]
    delete?: PagamentoPedidoWhereUniqueInput | PagamentoPedidoWhereUniqueInput[]
    connect?: PagamentoPedidoWhereUniqueInput | PagamentoPedidoWhereUniqueInput[]
    update?: PagamentoPedidoUpdateWithWhereUniqueWithoutPedidoInput | PagamentoPedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: PagamentoPedidoUpdateManyWithWhereWithoutPedidoInput | PagamentoPedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: PagamentoPedidoScalarWhereInput | PagamentoPedidoScalarWhereInput[]
  }

  export type CarregamentoPedidoUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<CarregamentoPedidoCreateWithoutPedidoInput, CarregamentoPedidoUncheckedCreateWithoutPedidoInput> | CarregamentoPedidoCreateWithoutPedidoInput[] | CarregamentoPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: CarregamentoPedidoCreateOrConnectWithoutPedidoInput | CarregamentoPedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: CarregamentoPedidoUpsertWithWhereUniqueWithoutPedidoInput | CarregamentoPedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: CarregamentoPedidoCreateManyPedidoInputEnvelope
    set?: CarregamentoPedidoWhereUniqueInput | CarregamentoPedidoWhereUniqueInput[]
    disconnect?: CarregamentoPedidoWhereUniqueInput | CarregamentoPedidoWhereUniqueInput[]
    delete?: CarregamentoPedidoWhereUniqueInput | CarregamentoPedidoWhereUniqueInput[]
    connect?: CarregamentoPedidoWhereUniqueInput | CarregamentoPedidoWhereUniqueInput[]
    update?: CarregamentoPedidoUpdateWithWhereUniqueWithoutPedidoInput | CarregamentoPedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: CarregamentoPedidoUpdateManyWithWhereWithoutPedidoInput | CarregamentoPedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: CarregamentoPedidoScalarWhereInput | CarregamentoPedidoScalarWhereInput[]
  }

  export type ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput | ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput | ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutPedidoInput | ItemPedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type MetadadosPedidoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<MetadadosPedidoCreateWithoutPedidoInput, MetadadosPedidoUncheckedCreateWithoutPedidoInput> | MetadadosPedidoCreateWithoutPedidoInput[] | MetadadosPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: MetadadosPedidoCreateOrConnectWithoutPedidoInput | MetadadosPedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: MetadadosPedidoUpsertWithWhereUniqueWithoutPedidoInput | MetadadosPedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: MetadadosPedidoCreateManyPedidoInputEnvelope
    set?: MetadadosPedidoWhereUniqueInput | MetadadosPedidoWhereUniqueInput[]
    disconnect?: MetadadosPedidoWhereUniqueInput | MetadadosPedidoWhereUniqueInput[]
    delete?: MetadadosPedidoWhereUniqueInput | MetadadosPedidoWhereUniqueInput[]
    connect?: MetadadosPedidoWhereUniqueInput | MetadadosPedidoWhereUniqueInput[]
    update?: MetadadosPedidoUpdateWithWhereUniqueWithoutPedidoInput | MetadadosPedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: MetadadosPedidoUpdateManyWithWhereWithoutPedidoInput | MetadadosPedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: MetadadosPedidoScalarWhereInput | MetadadosPedidoScalarWhereInput[]
  }

  export type PagamentoPedidoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<PagamentoPedidoCreateWithoutPedidoInput, PagamentoPedidoUncheckedCreateWithoutPedidoInput> | PagamentoPedidoCreateWithoutPedidoInput[] | PagamentoPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PagamentoPedidoCreateOrConnectWithoutPedidoInput | PagamentoPedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: PagamentoPedidoUpsertWithWhereUniqueWithoutPedidoInput | PagamentoPedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: PagamentoPedidoCreateManyPedidoInputEnvelope
    set?: PagamentoPedidoWhereUniqueInput | PagamentoPedidoWhereUniqueInput[]
    disconnect?: PagamentoPedidoWhereUniqueInput | PagamentoPedidoWhereUniqueInput[]
    delete?: PagamentoPedidoWhereUniqueInput | PagamentoPedidoWhereUniqueInput[]
    connect?: PagamentoPedidoWhereUniqueInput | PagamentoPedidoWhereUniqueInput[]
    update?: PagamentoPedidoUpdateWithWhereUniqueWithoutPedidoInput | PagamentoPedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: PagamentoPedidoUpdateManyWithWhereWithoutPedidoInput | PagamentoPedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: PagamentoPedidoScalarWhereInput | PagamentoPedidoScalarWhereInput[]
  }

  export type CarregamentoPedidoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<CarregamentoPedidoCreateWithoutPedidoInput, CarregamentoPedidoUncheckedCreateWithoutPedidoInput> | CarregamentoPedidoCreateWithoutPedidoInput[] | CarregamentoPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: CarregamentoPedidoCreateOrConnectWithoutPedidoInput | CarregamentoPedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: CarregamentoPedidoUpsertWithWhereUniqueWithoutPedidoInput | CarregamentoPedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: CarregamentoPedidoCreateManyPedidoInputEnvelope
    set?: CarregamentoPedidoWhereUniqueInput | CarregamentoPedidoWhereUniqueInput[]
    disconnect?: CarregamentoPedidoWhereUniqueInput | CarregamentoPedidoWhereUniqueInput[]
    delete?: CarregamentoPedidoWhereUniqueInput | CarregamentoPedidoWhereUniqueInput[]
    connect?: CarregamentoPedidoWhereUniqueInput | CarregamentoPedidoWhereUniqueInput[]
    update?: CarregamentoPedidoUpdateWithWhereUniqueWithoutPedidoInput | CarregamentoPedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: CarregamentoPedidoUpdateManyWithWhereWithoutPedidoInput | CarregamentoPedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: CarregamentoPedidoScalarWhereInput | CarregamentoPedidoScalarWhereInput[]
  }

  export type PedidoCreateNestedOneWithoutItemPedidoInput = {
    create?: XOR<PedidoCreateWithoutItemPedidoInput, PedidoUncheckedCreateWithoutItemPedidoInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutItemPedidoInput
    connect?: PedidoWhereUniqueInput
  }

  export type ProdutoCreateNestedOneWithoutItemPedidoInput = {
    create?: XOR<ProdutoCreateWithoutItemPedidoInput, ProdutoUncheckedCreateWithoutItemPedidoInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutItemPedidoInput
    connect?: ProdutoWhereUniqueInput
  }

  export type SubCategoriaCreateNestedOneWithoutItemPedidoInput = {
    create?: XOR<SubCategoriaCreateWithoutItemPedidoInput, SubCategoriaUncheckedCreateWithoutItemPedidoInput>
    connectOrCreate?: SubCategoriaCreateOrConnectWithoutItemPedidoInput
    connect?: SubCategoriaWhereUniqueInput
  }

  export type PedidoUpdateOneRequiredWithoutItemPedidoNestedInput = {
    create?: XOR<PedidoCreateWithoutItemPedidoInput, PedidoUncheckedCreateWithoutItemPedidoInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutItemPedidoInput
    upsert?: PedidoUpsertWithoutItemPedidoInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutItemPedidoInput, PedidoUpdateWithoutItemPedidoInput>, PedidoUncheckedUpdateWithoutItemPedidoInput>
  }

  export type ProdutoUpdateOneRequiredWithoutItemPedidoNestedInput = {
    create?: XOR<ProdutoCreateWithoutItemPedidoInput, ProdutoUncheckedCreateWithoutItemPedidoInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutItemPedidoInput
    upsert?: ProdutoUpsertWithoutItemPedidoInput
    connect?: ProdutoWhereUniqueInput
    update?: XOR<XOR<ProdutoUpdateToOneWithWhereWithoutItemPedidoInput, ProdutoUpdateWithoutItemPedidoInput>, ProdutoUncheckedUpdateWithoutItemPedidoInput>
  }

  export type SubCategoriaUpdateOneRequiredWithoutItemPedidoNestedInput = {
    create?: XOR<SubCategoriaCreateWithoutItemPedidoInput, SubCategoriaUncheckedCreateWithoutItemPedidoInput>
    connectOrCreate?: SubCategoriaCreateOrConnectWithoutItemPedidoInput
    upsert?: SubCategoriaUpsertWithoutItemPedidoInput
    connect?: SubCategoriaWhereUniqueInput
    update?: XOR<XOR<SubCategoriaUpdateToOneWithWhereWithoutItemPedidoInput, SubCategoriaUpdateWithoutItemPedidoInput>, SubCategoriaUncheckedUpdateWithoutItemPedidoInput>
  }

  export type PedidoCreateNestedOneWithoutMetadadosPedidoInput = {
    create?: XOR<PedidoCreateWithoutMetadadosPedidoInput, PedidoUncheckedCreateWithoutMetadadosPedidoInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutMetadadosPedidoInput
    connect?: PedidoWhereUniqueInput
  }

  export type PedidoUpdateOneRequiredWithoutMetadadosPedidoNestedInput = {
    create?: XOR<PedidoCreateWithoutMetadadosPedidoInput, PedidoUncheckedCreateWithoutMetadadosPedidoInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutMetadadosPedidoInput
    upsert?: PedidoUpsertWithoutMetadadosPedidoInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutMetadadosPedidoInput, PedidoUpdateWithoutMetadadosPedidoInput>, PedidoUncheckedUpdateWithoutMetadadosPedidoInput>
  }

  export type PedidoCreateNestedOneWithoutPagamentoPedidoInput = {
    create?: XOR<PedidoCreateWithoutPagamentoPedidoInput, PedidoUncheckedCreateWithoutPagamentoPedidoInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutPagamentoPedidoInput
    connect?: PedidoWhereUniqueInput
  }

  export type PedidoUpdateOneRequiredWithoutPagamentoPedidoNestedInput = {
    create?: XOR<PedidoCreateWithoutPagamentoPedidoInput, PedidoUncheckedCreateWithoutPagamentoPedidoInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutPagamentoPedidoInput
    upsert?: PedidoUpsertWithoutPagamentoPedidoInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutPagamentoPedidoInput, PedidoUpdateWithoutPagamentoPedidoInput>, PedidoUncheckedUpdateWithoutPagamentoPedidoInput>
  }

  export type PedidoCreateNestedOneWithoutCarregamentoPedidoInput = {
    create?: XOR<PedidoCreateWithoutCarregamentoPedidoInput, PedidoUncheckedCreateWithoutCarregamentoPedidoInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutCarregamentoPedidoInput
    connect?: PedidoWhereUniqueInput
  }

  export type PedidoUpdateOneRequiredWithoutCarregamentoPedidoNestedInput = {
    create?: XOR<PedidoCreateWithoutCarregamentoPedidoInput, PedidoUncheckedCreateWithoutCarregamentoPedidoInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutCarregamentoPedidoInput
    upsert?: PedidoUpsertWithoutCarregamentoPedidoInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutCarregamentoPedidoInput, PedidoUpdateWithoutCarregamentoPedidoInput>, PedidoUncheckedUpdateWithoutCarregamentoPedidoInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type PedidoCreateWithoutClienteInput = {
    PedidoId: string
    PedidoDtCriacao: Date | string
    PedidoDtImportacao?: Date | string
    PedidoTipoCriacao: string
    PedidoStatus: string
    PedidoValorTotal: Decimal | DecimalJsLike | number | string
    Vendedor: VendedorCreateNestedOneWithoutPedidoInput
    ItemPedido?: ItemPedidoCreateNestedManyWithoutPedidoInput
    MetadadosPedido?: MetadadosPedidoCreateNestedManyWithoutPedidoInput
    PagamentoPedido?: PagamentoPedidoCreateNestedManyWithoutPedidoInput
    CarregamentoPedido?: CarregamentoPedidoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutClienteInput = {
    PedidoId: string
    PedidoDtCriacao: Date | string
    PedidoDtImportacao?: Date | string
    PedidoTipoCriacao: string
    PedidoStatus: string
    PedidoValorTotal: Decimal | DecimalJsLike | number | string
    VendedorId: number
    ItemPedido?: ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput
    MetadadosPedido?: MetadadosPedidoUncheckedCreateNestedManyWithoutPedidoInput
    PagamentoPedido?: PagamentoPedidoUncheckedCreateNestedManyWithoutPedidoInput
    CarregamentoPedido?: CarregamentoPedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutClienteInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput>
  }

  export type PedidoCreateManyClienteInputEnvelope = {
    data: PedidoCreateManyClienteInput | PedidoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type PedidoUpsertWithWhereUniqueWithoutClienteInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutClienteInput, PedidoUncheckedUpdateWithoutClienteInput>
    create: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutClienteInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutClienteInput, PedidoUncheckedUpdateWithoutClienteInput>
  }

  export type PedidoUpdateManyWithWhereWithoutClienteInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutClienteInput>
  }

  export type PedidoScalarWhereInput = {
    AND?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    OR?: PedidoScalarWhereInput[]
    NOT?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    PedidoId?: StringFilter<"Pedido"> | string
    PedidoDtCriacao?: DateTimeFilter<"Pedido"> | Date | string
    PedidoDtImportacao?: DateTimeFilter<"Pedido"> | Date | string
    PedidoTipoCriacao?: StringFilter<"Pedido"> | string
    PedidoStatus?: StringFilter<"Pedido"> | string
    PedidoValorTotal?: DecimalFilter<"Pedido"> | Decimal | DecimalJsLike | number | string
    ClienteId?: IntFilter<"Pedido"> | number
    VendedorId?: IntFilter<"Pedido"> | number
  }

  export type PedidoCreateWithoutVendedorInput = {
    PedidoId: string
    PedidoDtCriacao: Date | string
    PedidoDtImportacao?: Date | string
    PedidoTipoCriacao: string
    PedidoStatus: string
    PedidoValorTotal: Decimal | DecimalJsLike | number | string
    Cliente: ClienteCreateNestedOneWithoutPedidoInput
    ItemPedido?: ItemPedidoCreateNestedManyWithoutPedidoInput
    MetadadosPedido?: MetadadosPedidoCreateNestedManyWithoutPedidoInput
    PagamentoPedido?: PagamentoPedidoCreateNestedManyWithoutPedidoInput
    CarregamentoPedido?: CarregamentoPedidoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutVendedorInput = {
    PedidoId: string
    PedidoDtCriacao: Date | string
    PedidoDtImportacao?: Date | string
    PedidoTipoCriacao: string
    PedidoStatus: string
    PedidoValorTotal: Decimal | DecimalJsLike | number | string
    ClienteId: number
    ItemPedido?: ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput
    MetadadosPedido?: MetadadosPedidoUncheckedCreateNestedManyWithoutPedidoInput
    PagamentoPedido?: PagamentoPedidoUncheckedCreateNestedManyWithoutPedidoInput
    CarregamentoPedido?: CarregamentoPedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutVendedorInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutVendedorInput, PedidoUncheckedCreateWithoutVendedorInput>
  }

  export type PedidoCreateManyVendedorInputEnvelope = {
    data: PedidoCreateManyVendedorInput | PedidoCreateManyVendedorInput[]
    skipDuplicates?: boolean
  }

  export type PedidoUpsertWithWhereUniqueWithoutVendedorInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutVendedorInput, PedidoUncheckedUpdateWithoutVendedorInput>
    create: XOR<PedidoCreateWithoutVendedorInput, PedidoUncheckedCreateWithoutVendedorInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutVendedorInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutVendedorInput, PedidoUncheckedUpdateWithoutVendedorInput>
  }

  export type PedidoUpdateManyWithWhereWithoutVendedorInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutVendedorInput>
  }

  export type SubCategoriaCreateWithoutCategoriaInput = {
    SubCategoriaId: string
    SubCategoriaNome: string
    SubCategoriaDtImportacao?: Date | string
    ItemPedido?: ItemPedidoCreateNestedManyWithoutSubCategoriaInput
  }

  export type SubCategoriaUncheckedCreateWithoutCategoriaInput = {
    SubCategoriaId: string
    SubCategoriaNome: string
    SubCategoriaDtImportacao?: Date | string
    ItemPedido?: ItemPedidoUncheckedCreateNestedManyWithoutSubCategoriaInput
  }

  export type SubCategoriaCreateOrConnectWithoutCategoriaInput = {
    where: SubCategoriaWhereUniqueInput
    create: XOR<SubCategoriaCreateWithoutCategoriaInput, SubCategoriaUncheckedCreateWithoutCategoriaInput>
  }

  export type SubCategoriaCreateManyCategoriaInputEnvelope = {
    data: SubCategoriaCreateManyCategoriaInput | SubCategoriaCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type SubCategoriaUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: SubCategoriaWhereUniqueInput
    update: XOR<SubCategoriaUpdateWithoutCategoriaInput, SubCategoriaUncheckedUpdateWithoutCategoriaInput>
    create: XOR<SubCategoriaCreateWithoutCategoriaInput, SubCategoriaUncheckedCreateWithoutCategoriaInput>
  }

  export type SubCategoriaUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: SubCategoriaWhereUniqueInput
    data: XOR<SubCategoriaUpdateWithoutCategoriaInput, SubCategoriaUncheckedUpdateWithoutCategoriaInput>
  }

  export type SubCategoriaUpdateManyWithWhereWithoutCategoriaInput = {
    where: SubCategoriaScalarWhereInput
    data: XOR<SubCategoriaUpdateManyMutationInput, SubCategoriaUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type SubCategoriaScalarWhereInput = {
    AND?: SubCategoriaScalarWhereInput | SubCategoriaScalarWhereInput[]
    OR?: SubCategoriaScalarWhereInput[]
    NOT?: SubCategoriaScalarWhereInput | SubCategoriaScalarWhereInput[]
    SubCategoriaId?: StringFilter<"SubCategoria"> | string
    CategoriaId?: StringFilter<"SubCategoria"> | string
    SubCategoriaNome?: StringFilter<"SubCategoria"> | string
    SubCategoriaDtImportacao?: DateTimeFilter<"SubCategoria"> | Date | string
  }

  export type CategoriaCreateWithoutSubCategoriaInput = {
    CategoriaId: string
    CategoriaNome: string
    CategoriaDtImportacao?: Date | string
  }

  export type CategoriaUncheckedCreateWithoutSubCategoriaInput = {
    CategoriaId: string
    CategoriaNome: string
    CategoriaDtImportacao?: Date | string
  }

  export type CategoriaCreateOrConnectWithoutSubCategoriaInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutSubCategoriaInput, CategoriaUncheckedCreateWithoutSubCategoriaInput>
  }

  export type ItemPedidoCreateWithoutSubCategoriaInput = {
    ItemPedidoId: number
    ItemPedidoQuantidade: number
    ItemPedidoPrecoUnitario: Decimal | DecimalJsLike | number | string
    ItemPedidoValorTotal: Decimal | DecimalJsLike | number | string
    Pedido: PedidoCreateNestedOneWithoutItemPedidoInput
    Produto: ProdutoCreateNestedOneWithoutItemPedidoInput
  }

  export type ItemPedidoUncheckedCreateWithoutSubCategoriaInput = {
    ItemPedidoId: number
    PedidoId: string
    ProdutoId: string
    ItemPedidoQuantidade: number
    ItemPedidoPrecoUnitario: Decimal | DecimalJsLike | number | string
    ItemPedidoValorTotal: Decimal | DecimalJsLike | number | string
  }

  export type ItemPedidoCreateOrConnectWithoutSubCategoriaInput = {
    where: ItemPedidoWhereUniqueInput
    create: XOR<ItemPedidoCreateWithoutSubCategoriaInput, ItemPedidoUncheckedCreateWithoutSubCategoriaInput>
  }

  export type ItemPedidoCreateManySubCategoriaInputEnvelope = {
    data: ItemPedidoCreateManySubCategoriaInput | ItemPedidoCreateManySubCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type CategoriaUpsertWithoutSubCategoriaInput = {
    update: XOR<CategoriaUpdateWithoutSubCategoriaInput, CategoriaUncheckedUpdateWithoutSubCategoriaInput>
    create: XOR<CategoriaCreateWithoutSubCategoriaInput, CategoriaUncheckedCreateWithoutSubCategoriaInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutSubCategoriaInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutSubCategoriaInput, CategoriaUncheckedUpdateWithoutSubCategoriaInput>
  }

  export type CategoriaUpdateWithoutSubCategoriaInput = {
    CategoriaId?: StringFieldUpdateOperationsInput | string
    CategoriaNome?: StringFieldUpdateOperationsInput | string
    CategoriaDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaUncheckedUpdateWithoutSubCategoriaInput = {
    CategoriaId?: StringFieldUpdateOperationsInput | string
    CategoriaNome?: StringFieldUpdateOperationsInput | string
    CategoriaDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemPedidoUpsertWithWhereUniqueWithoutSubCategoriaInput = {
    where: ItemPedidoWhereUniqueInput
    update: XOR<ItemPedidoUpdateWithoutSubCategoriaInput, ItemPedidoUncheckedUpdateWithoutSubCategoriaInput>
    create: XOR<ItemPedidoCreateWithoutSubCategoriaInput, ItemPedidoUncheckedCreateWithoutSubCategoriaInput>
  }

  export type ItemPedidoUpdateWithWhereUniqueWithoutSubCategoriaInput = {
    where: ItemPedidoWhereUniqueInput
    data: XOR<ItemPedidoUpdateWithoutSubCategoriaInput, ItemPedidoUncheckedUpdateWithoutSubCategoriaInput>
  }

  export type ItemPedidoUpdateManyWithWhereWithoutSubCategoriaInput = {
    where: ItemPedidoScalarWhereInput
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyWithoutSubCategoriaInput>
  }

  export type ItemPedidoScalarWhereInput = {
    AND?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
    OR?: ItemPedidoScalarWhereInput[]
    NOT?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
    ItemPedidoId?: IntFilter<"ItemPedido"> | number
    PedidoId?: StringFilter<"ItemPedido"> | string
    ProdutoId?: StringFilter<"ItemPedido"> | string
    ItemPedidoQuantidade?: IntFilter<"ItemPedido"> | number
    ItemPedidoPrecoUnitario?: DecimalFilter<"ItemPedido"> | Decimal | DecimalJsLike | number | string
    ItemPedidoValorTotal?: DecimalFilter<"ItemPedido"> | Decimal | DecimalJsLike | number | string
    SubCategoriaId?: StringFilter<"ItemPedido"> | string
    CategoriaId?: StringFilter<"ItemPedido"> | string
  }

  export type ItemPedidoCreateWithoutProdutoInput = {
    ItemPedidoId: number
    ItemPedidoQuantidade: number
    ItemPedidoPrecoUnitario: Decimal | DecimalJsLike | number | string
    ItemPedidoValorTotal: Decimal | DecimalJsLike | number | string
    Pedido: PedidoCreateNestedOneWithoutItemPedidoInput
    SubCategoria: SubCategoriaCreateNestedOneWithoutItemPedidoInput
  }

  export type ItemPedidoUncheckedCreateWithoutProdutoInput = {
    ItemPedidoId: number
    PedidoId: string
    ItemPedidoQuantidade: number
    ItemPedidoPrecoUnitario: Decimal | DecimalJsLike | number | string
    ItemPedidoValorTotal: Decimal | DecimalJsLike | number | string
    SubCategoriaId: string
    CategoriaId: string
  }

  export type ItemPedidoCreateOrConnectWithoutProdutoInput = {
    where: ItemPedidoWhereUniqueInput
    create: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput>
  }

  export type ItemPedidoCreateManyProdutoInputEnvelope = {
    data: ItemPedidoCreateManyProdutoInput | ItemPedidoCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type ItemPedidoUpsertWithWhereUniqueWithoutProdutoInput = {
    where: ItemPedidoWhereUniqueInput
    update: XOR<ItemPedidoUpdateWithoutProdutoInput, ItemPedidoUncheckedUpdateWithoutProdutoInput>
    create: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput>
  }

  export type ItemPedidoUpdateWithWhereUniqueWithoutProdutoInput = {
    where: ItemPedidoWhereUniqueInput
    data: XOR<ItemPedidoUpdateWithoutProdutoInput, ItemPedidoUncheckedUpdateWithoutProdutoInput>
  }

  export type ItemPedidoUpdateManyWithWhereWithoutProdutoInput = {
    where: ItemPedidoScalarWhereInput
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyWithoutProdutoInput>
  }

  export type ClienteCreateWithoutPedidoInput = {
    ClienteId: number
    ClienteNome: string
    ClienteEmail: string
    ClienteDocumento: string
    ClienteDtImportacao?: Date | string
  }

  export type ClienteUncheckedCreateWithoutPedidoInput = {
    ClienteId: number
    ClienteNome: string
    ClienteEmail: string
    ClienteDocumento: string
    ClienteDtImportacao?: Date | string
  }

  export type ClienteCreateOrConnectWithoutPedidoInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutPedidoInput, ClienteUncheckedCreateWithoutPedidoInput>
  }

  export type VendedorCreateWithoutPedidoInput = {
    VendedorId: number
    VendedorNome: string
    VendedorCidade: string
    VendedorUF: string
    VendedorDtImportacao?: Date | string
  }

  export type VendedorUncheckedCreateWithoutPedidoInput = {
    VendedorId: number
    VendedorNome: string
    VendedorCidade: string
    VendedorUF: string
    VendedorDtImportacao?: Date | string
  }

  export type VendedorCreateOrConnectWithoutPedidoInput = {
    where: VendedorWhereUniqueInput
    create: XOR<VendedorCreateWithoutPedidoInput, VendedorUncheckedCreateWithoutPedidoInput>
  }

  export type ItemPedidoCreateWithoutPedidoInput = {
    ItemPedidoId: number
    ItemPedidoQuantidade: number
    ItemPedidoPrecoUnitario: Decimal | DecimalJsLike | number | string
    ItemPedidoValorTotal: Decimal | DecimalJsLike | number | string
    Produto: ProdutoCreateNestedOneWithoutItemPedidoInput
    SubCategoria: SubCategoriaCreateNestedOneWithoutItemPedidoInput
  }

  export type ItemPedidoUncheckedCreateWithoutPedidoInput = {
    ItemPedidoId: number
    ProdutoId: string
    ItemPedidoQuantidade: number
    ItemPedidoPrecoUnitario: Decimal | DecimalJsLike | number | string
    ItemPedidoValorTotal: Decimal | DecimalJsLike | number | string
    SubCategoriaId: string
    CategoriaId: string
  }

  export type ItemPedidoCreateOrConnectWithoutPedidoInput = {
    where: ItemPedidoWhereUniqueInput
    create: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput>
  }

  export type ItemPedidoCreateManyPedidoInputEnvelope = {
    data: ItemPedidoCreateManyPedidoInput | ItemPedidoCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type MetadadosPedidoCreateWithoutPedidoInput = {
    MetadadosPedidoId?: string
    MetadadosSource: string
    MetadadosUserAgent: string
    MetadadosIP: string
  }

  export type MetadadosPedidoUncheckedCreateWithoutPedidoInput = {
    MetadadosPedidoId?: string
    MetadadosSource: string
    MetadadosUserAgent: string
    MetadadosIP: string
  }

  export type MetadadosPedidoCreateOrConnectWithoutPedidoInput = {
    where: MetadadosPedidoWhereUniqueInput
    create: XOR<MetadadosPedidoCreateWithoutPedidoInput, MetadadosPedidoUncheckedCreateWithoutPedidoInput>
  }

  export type MetadadosPedidoCreateManyPedidoInputEnvelope = {
    data: MetadadosPedidoCreateManyPedidoInput | MetadadosPedidoCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type PagamentoPedidoCreateWithoutPedidoInput = {
    PagamentoPedidoId?: string
    PagamentoMetodo: string
    PagamentoStatus: string
    PagamentoTransacao: string
  }

  export type PagamentoPedidoUncheckedCreateWithoutPedidoInput = {
    PagamentoPedidoId?: string
    PagamentoMetodo: string
    PagamentoStatus: string
    PagamentoTransacao: string
  }

  export type PagamentoPedidoCreateOrConnectWithoutPedidoInput = {
    where: PagamentoPedidoWhereUniqueInput
    create: XOR<PagamentoPedidoCreateWithoutPedidoInput, PagamentoPedidoUncheckedCreateWithoutPedidoInput>
  }

  export type PagamentoPedidoCreateManyPedidoInputEnvelope = {
    data: PagamentoPedidoCreateManyPedidoInput | PagamentoPedidoCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type CarregamentoPedidoCreateWithoutPedidoInput = {
    CarregamentoPedidoId?: string
    CarregamentoOperadora: string
    CarregamentoServico: string
    CarregamentoStatus: string
    CarregamentoCodigoRastreio: string
  }

  export type CarregamentoPedidoUncheckedCreateWithoutPedidoInput = {
    CarregamentoPedidoId?: string
    CarregamentoOperadora: string
    CarregamentoServico: string
    CarregamentoStatus: string
    CarregamentoCodigoRastreio: string
  }

  export type CarregamentoPedidoCreateOrConnectWithoutPedidoInput = {
    where: CarregamentoPedidoWhereUniqueInput
    create: XOR<CarregamentoPedidoCreateWithoutPedidoInput, CarregamentoPedidoUncheckedCreateWithoutPedidoInput>
  }

  export type CarregamentoPedidoCreateManyPedidoInputEnvelope = {
    data: CarregamentoPedidoCreateManyPedidoInput | CarregamentoPedidoCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type ClienteUpsertWithoutPedidoInput = {
    update: XOR<ClienteUpdateWithoutPedidoInput, ClienteUncheckedUpdateWithoutPedidoInput>
    create: XOR<ClienteCreateWithoutPedidoInput, ClienteUncheckedCreateWithoutPedidoInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutPedidoInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutPedidoInput, ClienteUncheckedUpdateWithoutPedidoInput>
  }

  export type ClienteUpdateWithoutPedidoInput = {
    ClienteId?: IntFieldUpdateOperationsInput | number
    ClienteNome?: StringFieldUpdateOperationsInput | string
    ClienteEmail?: StringFieldUpdateOperationsInput | string
    ClienteDocumento?: StringFieldUpdateOperationsInput | string
    ClienteDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateWithoutPedidoInput = {
    ClienteId?: IntFieldUpdateOperationsInput | number
    ClienteNome?: StringFieldUpdateOperationsInput | string
    ClienteEmail?: StringFieldUpdateOperationsInput | string
    ClienteDocumento?: StringFieldUpdateOperationsInput | string
    ClienteDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendedorUpsertWithoutPedidoInput = {
    update: XOR<VendedorUpdateWithoutPedidoInput, VendedorUncheckedUpdateWithoutPedidoInput>
    create: XOR<VendedorCreateWithoutPedidoInput, VendedorUncheckedCreateWithoutPedidoInput>
    where?: VendedorWhereInput
  }

  export type VendedorUpdateToOneWithWhereWithoutPedidoInput = {
    where?: VendedorWhereInput
    data: XOR<VendedorUpdateWithoutPedidoInput, VendedorUncheckedUpdateWithoutPedidoInput>
  }

  export type VendedorUpdateWithoutPedidoInput = {
    VendedorId?: IntFieldUpdateOperationsInput | number
    VendedorNome?: StringFieldUpdateOperationsInput | string
    VendedorCidade?: StringFieldUpdateOperationsInput | string
    VendedorUF?: StringFieldUpdateOperationsInput | string
    VendedorDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendedorUncheckedUpdateWithoutPedidoInput = {
    VendedorId?: IntFieldUpdateOperationsInput | number
    VendedorNome?: StringFieldUpdateOperationsInput | string
    VendedorCidade?: StringFieldUpdateOperationsInput | string
    VendedorUF?: StringFieldUpdateOperationsInput | string
    VendedorDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: ItemPedidoWhereUniqueInput
    update: XOR<ItemPedidoUpdateWithoutPedidoInput, ItemPedidoUncheckedUpdateWithoutPedidoInput>
    create: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput>
  }

  export type ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: ItemPedidoWhereUniqueInput
    data: XOR<ItemPedidoUpdateWithoutPedidoInput, ItemPedidoUncheckedUpdateWithoutPedidoInput>
  }

  export type ItemPedidoUpdateManyWithWhereWithoutPedidoInput = {
    where: ItemPedidoScalarWhereInput
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type MetadadosPedidoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: MetadadosPedidoWhereUniqueInput
    update: XOR<MetadadosPedidoUpdateWithoutPedidoInput, MetadadosPedidoUncheckedUpdateWithoutPedidoInput>
    create: XOR<MetadadosPedidoCreateWithoutPedidoInput, MetadadosPedidoUncheckedCreateWithoutPedidoInput>
  }

  export type MetadadosPedidoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: MetadadosPedidoWhereUniqueInput
    data: XOR<MetadadosPedidoUpdateWithoutPedidoInput, MetadadosPedidoUncheckedUpdateWithoutPedidoInput>
  }

  export type MetadadosPedidoUpdateManyWithWhereWithoutPedidoInput = {
    where: MetadadosPedidoScalarWhereInput
    data: XOR<MetadadosPedidoUpdateManyMutationInput, MetadadosPedidoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type MetadadosPedidoScalarWhereInput = {
    AND?: MetadadosPedidoScalarWhereInput | MetadadosPedidoScalarWhereInput[]
    OR?: MetadadosPedidoScalarWhereInput[]
    NOT?: MetadadosPedidoScalarWhereInput | MetadadosPedidoScalarWhereInput[]
    MetadadosPedidoId?: StringFilter<"MetadadosPedido"> | string
    PedidoId?: StringFilter<"MetadadosPedido"> | string
    MetadadosSource?: StringFilter<"MetadadosPedido"> | string
    MetadadosUserAgent?: StringFilter<"MetadadosPedido"> | string
    MetadadosIP?: StringFilter<"MetadadosPedido"> | string
  }

  export type PagamentoPedidoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: PagamentoPedidoWhereUniqueInput
    update: XOR<PagamentoPedidoUpdateWithoutPedidoInput, PagamentoPedidoUncheckedUpdateWithoutPedidoInput>
    create: XOR<PagamentoPedidoCreateWithoutPedidoInput, PagamentoPedidoUncheckedCreateWithoutPedidoInput>
  }

  export type PagamentoPedidoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: PagamentoPedidoWhereUniqueInput
    data: XOR<PagamentoPedidoUpdateWithoutPedidoInput, PagamentoPedidoUncheckedUpdateWithoutPedidoInput>
  }

  export type PagamentoPedidoUpdateManyWithWhereWithoutPedidoInput = {
    where: PagamentoPedidoScalarWhereInput
    data: XOR<PagamentoPedidoUpdateManyMutationInput, PagamentoPedidoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type PagamentoPedidoScalarWhereInput = {
    AND?: PagamentoPedidoScalarWhereInput | PagamentoPedidoScalarWhereInput[]
    OR?: PagamentoPedidoScalarWhereInput[]
    NOT?: PagamentoPedidoScalarWhereInput | PagamentoPedidoScalarWhereInput[]
    PagamentoPedidoId?: StringFilter<"PagamentoPedido"> | string
    PedidoId?: StringFilter<"PagamentoPedido"> | string
    PagamentoMetodo?: StringFilter<"PagamentoPedido"> | string
    PagamentoStatus?: StringFilter<"PagamentoPedido"> | string
    PagamentoTransacao?: StringFilter<"PagamentoPedido"> | string
  }

  export type CarregamentoPedidoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: CarregamentoPedidoWhereUniqueInput
    update: XOR<CarregamentoPedidoUpdateWithoutPedidoInput, CarregamentoPedidoUncheckedUpdateWithoutPedidoInput>
    create: XOR<CarregamentoPedidoCreateWithoutPedidoInput, CarregamentoPedidoUncheckedCreateWithoutPedidoInput>
  }

  export type CarregamentoPedidoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: CarregamentoPedidoWhereUniqueInput
    data: XOR<CarregamentoPedidoUpdateWithoutPedidoInput, CarregamentoPedidoUncheckedUpdateWithoutPedidoInput>
  }

  export type CarregamentoPedidoUpdateManyWithWhereWithoutPedidoInput = {
    where: CarregamentoPedidoScalarWhereInput
    data: XOR<CarregamentoPedidoUpdateManyMutationInput, CarregamentoPedidoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type CarregamentoPedidoScalarWhereInput = {
    AND?: CarregamentoPedidoScalarWhereInput | CarregamentoPedidoScalarWhereInput[]
    OR?: CarregamentoPedidoScalarWhereInput[]
    NOT?: CarregamentoPedidoScalarWhereInput | CarregamentoPedidoScalarWhereInput[]
    CarregamentoPedidoId?: StringFilter<"CarregamentoPedido"> | string
    PedidoId?: StringFilter<"CarregamentoPedido"> | string
    CarregamentoOperadora?: StringFilter<"CarregamentoPedido"> | string
    CarregamentoServico?: StringFilter<"CarregamentoPedido"> | string
    CarregamentoStatus?: StringFilter<"CarregamentoPedido"> | string
    CarregamentoCodigoRastreio?: StringFilter<"CarregamentoPedido"> | string
  }

  export type PedidoCreateWithoutItemPedidoInput = {
    PedidoId: string
    PedidoDtCriacao: Date | string
    PedidoDtImportacao?: Date | string
    PedidoTipoCriacao: string
    PedidoStatus: string
    PedidoValorTotal: Decimal | DecimalJsLike | number | string
    Cliente: ClienteCreateNestedOneWithoutPedidoInput
    Vendedor: VendedorCreateNestedOneWithoutPedidoInput
    MetadadosPedido?: MetadadosPedidoCreateNestedManyWithoutPedidoInput
    PagamentoPedido?: PagamentoPedidoCreateNestedManyWithoutPedidoInput
    CarregamentoPedido?: CarregamentoPedidoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutItemPedidoInput = {
    PedidoId: string
    PedidoDtCriacao: Date | string
    PedidoDtImportacao?: Date | string
    PedidoTipoCriacao: string
    PedidoStatus: string
    PedidoValorTotal: Decimal | DecimalJsLike | number | string
    ClienteId: number
    VendedorId: number
    MetadadosPedido?: MetadadosPedidoUncheckedCreateNestedManyWithoutPedidoInput
    PagamentoPedido?: PagamentoPedidoUncheckedCreateNestedManyWithoutPedidoInput
    CarregamentoPedido?: CarregamentoPedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutItemPedidoInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutItemPedidoInput, PedidoUncheckedCreateWithoutItemPedidoInput>
  }

  export type ProdutoCreateWithoutItemPedidoInput = {
    ProdutoId: string
    ProdutoNome: string
    ProdutoDtImportacao?: Date | string
  }

  export type ProdutoUncheckedCreateWithoutItemPedidoInput = {
    ProdutoId: string
    ProdutoNome: string
    ProdutoDtImportacao?: Date | string
  }

  export type ProdutoCreateOrConnectWithoutItemPedidoInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutItemPedidoInput, ProdutoUncheckedCreateWithoutItemPedidoInput>
  }

  export type SubCategoriaCreateWithoutItemPedidoInput = {
    SubCategoriaId: string
    SubCategoriaNome: string
    SubCategoriaDtImportacao?: Date | string
    Categoria: CategoriaCreateNestedOneWithoutSubCategoriaInput
  }

  export type SubCategoriaUncheckedCreateWithoutItemPedidoInput = {
    SubCategoriaId: string
    CategoriaId: string
    SubCategoriaNome: string
    SubCategoriaDtImportacao?: Date | string
  }

  export type SubCategoriaCreateOrConnectWithoutItemPedidoInput = {
    where: SubCategoriaWhereUniqueInput
    create: XOR<SubCategoriaCreateWithoutItemPedidoInput, SubCategoriaUncheckedCreateWithoutItemPedidoInput>
  }

  export type PedidoUpsertWithoutItemPedidoInput = {
    update: XOR<PedidoUpdateWithoutItemPedidoInput, PedidoUncheckedUpdateWithoutItemPedidoInput>
    create: XOR<PedidoCreateWithoutItemPedidoInput, PedidoUncheckedCreateWithoutItemPedidoInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutItemPedidoInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutItemPedidoInput, PedidoUncheckedUpdateWithoutItemPedidoInput>
  }

  export type PedidoUpdateWithoutItemPedidoInput = {
    PedidoId?: StringFieldUpdateOperationsInput | string
    PedidoDtCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    PedidoDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
    PedidoTipoCriacao?: StringFieldUpdateOperationsInput | string
    PedidoStatus?: StringFieldUpdateOperationsInput | string
    PedidoValorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Cliente?: ClienteUpdateOneRequiredWithoutPedidoNestedInput
    Vendedor?: VendedorUpdateOneRequiredWithoutPedidoNestedInput
    MetadadosPedido?: MetadadosPedidoUpdateManyWithoutPedidoNestedInput
    PagamentoPedido?: PagamentoPedidoUpdateManyWithoutPedidoNestedInput
    CarregamentoPedido?: CarregamentoPedidoUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutItemPedidoInput = {
    PedidoId?: StringFieldUpdateOperationsInput | string
    PedidoDtCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    PedidoDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
    PedidoTipoCriacao?: StringFieldUpdateOperationsInput | string
    PedidoStatus?: StringFieldUpdateOperationsInput | string
    PedidoValorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ClienteId?: IntFieldUpdateOperationsInput | number
    VendedorId?: IntFieldUpdateOperationsInput | number
    MetadadosPedido?: MetadadosPedidoUncheckedUpdateManyWithoutPedidoNestedInput
    PagamentoPedido?: PagamentoPedidoUncheckedUpdateManyWithoutPedidoNestedInput
    CarregamentoPedido?: CarregamentoPedidoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type ProdutoUpsertWithoutItemPedidoInput = {
    update: XOR<ProdutoUpdateWithoutItemPedidoInput, ProdutoUncheckedUpdateWithoutItemPedidoInput>
    create: XOR<ProdutoCreateWithoutItemPedidoInput, ProdutoUncheckedCreateWithoutItemPedidoInput>
    where?: ProdutoWhereInput
  }

  export type ProdutoUpdateToOneWithWhereWithoutItemPedidoInput = {
    where?: ProdutoWhereInput
    data: XOR<ProdutoUpdateWithoutItemPedidoInput, ProdutoUncheckedUpdateWithoutItemPedidoInput>
  }

  export type ProdutoUpdateWithoutItemPedidoInput = {
    ProdutoId?: StringFieldUpdateOperationsInput | string
    ProdutoNome?: StringFieldUpdateOperationsInput | string
    ProdutoDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProdutoUncheckedUpdateWithoutItemPedidoInput = {
    ProdutoId?: StringFieldUpdateOperationsInput | string
    ProdutoNome?: StringFieldUpdateOperationsInput | string
    ProdutoDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCategoriaUpsertWithoutItemPedidoInput = {
    update: XOR<SubCategoriaUpdateWithoutItemPedidoInput, SubCategoriaUncheckedUpdateWithoutItemPedidoInput>
    create: XOR<SubCategoriaCreateWithoutItemPedidoInput, SubCategoriaUncheckedCreateWithoutItemPedidoInput>
    where?: SubCategoriaWhereInput
  }

  export type SubCategoriaUpdateToOneWithWhereWithoutItemPedidoInput = {
    where?: SubCategoriaWhereInput
    data: XOR<SubCategoriaUpdateWithoutItemPedidoInput, SubCategoriaUncheckedUpdateWithoutItemPedidoInput>
  }

  export type SubCategoriaUpdateWithoutItemPedidoInput = {
    SubCategoriaId?: StringFieldUpdateOperationsInput | string
    SubCategoriaNome?: StringFieldUpdateOperationsInput | string
    SubCategoriaDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
    Categoria?: CategoriaUpdateOneRequiredWithoutSubCategoriaNestedInput
  }

  export type SubCategoriaUncheckedUpdateWithoutItemPedidoInput = {
    SubCategoriaId?: StringFieldUpdateOperationsInput | string
    CategoriaId?: StringFieldUpdateOperationsInput | string
    SubCategoriaNome?: StringFieldUpdateOperationsInput | string
    SubCategoriaDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoCreateWithoutMetadadosPedidoInput = {
    PedidoId: string
    PedidoDtCriacao: Date | string
    PedidoDtImportacao?: Date | string
    PedidoTipoCriacao: string
    PedidoStatus: string
    PedidoValorTotal: Decimal | DecimalJsLike | number | string
    Cliente: ClienteCreateNestedOneWithoutPedidoInput
    Vendedor: VendedorCreateNestedOneWithoutPedidoInput
    ItemPedido?: ItemPedidoCreateNestedManyWithoutPedidoInput
    PagamentoPedido?: PagamentoPedidoCreateNestedManyWithoutPedidoInput
    CarregamentoPedido?: CarregamentoPedidoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutMetadadosPedidoInput = {
    PedidoId: string
    PedidoDtCriacao: Date | string
    PedidoDtImportacao?: Date | string
    PedidoTipoCriacao: string
    PedidoStatus: string
    PedidoValorTotal: Decimal | DecimalJsLike | number | string
    ClienteId: number
    VendedorId: number
    ItemPedido?: ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput
    PagamentoPedido?: PagamentoPedidoUncheckedCreateNestedManyWithoutPedidoInput
    CarregamentoPedido?: CarregamentoPedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutMetadadosPedidoInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutMetadadosPedidoInput, PedidoUncheckedCreateWithoutMetadadosPedidoInput>
  }

  export type PedidoUpsertWithoutMetadadosPedidoInput = {
    update: XOR<PedidoUpdateWithoutMetadadosPedidoInput, PedidoUncheckedUpdateWithoutMetadadosPedidoInput>
    create: XOR<PedidoCreateWithoutMetadadosPedidoInput, PedidoUncheckedCreateWithoutMetadadosPedidoInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutMetadadosPedidoInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutMetadadosPedidoInput, PedidoUncheckedUpdateWithoutMetadadosPedidoInput>
  }

  export type PedidoUpdateWithoutMetadadosPedidoInput = {
    PedidoId?: StringFieldUpdateOperationsInput | string
    PedidoDtCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    PedidoDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
    PedidoTipoCriacao?: StringFieldUpdateOperationsInput | string
    PedidoStatus?: StringFieldUpdateOperationsInput | string
    PedidoValorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Cliente?: ClienteUpdateOneRequiredWithoutPedidoNestedInput
    Vendedor?: VendedorUpdateOneRequiredWithoutPedidoNestedInput
    ItemPedido?: ItemPedidoUpdateManyWithoutPedidoNestedInput
    PagamentoPedido?: PagamentoPedidoUpdateManyWithoutPedidoNestedInput
    CarregamentoPedido?: CarregamentoPedidoUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutMetadadosPedidoInput = {
    PedidoId?: StringFieldUpdateOperationsInput | string
    PedidoDtCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    PedidoDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
    PedidoTipoCriacao?: StringFieldUpdateOperationsInput | string
    PedidoStatus?: StringFieldUpdateOperationsInput | string
    PedidoValorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ClienteId?: IntFieldUpdateOperationsInput | number
    VendedorId?: IntFieldUpdateOperationsInput | number
    ItemPedido?: ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput
    PagamentoPedido?: PagamentoPedidoUncheckedUpdateManyWithoutPedidoNestedInput
    CarregamentoPedido?: CarregamentoPedidoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoCreateWithoutPagamentoPedidoInput = {
    PedidoId: string
    PedidoDtCriacao: Date | string
    PedidoDtImportacao?: Date | string
    PedidoTipoCriacao: string
    PedidoStatus: string
    PedidoValorTotal: Decimal | DecimalJsLike | number | string
    Cliente: ClienteCreateNestedOneWithoutPedidoInput
    Vendedor: VendedorCreateNestedOneWithoutPedidoInput
    ItemPedido?: ItemPedidoCreateNestedManyWithoutPedidoInput
    MetadadosPedido?: MetadadosPedidoCreateNestedManyWithoutPedidoInput
    CarregamentoPedido?: CarregamentoPedidoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutPagamentoPedidoInput = {
    PedidoId: string
    PedidoDtCriacao: Date | string
    PedidoDtImportacao?: Date | string
    PedidoTipoCriacao: string
    PedidoStatus: string
    PedidoValorTotal: Decimal | DecimalJsLike | number | string
    ClienteId: number
    VendedorId: number
    ItemPedido?: ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput
    MetadadosPedido?: MetadadosPedidoUncheckedCreateNestedManyWithoutPedidoInput
    CarregamentoPedido?: CarregamentoPedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutPagamentoPedidoInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutPagamentoPedidoInput, PedidoUncheckedCreateWithoutPagamentoPedidoInput>
  }

  export type PedidoUpsertWithoutPagamentoPedidoInput = {
    update: XOR<PedidoUpdateWithoutPagamentoPedidoInput, PedidoUncheckedUpdateWithoutPagamentoPedidoInput>
    create: XOR<PedidoCreateWithoutPagamentoPedidoInput, PedidoUncheckedCreateWithoutPagamentoPedidoInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutPagamentoPedidoInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutPagamentoPedidoInput, PedidoUncheckedUpdateWithoutPagamentoPedidoInput>
  }

  export type PedidoUpdateWithoutPagamentoPedidoInput = {
    PedidoId?: StringFieldUpdateOperationsInput | string
    PedidoDtCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    PedidoDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
    PedidoTipoCriacao?: StringFieldUpdateOperationsInput | string
    PedidoStatus?: StringFieldUpdateOperationsInput | string
    PedidoValorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Cliente?: ClienteUpdateOneRequiredWithoutPedidoNestedInput
    Vendedor?: VendedorUpdateOneRequiredWithoutPedidoNestedInput
    ItemPedido?: ItemPedidoUpdateManyWithoutPedidoNestedInput
    MetadadosPedido?: MetadadosPedidoUpdateManyWithoutPedidoNestedInput
    CarregamentoPedido?: CarregamentoPedidoUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutPagamentoPedidoInput = {
    PedidoId?: StringFieldUpdateOperationsInput | string
    PedidoDtCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    PedidoDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
    PedidoTipoCriacao?: StringFieldUpdateOperationsInput | string
    PedidoStatus?: StringFieldUpdateOperationsInput | string
    PedidoValorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ClienteId?: IntFieldUpdateOperationsInput | number
    VendedorId?: IntFieldUpdateOperationsInput | number
    ItemPedido?: ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput
    MetadadosPedido?: MetadadosPedidoUncheckedUpdateManyWithoutPedidoNestedInput
    CarregamentoPedido?: CarregamentoPedidoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoCreateWithoutCarregamentoPedidoInput = {
    PedidoId: string
    PedidoDtCriacao: Date | string
    PedidoDtImportacao?: Date | string
    PedidoTipoCriacao: string
    PedidoStatus: string
    PedidoValorTotal: Decimal | DecimalJsLike | number | string
    Cliente: ClienteCreateNestedOneWithoutPedidoInput
    Vendedor: VendedorCreateNestedOneWithoutPedidoInput
    ItemPedido?: ItemPedidoCreateNestedManyWithoutPedidoInput
    MetadadosPedido?: MetadadosPedidoCreateNestedManyWithoutPedidoInput
    PagamentoPedido?: PagamentoPedidoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutCarregamentoPedidoInput = {
    PedidoId: string
    PedidoDtCriacao: Date | string
    PedidoDtImportacao?: Date | string
    PedidoTipoCriacao: string
    PedidoStatus: string
    PedidoValorTotal: Decimal | DecimalJsLike | number | string
    ClienteId: number
    VendedorId: number
    ItemPedido?: ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput
    MetadadosPedido?: MetadadosPedidoUncheckedCreateNestedManyWithoutPedidoInput
    PagamentoPedido?: PagamentoPedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutCarregamentoPedidoInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutCarregamentoPedidoInput, PedidoUncheckedCreateWithoutCarregamentoPedidoInput>
  }

  export type PedidoUpsertWithoutCarregamentoPedidoInput = {
    update: XOR<PedidoUpdateWithoutCarregamentoPedidoInput, PedidoUncheckedUpdateWithoutCarregamentoPedidoInput>
    create: XOR<PedidoCreateWithoutCarregamentoPedidoInput, PedidoUncheckedCreateWithoutCarregamentoPedidoInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutCarregamentoPedidoInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutCarregamentoPedidoInput, PedidoUncheckedUpdateWithoutCarregamentoPedidoInput>
  }

  export type PedidoUpdateWithoutCarregamentoPedidoInput = {
    PedidoId?: StringFieldUpdateOperationsInput | string
    PedidoDtCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    PedidoDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
    PedidoTipoCriacao?: StringFieldUpdateOperationsInput | string
    PedidoStatus?: StringFieldUpdateOperationsInput | string
    PedidoValorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Cliente?: ClienteUpdateOneRequiredWithoutPedidoNestedInput
    Vendedor?: VendedorUpdateOneRequiredWithoutPedidoNestedInput
    ItemPedido?: ItemPedidoUpdateManyWithoutPedidoNestedInput
    MetadadosPedido?: MetadadosPedidoUpdateManyWithoutPedidoNestedInput
    PagamentoPedido?: PagamentoPedidoUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutCarregamentoPedidoInput = {
    PedidoId?: StringFieldUpdateOperationsInput | string
    PedidoDtCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    PedidoDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
    PedidoTipoCriacao?: StringFieldUpdateOperationsInput | string
    PedidoStatus?: StringFieldUpdateOperationsInput | string
    PedidoValorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ClienteId?: IntFieldUpdateOperationsInput | number
    VendedorId?: IntFieldUpdateOperationsInput | number
    ItemPedido?: ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput
    MetadadosPedido?: MetadadosPedidoUncheckedUpdateManyWithoutPedidoNestedInput
    PagamentoPedido?: PagamentoPedidoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoCreateManyClienteInput = {
    PedidoId: string
    PedidoDtCriacao: Date | string
    PedidoDtImportacao?: Date | string
    PedidoTipoCriacao: string
    PedidoStatus: string
    PedidoValorTotal: Decimal | DecimalJsLike | number | string
    VendedorId: number
  }

  export type PedidoUpdateWithoutClienteInput = {
    PedidoId?: StringFieldUpdateOperationsInput | string
    PedidoDtCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    PedidoDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
    PedidoTipoCriacao?: StringFieldUpdateOperationsInput | string
    PedidoStatus?: StringFieldUpdateOperationsInput | string
    PedidoValorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Vendedor?: VendedorUpdateOneRequiredWithoutPedidoNestedInput
    ItemPedido?: ItemPedidoUpdateManyWithoutPedidoNestedInput
    MetadadosPedido?: MetadadosPedidoUpdateManyWithoutPedidoNestedInput
    PagamentoPedido?: PagamentoPedidoUpdateManyWithoutPedidoNestedInput
    CarregamentoPedido?: CarregamentoPedidoUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutClienteInput = {
    PedidoId?: StringFieldUpdateOperationsInput | string
    PedidoDtCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    PedidoDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
    PedidoTipoCriacao?: StringFieldUpdateOperationsInput | string
    PedidoStatus?: StringFieldUpdateOperationsInput | string
    PedidoValorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    VendedorId?: IntFieldUpdateOperationsInput | number
    ItemPedido?: ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput
    MetadadosPedido?: MetadadosPedidoUncheckedUpdateManyWithoutPedidoNestedInput
    PagamentoPedido?: PagamentoPedidoUncheckedUpdateManyWithoutPedidoNestedInput
    CarregamentoPedido?: CarregamentoPedidoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateManyWithoutClienteInput = {
    PedidoId?: StringFieldUpdateOperationsInput | string
    PedidoDtCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    PedidoDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
    PedidoTipoCriacao?: StringFieldUpdateOperationsInput | string
    PedidoStatus?: StringFieldUpdateOperationsInput | string
    PedidoValorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    VendedorId?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoCreateManyVendedorInput = {
    PedidoId: string
    PedidoDtCriacao: Date | string
    PedidoDtImportacao?: Date | string
    PedidoTipoCriacao: string
    PedidoStatus: string
    PedidoValorTotal: Decimal | DecimalJsLike | number | string
    ClienteId: number
  }

  export type PedidoUpdateWithoutVendedorInput = {
    PedidoId?: StringFieldUpdateOperationsInput | string
    PedidoDtCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    PedidoDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
    PedidoTipoCriacao?: StringFieldUpdateOperationsInput | string
    PedidoStatus?: StringFieldUpdateOperationsInput | string
    PedidoValorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Cliente?: ClienteUpdateOneRequiredWithoutPedidoNestedInput
    ItemPedido?: ItemPedidoUpdateManyWithoutPedidoNestedInput
    MetadadosPedido?: MetadadosPedidoUpdateManyWithoutPedidoNestedInput
    PagamentoPedido?: PagamentoPedidoUpdateManyWithoutPedidoNestedInput
    CarregamentoPedido?: CarregamentoPedidoUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutVendedorInput = {
    PedidoId?: StringFieldUpdateOperationsInput | string
    PedidoDtCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    PedidoDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
    PedidoTipoCriacao?: StringFieldUpdateOperationsInput | string
    PedidoStatus?: StringFieldUpdateOperationsInput | string
    PedidoValorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ClienteId?: IntFieldUpdateOperationsInput | number
    ItemPedido?: ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput
    MetadadosPedido?: MetadadosPedidoUncheckedUpdateManyWithoutPedidoNestedInput
    PagamentoPedido?: PagamentoPedidoUncheckedUpdateManyWithoutPedidoNestedInput
    CarregamentoPedido?: CarregamentoPedidoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateManyWithoutVendedorInput = {
    PedidoId?: StringFieldUpdateOperationsInput | string
    PedidoDtCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    PedidoDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
    PedidoTipoCriacao?: StringFieldUpdateOperationsInput | string
    PedidoStatus?: StringFieldUpdateOperationsInput | string
    PedidoValorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ClienteId?: IntFieldUpdateOperationsInput | number
  }

  export type SubCategoriaCreateManyCategoriaInput = {
    SubCategoriaId: string
    SubCategoriaNome: string
    SubCategoriaDtImportacao?: Date | string
  }

  export type SubCategoriaUpdateWithoutCategoriaInput = {
    SubCategoriaId?: StringFieldUpdateOperationsInput | string
    SubCategoriaNome?: StringFieldUpdateOperationsInput | string
    SubCategoriaDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
    ItemPedido?: ItemPedidoUpdateManyWithoutSubCategoriaNestedInput
  }

  export type SubCategoriaUncheckedUpdateWithoutCategoriaInput = {
    SubCategoriaId?: StringFieldUpdateOperationsInput | string
    SubCategoriaNome?: StringFieldUpdateOperationsInput | string
    SubCategoriaDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
    ItemPedido?: ItemPedidoUncheckedUpdateManyWithoutSubCategoriaNestedInput
  }

  export type SubCategoriaUncheckedUpdateManyWithoutCategoriaInput = {
    SubCategoriaId?: StringFieldUpdateOperationsInput | string
    SubCategoriaNome?: StringFieldUpdateOperationsInput | string
    SubCategoriaDtImportacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemPedidoCreateManySubCategoriaInput = {
    ItemPedidoId: number
    PedidoId: string
    ProdutoId: string
    ItemPedidoQuantidade: number
    ItemPedidoPrecoUnitario: Decimal | DecimalJsLike | number | string
    ItemPedidoValorTotal: Decimal | DecimalJsLike | number | string
  }

  export type ItemPedidoUpdateWithoutSubCategoriaInput = {
    ItemPedidoId?: IntFieldUpdateOperationsInput | number
    ItemPedidoQuantidade?: IntFieldUpdateOperationsInput | number
    ItemPedidoPrecoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ItemPedidoValorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Pedido?: PedidoUpdateOneRequiredWithoutItemPedidoNestedInput
    Produto?: ProdutoUpdateOneRequiredWithoutItemPedidoNestedInput
  }

  export type ItemPedidoUncheckedUpdateWithoutSubCategoriaInput = {
    ItemPedidoId?: IntFieldUpdateOperationsInput | number
    PedidoId?: StringFieldUpdateOperationsInput | string
    ProdutoId?: StringFieldUpdateOperationsInput | string
    ItemPedidoQuantidade?: IntFieldUpdateOperationsInput | number
    ItemPedidoPrecoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ItemPedidoValorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ItemPedidoUncheckedUpdateManyWithoutSubCategoriaInput = {
    ItemPedidoId?: IntFieldUpdateOperationsInput | number
    PedidoId?: StringFieldUpdateOperationsInput | string
    ProdutoId?: StringFieldUpdateOperationsInput | string
    ItemPedidoQuantidade?: IntFieldUpdateOperationsInput | number
    ItemPedidoPrecoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ItemPedidoValorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ItemPedidoCreateManyProdutoInput = {
    ItemPedidoId: number
    PedidoId: string
    ItemPedidoQuantidade: number
    ItemPedidoPrecoUnitario: Decimal | DecimalJsLike | number | string
    ItemPedidoValorTotal: Decimal | DecimalJsLike | number | string
    SubCategoriaId: string
    CategoriaId: string
  }

  export type ItemPedidoUpdateWithoutProdutoInput = {
    ItemPedidoId?: IntFieldUpdateOperationsInput | number
    ItemPedidoQuantidade?: IntFieldUpdateOperationsInput | number
    ItemPedidoPrecoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ItemPedidoValorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Pedido?: PedidoUpdateOneRequiredWithoutItemPedidoNestedInput
    SubCategoria?: SubCategoriaUpdateOneRequiredWithoutItemPedidoNestedInput
  }

  export type ItemPedidoUncheckedUpdateWithoutProdutoInput = {
    ItemPedidoId?: IntFieldUpdateOperationsInput | number
    PedidoId?: StringFieldUpdateOperationsInput | string
    ItemPedidoQuantidade?: IntFieldUpdateOperationsInput | number
    ItemPedidoPrecoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ItemPedidoValorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    SubCategoriaId?: StringFieldUpdateOperationsInput | string
    CategoriaId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemPedidoUncheckedUpdateManyWithoutProdutoInput = {
    ItemPedidoId?: IntFieldUpdateOperationsInput | number
    PedidoId?: StringFieldUpdateOperationsInput | string
    ItemPedidoQuantidade?: IntFieldUpdateOperationsInput | number
    ItemPedidoPrecoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ItemPedidoValorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    SubCategoriaId?: StringFieldUpdateOperationsInput | string
    CategoriaId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemPedidoCreateManyPedidoInput = {
    ItemPedidoId: number
    ProdutoId: string
    ItemPedidoQuantidade: number
    ItemPedidoPrecoUnitario: Decimal | DecimalJsLike | number | string
    ItemPedidoValorTotal: Decimal | DecimalJsLike | number | string
    SubCategoriaId: string
    CategoriaId: string
  }

  export type MetadadosPedidoCreateManyPedidoInput = {
    MetadadosPedidoId?: string
    MetadadosSource: string
    MetadadosUserAgent: string
    MetadadosIP: string
  }

  export type PagamentoPedidoCreateManyPedidoInput = {
    PagamentoPedidoId?: string
    PagamentoMetodo: string
    PagamentoStatus: string
    PagamentoTransacao: string
  }

  export type CarregamentoPedidoCreateManyPedidoInput = {
    CarregamentoPedidoId?: string
    CarregamentoOperadora: string
    CarregamentoServico: string
    CarregamentoStatus: string
    CarregamentoCodigoRastreio: string
  }

  export type ItemPedidoUpdateWithoutPedidoInput = {
    ItemPedidoId?: IntFieldUpdateOperationsInput | number
    ItemPedidoQuantidade?: IntFieldUpdateOperationsInput | number
    ItemPedidoPrecoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ItemPedidoValorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Produto?: ProdutoUpdateOneRequiredWithoutItemPedidoNestedInput
    SubCategoria?: SubCategoriaUpdateOneRequiredWithoutItemPedidoNestedInput
  }

  export type ItemPedidoUncheckedUpdateWithoutPedidoInput = {
    ItemPedidoId?: IntFieldUpdateOperationsInput | number
    ProdutoId?: StringFieldUpdateOperationsInput | string
    ItemPedidoQuantidade?: IntFieldUpdateOperationsInput | number
    ItemPedidoPrecoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ItemPedidoValorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    SubCategoriaId?: StringFieldUpdateOperationsInput | string
    CategoriaId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemPedidoUncheckedUpdateManyWithoutPedidoInput = {
    ItemPedidoId?: IntFieldUpdateOperationsInput | number
    ProdutoId?: StringFieldUpdateOperationsInput | string
    ItemPedidoQuantidade?: IntFieldUpdateOperationsInput | number
    ItemPedidoPrecoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ItemPedidoValorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    SubCategoriaId?: StringFieldUpdateOperationsInput | string
    CategoriaId?: StringFieldUpdateOperationsInput | string
  }

  export type MetadadosPedidoUpdateWithoutPedidoInput = {
    MetadadosPedidoId?: StringFieldUpdateOperationsInput | string
    MetadadosSource?: StringFieldUpdateOperationsInput | string
    MetadadosUserAgent?: StringFieldUpdateOperationsInput | string
    MetadadosIP?: StringFieldUpdateOperationsInput | string
  }

  export type MetadadosPedidoUncheckedUpdateWithoutPedidoInput = {
    MetadadosPedidoId?: StringFieldUpdateOperationsInput | string
    MetadadosSource?: StringFieldUpdateOperationsInput | string
    MetadadosUserAgent?: StringFieldUpdateOperationsInput | string
    MetadadosIP?: StringFieldUpdateOperationsInput | string
  }

  export type MetadadosPedidoUncheckedUpdateManyWithoutPedidoInput = {
    MetadadosPedidoId?: StringFieldUpdateOperationsInput | string
    MetadadosSource?: StringFieldUpdateOperationsInput | string
    MetadadosUserAgent?: StringFieldUpdateOperationsInput | string
    MetadadosIP?: StringFieldUpdateOperationsInput | string
  }

  export type PagamentoPedidoUpdateWithoutPedidoInput = {
    PagamentoPedidoId?: StringFieldUpdateOperationsInput | string
    PagamentoMetodo?: StringFieldUpdateOperationsInput | string
    PagamentoStatus?: StringFieldUpdateOperationsInput | string
    PagamentoTransacao?: StringFieldUpdateOperationsInput | string
  }

  export type PagamentoPedidoUncheckedUpdateWithoutPedidoInput = {
    PagamentoPedidoId?: StringFieldUpdateOperationsInput | string
    PagamentoMetodo?: StringFieldUpdateOperationsInput | string
    PagamentoStatus?: StringFieldUpdateOperationsInput | string
    PagamentoTransacao?: StringFieldUpdateOperationsInput | string
  }

  export type PagamentoPedidoUncheckedUpdateManyWithoutPedidoInput = {
    PagamentoPedidoId?: StringFieldUpdateOperationsInput | string
    PagamentoMetodo?: StringFieldUpdateOperationsInput | string
    PagamentoStatus?: StringFieldUpdateOperationsInput | string
    PagamentoTransacao?: StringFieldUpdateOperationsInput | string
  }

  export type CarregamentoPedidoUpdateWithoutPedidoInput = {
    CarregamentoPedidoId?: StringFieldUpdateOperationsInput | string
    CarregamentoOperadora?: StringFieldUpdateOperationsInput | string
    CarregamentoServico?: StringFieldUpdateOperationsInput | string
    CarregamentoStatus?: StringFieldUpdateOperationsInput | string
    CarregamentoCodigoRastreio?: StringFieldUpdateOperationsInput | string
  }

  export type CarregamentoPedidoUncheckedUpdateWithoutPedidoInput = {
    CarregamentoPedidoId?: StringFieldUpdateOperationsInput | string
    CarregamentoOperadora?: StringFieldUpdateOperationsInput | string
    CarregamentoServico?: StringFieldUpdateOperationsInput | string
    CarregamentoStatus?: StringFieldUpdateOperationsInput | string
    CarregamentoCodigoRastreio?: StringFieldUpdateOperationsInput | string
  }

  export type CarregamentoPedidoUncheckedUpdateManyWithoutPedidoInput = {
    CarregamentoPedidoId?: StringFieldUpdateOperationsInput | string
    CarregamentoOperadora?: StringFieldUpdateOperationsInput | string
    CarregamentoServico?: StringFieldUpdateOperationsInput | string
    CarregamentoStatus?: StringFieldUpdateOperationsInput | string
    CarregamentoCodigoRastreio?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}