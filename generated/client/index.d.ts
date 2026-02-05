
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Repository
 * 
 */
export type Repository = $Result.DefaultSelection<Prisma.$RepositoryPayload>
/**
 * Model PullRequest
 * 
 */
export type PullRequest = $Result.DefaultSelection<Prisma.$PullRequestPayload>
/**
 * Model PullRequestRisk
 * 
 */
export type PullRequestRisk = $Result.DefaultSelection<Prisma.$PullRequestRiskPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.repository`: Exposes CRUD operations for the **Repository** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Repositories
    * const repositories = await prisma.repository.findMany()
    * ```
    */
  get repository(): Prisma.RepositoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pullRequest`: Exposes CRUD operations for the **PullRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PullRequests
    * const pullRequests = await prisma.pullRequest.findMany()
    * ```
    */
  get pullRequest(): Prisma.PullRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pullRequestRisk`: Exposes CRUD operations for the **PullRequestRisk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PullRequestRisks
    * const pullRequestRisks = await prisma.pullRequestRisk.findMany()
    * ```
    */
  get pullRequestRisk(): Prisma.PullRequestRiskDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
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
      (Without<T, U> & U) | (Without<U, T> & T)
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
    User: 'User',
    Repository: 'Repository',
    PullRequest: 'PullRequest',
    PullRequestRisk: 'PullRequestRisk'
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
      modelProps: "user" | "repository" | "pullRequest" | "pullRequestRisk"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Repository: {
        payload: Prisma.$RepositoryPayload<ExtArgs>
        fields: Prisma.RepositoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RepositoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RepositoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          findFirst: {
            args: Prisma.RepositoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RepositoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          findMany: {
            args: Prisma.RepositoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>[]
          }
          create: {
            args: Prisma.RepositoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          createMany: {
            args: Prisma.RepositoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RepositoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>[]
          }
          delete: {
            args: Prisma.RepositoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          update: {
            args: Prisma.RepositoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          deleteMany: {
            args: Prisma.RepositoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RepositoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RepositoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>[]
          }
          upsert: {
            args: Prisma.RepositoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          aggregate: {
            args: Prisma.RepositoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepository>
          }
          groupBy: {
            args: Prisma.RepositoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<RepositoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.RepositoryCountArgs<ExtArgs>
            result: $Utils.Optional<RepositoryCountAggregateOutputType> | number
          }
        }
      }
      PullRequest: {
        payload: Prisma.$PullRequestPayload<ExtArgs>
        fields: Prisma.PullRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PullRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PullRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload>
          }
          findFirst: {
            args: Prisma.PullRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PullRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload>
          }
          findMany: {
            args: Prisma.PullRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload>[]
          }
          create: {
            args: Prisma.PullRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload>
          }
          createMany: {
            args: Prisma.PullRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PullRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload>[]
          }
          delete: {
            args: Prisma.PullRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload>
          }
          update: {
            args: Prisma.PullRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload>
          }
          deleteMany: {
            args: Prisma.PullRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PullRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PullRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload>[]
          }
          upsert: {
            args: Prisma.PullRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload>
          }
          aggregate: {
            args: Prisma.PullRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePullRequest>
          }
          groupBy: {
            args: Prisma.PullRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<PullRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.PullRequestCountArgs<ExtArgs>
            result: $Utils.Optional<PullRequestCountAggregateOutputType> | number
          }
        }
      }
      PullRequestRisk: {
        payload: Prisma.$PullRequestRiskPayload<ExtArgs>
        fields: Prisma.PullRequestRiskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PullRequestRiskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestRiskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PullRequestRiskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestRiskPayload>
          }
          findFirst: {
            args: Prisma.PullRequestRiskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestRiskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PullRequestRiskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestRiskPayload>
          }
          findMany: {
            args: Prisma.PullRequestRiskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestRiskPayload>[]
          }
          create: {
            args: Prisma.PullRequestRiskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestRiskPayload>
          }
          createMany: {
            args: Prisma.PullRequestRiskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PullRequestRiskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestRiskPayload>[]
          }
          delete: {
            args: Prisma.PullRequestRiskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestRiskPayload>
          }
          update: {
            args: Prisma.PullRequestRiskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestRiskPayload>
          }
          deleteMany: {
            args: Prisma.PullRequestRiskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PullRequestRiskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PullRequestRiskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestRiskPayload>[]
          }
          upsert: {
            args: Prisma.PullRequestRiskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestRiskPayload>
          }
          aggregate: {
            args: Prisma.PullRequestRiskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePullRequestRisk>
          }
          groupBy: {
            args: Prisma.PullRequestRiskGroupByArgs<ExtArgs>
            result: $Utils.Optional<PullRequestRiskGroupByOutputType>[]
          }
          count: {
            args: Prisma.PullRequestRiskCountArgs<ExtArgs>
            result: $Utils.Optional<PullRequestRiskCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
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
    user?: UserOmit
    repository?: RepositoryOmit
    pullRequest?: PullRequestOmit
    pullRequestRisk?: PullRequestRiskOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    repos: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repos?: boolean | UserCountOutputTypeCountReposArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepositoryWhereInput
  }


  /**
   * Count Type RepositoryCountOutputType
   */

  export type RepositoryCountOutputType = {
    pullRequests: number
  }

  export type RepositoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pullRequests?: boolean | RepositoryCountOutputTypeCountPullRequestsArgs
  }

  // Custom InputTypes
  /**
   * RepositoryCountOutputType without action
   */
  export type RepositoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepositoryCountOutputType
     */
    select?: RepositoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RepositoryCountOutputType without action
   */
  export type RepositoryCountOutputTypeCountPullRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PullRequestWhereInput
  }


  /**
   * Count Type PullRequestCountOutputType
   */

  export type PullRequestCountOutputType = {
    risk: number
  }

  export type PullRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    risk?: boolean | PullRequestCountOutputTypeCountRiskArgs
  }

  // Custom InputTypes
  /**
   * PullRequestCountOutputType without action
   */
  export type PullRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequestCountOutputType
     */
    select?: PullRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PullRequestCountOutputType without action
   */
  export type PullRequestCountOutputTypeCountRiskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PullRequestRiskWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    githubId: string | null
    name: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    githubId: string | null
    name: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    githubId: number
    name: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    githubId?: true
    name?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    githubId?: true
    name?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    githubId?: true
    name?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    githubId: string
    name: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    githubId?: boolean
    name?: boolean
    repos?: boolean | User$reposArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    githubId?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    githubId?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    githubId?: boolean
    name?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "githubId" | "name", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repos?: boolean | User$reposArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      repos: Prisma.$RepositoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      githubId: string
      name: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    repos<T extends User$reposArgs<ExtArgs> = {}>(args?: Subset<T, User$reposArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly githubId: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.repos
   */
  export type User$reposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    where?: RepositoryWhereInput
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    cursor?: RepositoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepositoryScalarFieldEnum | RepositoryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Repository
   */

  export type AggregateRepository = {
    _count: RepositoryCountAggregateOutputType | null
    _avg: RepositoryAvgAggregateOutputType | null
    _sum: RepositorySumAggregateOutputType | null
    _min: RepositoryMinAggregateOutputType | null
    _max: RepositoryMaxAggregateOutputType | null
  }

  export type RepositoryAvgAggregateOutputType = {
    githubRepoId: number | null
    installationId: number | null
  }

  export type RepositorySumAggregateOutputType = {
    githubRepoId: number | null
    installationId: number | null
  }

  export type RepositoryMinAggregateOutputType = {
    id: string | null
    githubRepoId: number | null
    fullName: string | null
    owner: string | null
    installationId: number | null
    userId: string | null
    createdAt: Date | null
  }

  export type RepositoryMaxAggregateOutputType = {
    id: string | null
    githubRepoId: number | null
    fullName: string | null
    owner: string | null
    installationId: number | null
    userId: string | null
    createdAt: Date | null
  }

  export type RepositoryCountAggregateOutputType = {
    id: number
    githubRepoId: number
    fullName: number
    owner: number
    installationId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type RepositoryAvgAggregateInputType = {
    githubRepoId?: true
    installationId?: true
  }

  export type RepositorySumAggregateInputType = {
    githubRepoId?: true
    installationId?: true
  }

  export type RepositoryMinAggregateInputType = {
    id?: true
    githubRepoId?: true
    fullName?: true
    owner?: true
    installationId?: true
    userId?: true
    createdAt?: true
  }

  export type RepositoryMaxAggregateInputType = {
    id?: true
    githubRepoId?: true
    fullName?: true
    owner?: true
    installationId?: true
    userId?: true
    createdAt?: true
  }

  export type RepositoryCountAggregateInputType = {
    id?: true
    githubRepoId?: true
    fullName?: true
    owner?: true
    installationId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type RepositoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Repository to aggregate.
     */
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     */
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Repositories
    **/
    _count?: true | RepositoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RepositoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RepositorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepositoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepositoryMaxAggregateInputType
  }

  export type GetRepositoryAggregateType<T extends RepositoryAggregateArgs> = {
        [P in keyof T & keyof AggregateRepository]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepository[P]>
      : GetScalarType<T[P], AggregateRepository[P]>
  }




  export type RepositoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepositoryWhereInput
    orderBy?: RepositoryOrderByWithAggregationInput | RepositoryOrderByWithAggregationInput[]
    by: RepositoryScalarFieldEnum[] | RepositoryScalarFieldEnum
    having?: RepositoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepositoryCountAggregateInputType | true
    _avg?: RepositoryAvgAggregateInputType
    _sum?: RepositorySumAggregateInputType
    _min?: RepositoryMinAggregateInputType
    _max?: RepositoryMaxAggregateInputType
  }

  export type RepositoryGroupByOutputType = {
    id: string
    githubRepoId: number
    fullName: string
    owner: string
    installationId: number
    userId: string
    createdAt: Date
    _count: RepositoryCountAggregateOutputType | null
    _avg: RepositoryAvgAggregateOutputType | null
    _sum: RepositorySumAggregateOutputType | null
    _min: RepositoryMinAggregateOutputType | null
    _max: RepositoryMaxAggregateOutputType | null
  }

  type GetRepositoryGroupByPayload<T extends RepositoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepositoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepositoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepositoryGroupByOutputType[P]>
            : GetScalarType<T[P], RepositoryGroupByOutputType[P]>
        }
      >
    >


  export type RepositorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    githubRepoId?: boolean
    fullName?: boolean
    owner?: boolean
    installationId?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    pullRequests?: boolean | Repository$pullRequestsArgs<ExtArgs>
    _count?: boolean | RepositoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repository"]>

  export type RepositorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    githubRepoId?: boolean
    fullName?: boolean
    owner?: boolean
    installationId?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repository"]>

  export type RepositorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    githubRepoId?: boolean
    fullName?: boolean
    owner?: boolean
    installationId?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repository"]>

  export type RepositorySelectScalar = {
    id?: boolean
    githubRepoId?: boolean
    fullName?: boolean
    owner?: boolean
    installationId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type RepositoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "githubRepoId" | "fullName" | "owner" | "installationId" | "userId" | "createdAt", ExtArgs["result"]["repository"]>
  export type RepositoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    pullRequests?: boolean | Repository$pullRequestsArgs<ExtArgs>
    _count?: boolean | RepositoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RepositoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RepositoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RepositoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Repository"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      pullRequests: Prisma.$PullRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      githubRepoId: number
      fullName: string
      owner: string
      installationId: number
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["repository"]>
    composites: {}
  }

  type RepositoryGetPayload<S extends boolean | null | undefined | RepositoryDefaultArgs> = $Result.GetResult<Prisma.$RepositoryPayload, S>

  type RepositoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RepositoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RepositoryCountAggregateInputType | true
    }

  export interface RepositoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Repository'], meta: { name: 'Repository' } }
    /**
     * Find zero or one Repository that matches the filter.
     * @param {RepositoryFindUniqueArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RepositoryFindUniqueArgs>(args: SelectSubset<T, RepositoryFindUniqueArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Repository that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RepositoryFindUniqueOrThrowArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RepositoryFindUniqueOrThrowArgs>(args: SelectSubset<T, RepositoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Repository that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryFindFirstArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RepositoryFindFirstArgs>(args?: SelectSubset<T, RepositoryFindFirstArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Repository that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryFindFirstOrThrowArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RepositoryFindFirstOrThrowArgs>(args?: SelectSubset<T, RepositoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Repositories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Repositories
     * const repositories = await prisma.repository.findMany()
     * 
     * // Get first 10 Repositories
     * const repositories = await prisma.repository.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const repositoryWithIdOnly = await prisma.repository.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RepositoryFindManyArgs>(args?: SelectSubset<T, RepositoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Repository.
     * @param {RepositoryCreateArgs} args - Arguments to create a Repository.
     * @example
     * // Create one Repository
     * const Repository = await prisma.repository.create({
     *   data: {
     *     // ... data to create a Repository
     *   }
     * })
     * 
     */
    create<T extends RepositoryCreateArgs>(args: SelectSubset<T, RepositoryCreateArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Repositories.
     * @param {RepositoryCreateManyArgs} args - Arguments to create many Repositories.
     * @example
     * // Create many Repositories
     * const repository = await prisma.repository.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RepositoryCreateManyArgs>(args?: SelectSubset<T, RepositoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Repositories and returns the data saved in the database.
     * @param {RepositoryCreateManyAndReturnArgs} args - Arguments to create many Repositories.
     * @example
     * // Create many Repositories
     * const repository = await prisma.repository.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Repositories and only return the `id`
     * const repositoryWithIdOnly = await prisma.repository.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RepositoryCreateManyAndReturnArgs>(args?: SelectSubset<T, RepositoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Repository.
     * @param {RepositoryDeleteArgs} args - Arguments to delete one Repository.
     * @example
     * // Delete one Repository
     * const Repository = await prisma.repository.delete({
     *   where: {
     *     // ... filter to delete one Repository
     *   }
     * })
     * 
     */
    delete<T extends RepositoryDeleteArgs>(args: SelectSubset<T, RepositoryDeleteArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Repository.
     * @param {RepositoryUpdateArgs} args - Arguments to update one Repository.
     * @example
     * // Update one Repository
     * const repository = await prisma.repository.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RepositoryUpdateArgs>(args: SelectSubset<T, RepositoryUpdateArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Repositories.
     * @param {RepositoryDeleteManyArgs} args - Arguments to filter Repositories to delete.
     * @example
     * // Delete a few Repositories
     * const { count } = await prisma.repository.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RepositoryDeleteManyArgs>(args?: SelectSubset<T, RepositoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repositories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Repositories
     * const repository = await prisma.repository.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RepositoryUpdateManyArgs>(args: SelectSubset<T, RepositoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repositories and returns the data updated in the database.
     * @param {RepositoryUpdateManyAndReturnArgs} args - Arguments to update many Repositories.
     * @example
     * // Update many Repositories
     * const repository = await prisma.repository.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Repositories and only return the `id`
     * const repositoryWithIdOnly = await prisma.repository.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends RepositoryUpdateManyAndReturnArgs>(args: SelectSubset<T, RepositoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Repository.
     * @param {RepositoryUpsertArgs} args - Arguments to update or create a Repository.
     * @example
     * // Update or create a Repository
     * const repository = await prisma.repository.upsert({
     *   create: {
     *     // ... data to create a Repository
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Repository we want to update
     *   }
     * })
     */
    upsert<T extends RepositoryUpsertArgs>(args: SelectSubset<T, RepositoryUpsertArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Repositories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryCountArgs} args - Arguments to filter Repositories to count.
     * @example
     * // Count the number of Repositories
     * const count = await prisma.repository.count({
     *   where: {
     *     // ... the filter for the Repositories we want to count
     *   }
     * })
    **/
    count<T extends RepositoryCountArgs>(
      args?: Subset<T, RepositoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepositoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Repository.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RepositoryAggregateArgs>(args: Subset<T, RepositoryAggregateArgs>): Prisma.PrismaPromise<GetRepositoryAggregateType<T>>

    /**
     * Group by Repository.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryGroupByArgs} args - Group by arguments.
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
      T extends RepositoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RepositoryGroupByArgs['orderBy'] }
        : { orderBy?: RepositoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RepositoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepositoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Repository model
   */
  readonly fields: RepositoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Repository.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RepositoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pullRequests<T extends Repository$pullRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Repository$pullRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Repository model
   */
  interface RepositoryFieldRefs {
    readonly id: FieldRef<"Repository", 'String'>
    readonly githubRepoId: FieldRef<"Repository", 'Int'>
    readonly fullName: FieldRef<"Repository", 'String'>
    readonly owner: FieldRef<"Repository", 'String'>
    readonly installationId: FieldRef<"Repository", 'Int'>
    readonly userId: FieldRef<"Repository", 'String'>
    readonly createdAt: FieldRef<"Repository", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Repository findUnique
   */
  export type RepositoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repository to fetch.
     */
    where: RepositoryWhereUniqueInput
  }

  /**
   * Repository findUniqueOrThrow
   */
  export type RepositoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repository to fetch.
     */
    where: RepositoryWhereUniqueInput
  }

  /**
   * Repository findFirst
   */
  export type RepositoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repository to fetch.
     */
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     */
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Repositories.
     */
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repositories.
     */
    distinct?: RepositoryScalarFieldEnum | RepositoryScalarFieldEnum[]
  }

  /**
   * Repository findFirstOrThrow
   */
  export type RepositoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repository to fetch.
     */
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     */
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Repositories.
     */
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repositories.
     */
    distinct?: RepositoryScalarFieldEnum | RepositoryScalarFieldEnum[]
  }

  /**
   * Repository findMany
   */
  export type RepositoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repositories to fetch.
     */
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     */
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Repositories.
     */
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     */
    skip?: number
    distinct?: RepositoryScalarFieldEnum | RepositoryScalarFieldEnum[]
  }

  /**
   * Repository create
   */
  export type RepositoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Repository.
     */
    data: XOR<RepositoryCreateInput, RepositoryUncheckedCreateInput>
  }

  /**
   * Repository createMany
   */
  export type RepositoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Repositories.
     */
    data: RepositoryCreateManyInput | RepositoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Repository createManyAndReturn
   */
  export type RepositoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * The data used to create many Repositories.
     */
    data: RepositoryCreateManyInput | RepositoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Repository update
   */
  export type RepositoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Repository.
     */
    data: XOR<RepositoryUpdateInput, RepositoryUncheckedUpdateInput>
    /**
     * Choose, which Repository to update.
     */
    where: RepositoryWhereUniqueInput
  }

  /**
   * Repository updateMany
   */
  export type RepositoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Repositories.
     */
    data: XOR<RepositoryUpdateManyMutationInput, RepositoryUncheckedUpdateManyInput>
    /**
     * Filter which Repositories to update
     */
    where?: RepositoryWhereInput
    /**
     * Limit how many Repositories to update.
     */
    limit?: number
  }

  /**
   * Repository updateManyAndReturn
   */
  export type RepositoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * The data used to update Repositories.
     */
    data: XOR<RepositoryUpdateManyMutationInput, RepositoryUncheckedUpdateManyInput>
    /**
     * Filter which Repositories to update
     */
    where?: RepositoryWhereInput
    /**
     * Limit how many Repositories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Repository upsert
   */
  export type RepositoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Repository to update in case it exists.
     */
    where: RepositoryWhereUniqueInput
    /**
     * In case the Repository found by the `where` argument doesn't exist, create a new Repository with this data.
     */
    create: XOR<RepositoryCreateInput, RepositoryUncheckedCreateInput>
    /**
     * In case the Repository was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RepositoryUpdateInput, RepositoryUncheckedUpdateInput>
  }

  /**
   * Repository delete
   */
  export type RepositoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter which Repository to delete.
     */
    where: RepositoryWhereUniqueInput
  }

  /**
   * Repository deleteMany
   */
  export type RepositoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Repositories to delete
     */
    where?: RepositoryWhereInput
    /**
     * Limit how many Repositories to delete.
     */
    limit?: number
  }

  /**
   * Repository.pullRequests
   */
  export type Repository$pullRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    where?: PullRequestWhereInput
    orderBy?: PullRequestOrderByWithRelationInput | PullRequestOrderByWithRelationInput[]
    cursor?: PullRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PullRequestScalarFieldEnum | PullRequestScalarFieldEnum[]
  }

  /**
   * Repository without action
   */
  export type RepositoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
  }


  /**
   * Model PullRequest
   */

  export type AggregatePullRequest = {
    _count: PullRequestCountAggregateOutputType | null
    _avg: PullRequestAvgAggregateOutputType | null
    _sum: PullRequestSumAggregateOutputType | null
    _min: PullRequestMinAggregateOutputType | null
    _max: PullRequestMaxAggregateOutputType | null
  }

  export type PullRequestAvgAggregateOutputType = {
    githubPrId: number | null
    prNumber: number | null
    additions: number | null
    deletions: number | null
    changedFiles: number | null
  }

  export type PullRequestSumAggregateOutputType = {
    githubPrId: bigint | null
    prNumber: number | null
    additions: number | null
    deletions: number | null
    changedFiles: number | null
  }

  export type PullRequestMinAggregateOutputType = {
    id: string | null
    githubPrId: bigint | null
    prNumber: number | null
    title: string | null
    state: string | null
    author: string | null
    additions: number | null
    deletions: number | null
    changedFiles: number | null
    repoId: string | null
    createdAt: Date | null
  }

  export type PullRequestMaxAggregateOutputType = {
    id: string | null
    githubPrId: bigint | null
    prNumber: number | null
    title: string | null
    state: string | null
    author: string | null
    additions: number | null
    deletions: number | null
    changedFiles: number | null
    repoId: string | null
    createdAt: Date | null
  }

  export type PullRequestCountAggregateOutputType = {
    id: number
    githubPrId: number
    prNumber: number
    title: number
    state: number
    author: number
    additions: number
    deletions: number
    changedFiles: number
    repoId: number
    createdAt: number
    _all: number
  }


  export type PullRequestAvgAggregateInputType = {
    githubPrId?: true
    prNumber?: true
    additions?: true
    deletions?: true
    changedFiles?: true
  }

  export type PullRequestSumAggregateInputType = {
    githubPrId?: true
    prNumber?: true
    additions?: true
    deletions?: true
    changedFiles?: true
  }

  export type PullRequestMinAggregateInputType = {
    id?: true
    githubPrId?: true
    prNumber?: true
    title?: true
    state?: true
    author?: true
    additions?: true
    deletions?: true
    changedFiles?: true
    repoId?: true
    createdAt?: true
  }

  export type PullRequestMaxAggregateInputType = {
    id?: true
    githubPrId?: true
    prNumber?: true
    title?: true
    state?: true
    author?: true
    additions?: true
    deletions?: true
    changedFiles?: true
    repoId?: true
    createdAt?: true
  }

  export type PullRequestCountAggregateInputType = {
    id?: true
    githubPrId?: true
    prNumber?: true
    title?: true
    state?: true
    author?: true
    additions?: true
    deletions?: true
    changedFiles?: true
    repoId?: true
    createdAt?: true
    _all?: true
  }

  export type PullRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PullRequest to aggregate.
     */
    where?: PullRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PullRequests to fetch.
     */
    orderBy?: PullRequestOrderByWithRelationInput | PullRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PullRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PullRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PullRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PullRequests
    **/
    _count?: true | PullRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PullRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PullRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PullRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PullRequestMaxAggregateInputType
  }

  export type GetPullRequestAggregateType<T extends PullRequestAggregateArgs> = {
        [P in keyof T & keyof AggregatePullRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePullRequest[P]>
      : GetScalarType<T[P], AggregatePullRequest[P]>
  }




  export type PullRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PullRequestWhereInput
    orderBy?: PullRequestOrderByWithAggregationInput | PullRequestOrderByWithAggregationInput[]
    by: PullRequestScalarFieldEnum[] | PullRequestScalarFieldEnum
    having?: PullRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PullRequestCountAggregateInputType | true
    _avg?: PullRequestAvgAggregateInputType
    _sum?: PullRequestSumAggregateInputType
    _min?: PullRequestMinAggregateInputType
    _max?: PullRequestMaxAggregateInputType
  }

  export type PullRequestGroupByOutputType = {
    id: string
    githubPrId: bigint
    prNumber: number
    title: string
    state: string
    author: string
    additions: number
    deletions: number
    changedFiles: number
    repoId: string
    createdAt: Date
    _count: PullRequestCountAggregateOutputType | null
    _avg: PullRequestAvgAggregateOutputType | null
    _sum: PullRequestSumAggregateOutputType | null
    _min: PullRequestMinAggregateOutputType | null
    _max: PullRequestMaxAggregateOutputType | null
  }

  type GetPullRequestGroupByPayload<T extends PullRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PullRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PullRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PullRequestGroupByOutputType[P]>
            : GetScalarType<T[P], PullRequestGroupByOutputType[P]>
        }
      >
    >


  export type PullRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    githubPrId?: boolean
    prNumber?: boolean
    title?: boolean
    state?: boolean
    author?: boolean
    additions?: boolean
    deletions?: boolean
    changedFiles?: boolean
    repoId?: boolean
    createdAt?: boolean
    repository?: boolean | RepositoryDefaultArgs<ExtArgs>
    risk?: boolean | PullRequest$riskArgs<ExtArgs>
    _count?: boolean | PullRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pullRequest"]>

  export type PullRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    githubPrId?: boolean
    prNumber?: boolean
    title?: boolean
    state?: boolean
    author?: boolean
    additions?: boolean
    deletions?: boolean
    changedFiles?: boolean
    repoId?: boolean
    createdAt?: boolean
    repository?: boolean | RepositoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pullRequest"]>

  export type PullRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    githubPrId?: boolean
    prNumber?: boolean
    title?: boolean
    state?: boolean
    author?: boolean
    additions?: boolean
    deletions?: boolean
    changedFiles?: boolean
    repoId?: boolean
    createdAt?: boolean
    repository?: boolean | RepositoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pullRequest"]>

  export type PullRequestSelectScalar = {
    id?: boolean
    githubPrId?: boolean
    prNumber?: boolean
    title?: boolean
    state?: boolean
    author?: boolean
    additions?: boolean
    deletions?: boolean
    changedFiles?: boolean
    repoId?: boolean
    createdAt?: boolean
  }

  export type PullRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "githubPrId" | "prNumber" | "title" | "state" | "author" | "additions" | "deletions" | "changedFiles" | "repoId" | "createdAt", ExtArgs["result"]["pullRequest"]>
  export type PullRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repository?: boolean | RepositoryDefaultArgs<ExtArgs>
    risk?: boolean | PullRequest$riskArgs<ExtArgs>
    _count?: boolean | PullRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PullRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repository?: boolean | RepositoryDefaultArgs<ExtArgs>
  }
  export type PullRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repository?: boolean | RepositoryDefaultArgs<ExtArgs>
  }

  export type $PullRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PullRequest"
    objects: {
      repository: Prisma.$RepositoryPayload<ExtArgs>
      risk: Prisma.$PullRequestRiskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      githubPrId: bigint
      prNumber: number
      title: string
      state: string
      author: string
      additions: number
      deletions: number
      changedFiles: number
      repoId: string
      createdAt: Date
    }, ExtArgs["result"]["pullRequest"]>
    composites: {}
  }

  type PullRequestGetPayload<S extends boolean | null | undefined | PullRequestDefaultArgs> = $Result.GetResult<Prisma.$PullRequestPayload, S>

  type PullRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PullRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PullRequestCountAggregateInputType | true
    }

  export interface PullRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PullRequest'], meta: { name: 'PullRequest' } }
    /**
     * Find zero or one PullRequest that matches the filter.
     * @param {PullRequestFindUniqueArgs} args - Arguments to find a PullRequest
     * @example
     * // Get one PullRequest
     * const pullRequest = await prisma.pullRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PullRequestFindUniqueArgs>(args: SelectSubset<T, PullRequestFindUniqueArgs<ExtArgs>>): Prisma__PullRequestClient<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PullRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PullRequestFindUniqueOrThrowArgs} args - Arguments to find a PullRequest
     * @example
     * // Get one PullRequest
     * const pullRequest = await prisma.pullRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PullRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, PullRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PullRequestClient<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PullRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestFindFirstArgs} args - Arguments to find a PullRequest
     * @example
     * // Get one PullRequest
     * const pullRequest = await prisma.pullRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PullRequestFindFirstArgs>(args?: SelectSubset<T, PullRequestFindFirstArgs<ExtArgs>>): Prisma__PullRequestClient<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PullRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestFindFirstOrThrowArgs} args - Arguments to find a PullRequest
     * @example
     * // Get one PullRequest
     * const pullRequest = await prisma.pullRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PullRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, PullRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__PullRequestClient<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PullRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PullRequests
     * const pullRequests = await prisma.pullRequest.findMany()
     * 
     * // Get first 10 PullRequests
     * const pullRequests = await prisma.pullRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pullRequestWithIdOnly = await prisma.pullRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PullRequestFindManyArgs>(args?: SelectSubset<T, PullRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PullRequest.
     * @param {PullRequestCreateArgs} args - Arguments to create a PullRequest.
     * @example
     * // Create one PullRequest
     * const PullRequest = await prisma.pullRequest.create({
     *   data: {
     *     // ... data to create a PullRequest
     *   }
     * })
     * 
     */
    create<T extends PullRequestCreateArgs>(args: SelectSubset<T, PullRequestCreateArgs<ExtArgs>>): Prisma__PullRequestClient<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PullRequests.
     * @param {PullRequestCreateManyArgs} args - Arguments to create many PullRequests.
     * @example
     * // Create many PullRequests
     * const pullRequest = await prisma.pullRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PullRequestCreateManyArgs>(args?: SelectSubset<T, PullRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PullRequests and returns the data saved in the database.
     * @param {PullRequestCreateManyAndReturnArgs} args - Arguments to create many PullRequests.
     * @example
     * // Create many PullRequests
     * const pullRequest = await prisma.pullRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PullRequests and only return the `id`
     * const pullRequestWithIdOnly = await prisma.pullRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PullRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, PullRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PullRequest.
     * @param {PullRequestDeleteArgs} args - Arguments to delete one PullRequest.
     * @example
     * // Delete one PullRequest
     * const PullRequest = await prisma.pullRequest.delete({
     *   where: {
     *     // ... filter to delete one PullRequest
     *   }
     * })
     * 
     */
    delete<T extends PullRequestDeleteArgs>(args: SelectSubset<T, PullRequestDeleteArgs<ExtArgs>>): Prisma__PullRequestClient<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PullRequest.
     * @param {PullRequestUpdateArgs} args - Arguments to update one PullRequest.
     * @example
     * // Update one PullRequest
     * const pullRequest = await prisma.pullRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PullRequestUpdateArgs>(args: SelectSubset<T, PullRequestUpdateArgs<ExtArgs>>): Prisma__PullRequestClient<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PullRequests.
     * @param {PullRequestDeleteManyArgs} args - Arguments to filter PullRequests to delete.
     * @example
     * // Delete a few PullRequests
     * const { count } = await prisma.pullRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PullRequestDeleteManyArgs>(args?: SelectSubset<T, PullRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PullRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PullRequests
     * const pullRequest = await prisma.pullRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PullRequestUpdateManyArgs>(args: SelectSubset<T, PullRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PullRequests and returns the data updated in the database.
     * @param {PullRequestUpdateManyAndReturnArgs} args - Arguments to update many PullRequests.
     * @example
     * // Update many PullRequests
     * const pullRequest = await prisma.pullRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PullRequests and only return the `id`
     * const pullRequestWithIdOnly = await prisma.pullRequest.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends PullRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, PullRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PullRequest.
     * @param {PullRequestUpsertArgs} args - Arguments to update or create a PullRequest.
     * @example
     * // Update or create a PullRequest
     * const pullRequest = await prisma.pullRequest.upsert({
     *   create: {
     *     // ... data to create a PullRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PullRequest we want to update
     *   }
     * })
     */
    upsert<T extends PullRequestUpsertArgs>(args: SelectSubset<T, PullRequestUpsertArgs<ExtArgs>>): Prisma__PullRequestClient<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PullRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestCountArgs} args - Arguments to filter PullRequests to count.
     * @example
     * // Count the number of PullRequests
     * const count = await prisma.pullRequest.count({
     *   where: {
     *     // ... the filter for the PullRequests we want to count
     *   }
     * })
    **/
    count<T extends PullRequestCountArgs>(
      args?: Subset<T, PullRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PullRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PullRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PullRequestAggregateArgs>(args: Subset<T, PullRequestAggregateArgs>): Prisma.PrismaPromise<GetPullRequestAggregateType<T>>

    /**
     * Group by PullRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestGroupByArgs} args - Group by arguments.
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
      T extends PullRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PullRequestGroupByArgs['orderBy'] }
        : { orderBy?: PullRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PullRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPullRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PullRequest model
   */
  readonly fields: PullRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PullRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PullRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    repository<T extends RepositoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RepositoryDefaultArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    risk<T extends PullRequest$riskArgs<ExtArgs> = {}>(args?: Subset<T, PullRequest$riskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PullRequestRiskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PullRequest model
   */
  interface PullRequestFieldRefs {
    readonly id: FieldRef<"PullRequest", 'String'>
    readonly githubPrId: FieldRef<"PullRequest", 'BigInt'>
    readonly prNumber: FieldRef<"PullRequest", 'Int'>
    readonly title: FieldRef<"PullRequest", 'String'>
    readonly state: FieldRef<"PullRequest", 'String'>
    readonly author: FieldRef<"PullRequest", 'String'>
    readonly additions: FieldRef<"PullRequest", 'Int'>
    readonly deletions: FieldRef<"PullRequest", 'Int'>
    readonly changedFiles: FieldRef<"PullRequest", 'Int'>
    readonly repoId: FieldRef<"PullRequest", 'String'>
    readonly createdAt: FieldRef<"PullRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PullRequest findUnique
   */
  export type PullRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    /**
     * Filter, which PullRequest to fetch.
     */
    where: PullRequestWhereUniqueInput
  }

  /**
   * PullRequest findUniqueOrThrow
   */
  export type PullRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    /**
     * Filter, which PullRequest to fetch.
     */
    where: PullRequestWhereUniqueInput
  }

  /**
   * PullRequest findFirst
   */
  export type PullRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    /**
     * Filter, which PullRequest to fetch.
     */
    where?: PullRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PullRequests to fetch.
     */
    orderBy?: PullRequestOrderByWithRelationInput | PullRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PullRequests.
     */
    cursor?: PullRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PullRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PullRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PullRequests.
     */
    distinct?: PullRequestScalarFieldEnum | PullRequestScalarFieldEnum[]
  }

  /**
   * PullRequest findFirstOrThrow
   */
  export type PullRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    /**
     * Filter, which PullRequest to fetch.
     */
    where?: PullRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PullRequests to fetch.
     */
    orderBy?: PullRequestOrderByWithRelationInput | PullRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PullRequests.
     */
    cursor?: PullRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PullRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PullRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PullRequests.
     */
    distinct?: PullRequestScalarFieldEnum | PullRequestScalarFieldEnum[]
  }

  /**
   * PullRequest findMany
   */
  export type PullRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    /**
     * Filter, which PullRequests to fetch.
     */
    where?: PullRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PullRequests to fetch.
     */
    orderBy?: PullRequestOrderByWithRelationInput | PullRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PullRequests.
     */
    cursor?: PullRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PullRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PullRequests.
     */
    skip?: number
    distinct?: PullRequestScalarFieldEnum | PullRequestScalarFieldEnum[]
  }

  /**
   * PullRequest create
   */
  export type PullRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a PullRequest.
     */
    data: XOR<PullRequestCreateInput, PullRequestUncheckedCreateInput>
  }

  /**
   * PullRequest createMany
   */
  export type PullRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PullRequests.
     */
    data: PullRequestCreateManyInput | PullRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PullRequest createManyAndReturn
   */
  export type PullRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * The data used to create many PullRequests.
     */
    data: PullRequestCreateManyInput | PullRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PullRequest update
   */
  export type PullRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a PullRequest.
     */
    data: XOR<PullRequestUpdateInput, PullRequestUncheckedUpdateInput>
    /**
     * Choose, which PullRequest to update.
     */
    where: PullRequestWhereUniqueInput
  }

  /**
   * PullRequest updateMany
   */
  export type PullRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PullRequests.
     */
    data: XOR<PullRequestUpdateManyMutationInput, PullRequestUncheckedUpdateManyInput>
    /**
     * Filter which PullRequests to update
     */
    where?: PullRequestWhereInput
    /**
     * Limit how many PullRequests to update.
     */
    limit?: number
  }

  /**
   * PullRequest updateManyAndReturn
   */
  export type PullRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * The data used to update PullRequests.
     */
    data: XOR<PullRequestUpdateManyMutationInput, PullRequestUncheckedUpdateManyInput>
    /**
     * Filter which PullRequests to update
     */
    where?: PullRequestWhereInput
    /**
     * Limit how many PullRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PullRequest upsert
   */
  export type PullRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the PullRequest to update in case it exists.
     */
    where: PullRequestWhereUniqueInput
    /**
     * In case the PullRequest found by the `where` argument doesn't exist, create a new PullRequest with this data.
     */
    create: XOR<PullRequestCreateInput, PullRequestUncheckedCreateInput>
    /**
     * In case the PullRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PullRequestUpdateInput, PullRequestUncheckedUpdateInput>
  }

  /**
   * PullRequest delete
   */
  export type PullRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    /**
     * Filter which PullRequest to delete.
     */
    where: PullRequestWhereUniqueInput
  }

  /**
   * PullRequest deleteMany
   */
  export type PullRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PullRequests to delete
     */
    where?: PullRequestWhereInput
    /**
     * Limit how many PullRequests to delete.
     */
    limit?: number
  }

  /**
   * PullRequest.risk
   */
  export type PullRequest$riskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequestRisk
     */
    select?: PullRequestRiskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequestRisk
     */
    omit?: PullRequestRiskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestRiskInclude<ExtArgs> | null
    where?: PullRequestRiskWhereInput
    orderBy?: PullRequestRiskOrderByWithRelationInput | PullRequestRiskOrderByWithRelationInput[]
    cursor?: PullRequestRiskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PullRequestRiskScalarFieldEnum | PullRequestRiskScalarFieldEnum[]
  }

  /**
   * PullRequest without action
   */
  export type PullRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
  }


  /**
   * Model PullRequestRisk
   */

  export type AggregatePullRequestRisk = {
    _count: PullRequestRiskCountAggregateOutputType | null
    _min: PullRequestRiskMinAggregateOutputType | null
    _max: PullRequestRiskMaxAggregateOutputType | null
  }

  export type PullRequestRiskMinAggregateOutputType = {
    id: string | null
    pullRequestId: string | null
    commentPosted: boolean | null
    hasDependencyRisk: boolean | null
    hasAuthRisk: boolean | null
    hasMalciousRisk: boolean | null
    createdAt: Date | null
  }

  export type PullRequestRiskMaxAggregateOutputType = {
    id: string | null
    pullRequestId: string | null
    commentPosted: boolean | null
    hasDependencyRisk: boolean | null
    hasAuthRisk: boolean | null
    hasMalciousRisk: boolean | null
    createdAt: Date | null
  }

  export type PullRequestRiskCountAggregateOutputType = {
    id: number
    pullRequestId: number
    commentPosted: number
    hasDependencyRisk: number
    hasAuthRisk: number
    hasMalciousRisk: number
    malciousReasons: number
    affectedFiles: number
    createdAt: number
    _all: number
  }


  export type PullRequestRiskMinAggregateInputType = {
    id?: true
    pullRequestId?: true
    commentPosted?: true
    hasDependencyRisk?: true
    hasAuthRisk?: true
    hasMalciousRisk?: true
    createdAt?: true
  }

  export type PullRequestRiskMaxAggregateInputType = {
    id?: true
    pullRequestId?: true
    commentPosted?: true
    hasDependencyRisk?: true
    hasAuthRisk?: true
    hasMalciousRisk?: true
    createdAt?: true
  }

  export type PullRequestRiskCountAggregateInputType = {
    id?: true
    pullRequestId?: true
    commentPosted?: true
    hasDependencyRisk?: true
    hasAuthRisk?: true
    hasMalciousRisk?: true
    malciousReasons?: true
    affectedFiles?: true
    createdAt?: true
    _all?: true
  }

  export type PullRequestRiskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PullRequestRisk to aggregate.
     */
    where?: PullRequestRiskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PullRequestRisks to fetch.
     */
    orderBy?: PullRequestRiskOrderByWithRelationInput | PullRequestRiskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PullRequestRiskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PullRequestRisks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PullRequestRisks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PullRequestRisks
    **/
    _count?: true | PullRequestRiskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PullRequestRiskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PullRequestRiskMaxAggregateInputType
  }

  export type GetPullRequestRiskAggregateType<T extends PullRequestRiskAggregateArgs> = {
        [P in keyof T & keyof AggregatePullRequestRisk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePullRequestRisk[P]>
      : GetScalarType<T[P], AggregatePullRequestRisk[P]>
  }




  export type PullRequestRiskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PullRequestRiskWhereInput
    orderBy?: PullRequestRiskOrderByWithAggregationInput | PullRequestRiskOrderByWithAggregationInput[]
    by: PullRequestRiskScalarFieldEnum[] | PullRequestRiskScalarFieldEnum
    having?: PullRequestRiskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PullRequestRiskCountAggregateInputType | true
    _min?: PullRequestRiskMinAggregateInputType
    _max?: PullRequestRiskMaxAggregateInputType
  }

  export type PullRequestRiskGroupByOutputType = {
    id: string
    pullRequestId: string
    commentPosted: boolean
    hasDependencyRisk: boolean
    hasAuthRisk: boolean
    hasMalciousRisk: boolean
    malciousReasons: string[]
    affectedFiles: string[]
    createdAt: Date
    _count: PullRequestRiskCountAggregateOutputType | null
    _min: PullRequestRiskMinAggregateOutputType | null
    _max: PullRequestRiskMaxAggregateOutputType | null
  }

  type GetPullRequestRiskGroupByPayload<T extends PullRequestRiskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PullRequestRiskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PullRequestRiskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PullRequestRiskGroupByOutputType[P]>
            : GetScalarType<T[P], PullRequestRiskGroupByOutputType[P]>
        }
      >
    >


  export type PullRequestRiskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pullRequestId?: boolean
    commentPosted?: boolean
    hasDependencyRisk?: boolean
    hasAuthRisk?: boolean
    hasMalciousRisk?: boolean
    malciousReasons?: boolean
    affectedFiles?: boolean
    createdAt?: boolean
    pullRequest?: boolean | PullRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pullRequestRisk"]>

  export type PullRequestRiskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pullRequestId?: boolean
    commentPosted?: boolean
    hasDependencyRisk?: boolean
    hasAuthRisk?: boolean
    hasMalciousRisk?: boolean
    malciousReasons?: boolean
    affectedFiles?: boolean
    createdAt?: boolean
    pullRequest?: boolean | PullRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pullRequestRisk"]>

  export type PullRequestRiskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pullRequestId?: boolean
    commentPosted?: boolean
    hasDependencyRisk?: boolean
    hasAuthRisk?: boolean
    hasMalciousRisk?: boolean
    malciousReasons?: boolean
    affectedFiles?: boolean
    createdAt?: boolean
    pullRequest?: boolean | PullRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pullRequestRisk"]>

  export type PullRequestRiskSelectScalar = {
    id?: boolean
    pullRequestId?: boolean
    commentPosted?: boolean
    hasDependencyRisk?: boolean
    hasAuthRisk?: boolean
    hasMalciousRisk?: boolean
    malciousReasons?: boolean
    affectedFiles?: boolean
    createdAt?: boolean
  }

  export type PullRequestRiskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pullRequestId" | "commentPosted" | "hasDependencyRisk" | "hasAuthRisk" | "hasMalciousRisk" | "malciousReasons" | "affectedFiles" | "createdAt", ExtArgs["result"]["pullRequestRisk"]>
  export type PullRequestRiskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pullRequest?: boolean | PullRequestDefaultArgs<ExtArgs>
  }
  export type PullRequestRiskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pullRequest?: boolean | PullRequestDefaultArgs<ExtArgs>
  }
  export type PullRequestRiskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pullRequest?: boolean | PullRequestDefaultArgs<ExtArgs>
  }

  export type $PullRequestRiskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PullRequestRisk"
    objects: {
      pullRequest: Prisma.$PullRequestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pullRequestId: string
      commentPosted: boolean
      hasDependencyRisk: boolean
      hasAuthRisk: boolean
      hasMalciousRisk: boolean
      malciousReasons: string[]
      affectedFiles: string[]
      createdAt: Date
    }, ExtArgs["result"]["pullRequestRisk"]>
    composites: {}
  }

  type PullRequestRiskGetPayload<S extends boolean | null | undefined | PullRequestRiskDefaultArgs> = $Result.GetResult<Prisma.$PullRequestRiskPayload, S>

  type PullRequestRiskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PullRequestRiskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PullRequestRiskCountAggregateInputType | true
    }

  export interface PullRequestRiskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PullRequestRisk'], meta: { name: 'PullRequestRisk' } }
    /**
     * Find zero or one PullRequestRisk that matches the filter.
     * @param {PullRequestRiskFindUniqueArgs} args - Arguments to find a PullRequestRisk
     * @example
     * // Get one PullRequestRisk
     * const pullRequestRisk = await prisma.pullRequestRisk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PullRequestRiskFindUniqueArgs>(args: SelectSubset<T, PullRequestRiskFindUniqueArgs<ExtArgs>>): Prisma__PullRequestRiskClient<$Result.GetResult<Prisma.$PullRequestRiskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PullRequestRisk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PullRequestRiskFindUniqueOrThrowArgs} args - Arguments to find a PullRequestRisk
     * @example
     * // Get one PullRequestRisk
     * const pullRequestRisk = await prisma.pullRequestRisk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PullRequestRiskFindUniqueOrThrowArgs>(args: SelectSubset<T, PullRequestRiskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PullRequestRiskClient<$Result.GetResult<Prisma.$PullRequestRiskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PullRequestRisk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestRiskFindFirstArgs} args - Arguments to find a PullRequestRisk
     * @example
     * // Get one PullRequestRisk
     * const pullRequestRisk = await prisma.pullRequestRisk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PullRequestRiskFindFirstArgs>(args?: SelectSubset<T, PullRequestRiskFindFirstArgs<ExtArgs>>): Prisma__PullRequestRiskClient<$Result.GetResult<Prisma.$PullRequestRiskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PullRequestRisk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestRiskFindFirstOrThrowArgs} args - Arguments to find a PullRequestRisk
     * @example
     * // Get one PullRequestRisk
     * const pullRequestRisk = await prisma.pullRequestRisk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PullRequestRiskFindFirstOrThrowArgs>(args?: SelectSubset<T, PullRequestRiskFindFirstOrThrowArgs<ExtArgs>>): Prisma__PullRequestRiskClient<$Result.GetResult<Prisma.$PullRequestRiskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PullRequestRisks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestRiskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PullRequestRisks
     * const pullRequestRisks = await prisma.pullRequestRisk.findMany()
     * 
     * // Get first 10 PullRequestRisks
     * const pullRequestRisks = await prisma.pullRequestRisk.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pullRequestRiskWithIdOnly = await prisma.pullRequestRisk.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PullRequestRiskFindManyArgs>(args?: SelectSubset<T, PullRequestRiskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PullRequestRiskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PullRequestRisk.
     * @param {PullRequestRiskCreateArgs} args - Arguments to create a PullRequestRisk.
     * @example
     * // Create one PullRequestRisk
     * const PullRequestRisk = await prisma.pullRequestRisk.create({
     *   data: {
     *     // ... data to create a PullRequestRisk
     *   }
     * })
     * 
     */
    create<T extends PullRequestRiskCreateArgs>(args: SelectSubset<T, PullRequestRiskCreateArgs<ExtArgs>>): Prisma__PullRequestRiskClient<$Result.GetResult<Prisma.$PullRequestRiskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PullRequestRisks.
     * @param {PullRequestRiskCreateManyArgs} args - Arguments to create many PullRequestRisks.
     * @example
     * // Create many PullRequestRisks
     * const pullRequestRisk = await prisma.pullRequestRisk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PullRequestRiskCreateManyArgs>(args?: SelectSubset<T, PullRequestRiskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PullRequestRisks and returns the data saved in the database.
     * @param {PullRequestRiskCreateManyAndReturnArgs} args - Arguments to create many PullRequestRisks.
     * @example
     * // Create many PullRequestRisks
     * const pullRequestRisk = await prisma.pullRequestRisk.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PullRequestRisks and only return the `id`
     * const pullRequestRiskWithIdOnly = await prisma.pullRequestRisk.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PullRequestRiskCreateManyAndReturnArgs>(args?: SelectSubset<T, PullRequestRiskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PullRequestRiskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PullRequestRisk.
     * @param {PullRequestRiskDeleteArgs} args - Arguments to delete one PullRequestRisk.
     * @example
     * // Delete one PullRequestRisk
     * const PullRequestRisk = await prisma.pullRequestRisk.delete({
     *   where: {
     *     // ... filter to delete one PullRequestRisk
     *   }
     * })
     * 
     */
    delete<T extends PullRequestRiskDeleteArgs>(args: SelectSubset<T, PullRequestRiskDeleteArgs<ExtArgs>>): Prisma__PullRequestRiskClient<$Result.GetResult<Prisma.$PullRequestRiskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PullRequestRisk.
     * @param {PullRequestRiskUpdateArgs} args - Arguments to update one PullRequestRisk.
     * @example
     * // Update one PullRequestRisk
     * const pullRequestRisk = await prisma.pullRequestRisk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PullRequestRiskUpdateArgs>(args: SelectSubset<T, PullRequestRiskUpdateArgs<ExtArgs>>): Prisma__PullRequestRiskClient<$Result.GetResult<Prisma.$PullRequestRiskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PullRequestRisks.
     * @param {PullRequestRiskDeleteManyArgs} args - Arguments to filter PullRequestRisks to delete.
     * @example
     * // Delete a few PullRequestRisks
     * const { count } = await prisma.pullRequestRisk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PullRequestRiskDeleteManyArgs>(args?: SelectSubset<T, PullRequestRiskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PullRequestRisks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestRiskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PullRequestRisks
     * const pullRequestRisk = await prisma.pullRequestRisk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PullRequestRiskUpdateManyArgs>(args: SelectSubset<T, PullRequestRiskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PullRequestRisks and returns the data updated in the database.
     * @param {PullRequestRiskUpdateManyAndReturnArgs} args - Arguments to update many PullRequestRisks.
     * @example
     * // Update many PullRequestRisks
     * const pullRequestRisk = await prisma.pullRequestRisk.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PullRequestRisks and only return the `id`
     * const pullRequestRiskWithIdOnly = await prisma.pullRequestRisk.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends PullRequestRiskUpdateManyAndReturnArgs>(args: SelectSubset<T, PullRequestRiskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PullRequestRiskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PullRequestRisk.
     * @param {PullRequestRiskUpsertArgs} args - Arguments to update or create a PullRequestRisk.
     * @example
     * // Update or create a PullRequestRisk
     * const pullRequestRisk = await prisma.pullRequestRisk.upsert({
     *   create: {
     *     // ... data to create a PullRequestRisk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PullRequestRisk we want to update
     *   }
     * })
     */
    upsert<T extends PullRequestRiskUpsertArgs>(args: SelectSubset<T, PullRequestRiskUpsertArgs<ExtArgs>>): Prisma__PullRequestRiskClient<$Result.GetResult<Prisma.$PullRequestRiskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PullRequestRisks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestRiskCountArgs} args - Arguments to filter PullRequestRisks to count.
     * @example
     * // Count the number of PullRequestRisks
     * const count = await prisma.pullRequestRisk.count({
     *   where: {
     *     // ... the filter for the PullRequestRisks we want to count
     *   }
     * })
    **/
    count<T extends PullRequestRiskCountArgs>(
      args?: Subset<T, PullRequestRiskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PullRequestRiskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PullRequestRisk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestRiskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PullRequestRiskAggregateArgs>(args: Subset<T, PullRequestRiskAggregateArgs>): Prisma.PrismaPromise<GetPullRequestRiskAggregateType<T>>

    /**
     * Group by PullRequestRisk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestRiskGroupByArgs} args - Group by arguments.
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
      T extends PullRequestRiskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PullRequestRiskGroupByArgs['orderBy'] }
        : { orderBy?: PullRequestRiskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PullRequestRiskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPullRequestRiskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PullRequestRisk model
   */
  readonly fields: PullRequestRiskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PullRequestRisk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PullRequestRiskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pullRequest<T extends PullRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PullRequestDefaultArgs<ExtArgs>>): Prisma__PullRequestClient<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PullRequestRisk model
   */
  interface PullRequestRiskFieldRefs {
    readonly id: FieldRef<"PullRequestRisk", 'String'>
    readonly pullRequestId: FieldRef<"PullRequestRisk", 'String'>
    readonly commentPosted: FieldRef<"PullRequestRisk", 'Boolean'>
    readonly hasDependencyRisk: FieldRef<"PullRequestRisk", 'Boolean'>
    readonly hasAuthRisk: FieldRef<"PullRequestRisk", 'Boolean'>
    readonly hasMalciousRisk: FieldRef<"PullRequestRisk", 'Boolean'>
    readonly malciousReasons: FieldRef<"PullRequestRisk", 'String[]'>
    readonly affectedFiles: FieldRef<"PullRequestRisk", 'String[]'>
    readonly createdAt: FieldRef<"PullRequestRisk", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PullRequestRisk findUnique
   */
  export type PullRequestRiskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequestRisk
     */
    select?: PullRequestRiskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequestRisk
     */
    omit?: PullRequestRiskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestRiskInclude<ExtArgs> | null
    /**
     * Filter, which PullRequestRisk to fetch.
     */
    where: PullRequestRiskWhereUniqueInput
  }

  /**
   * PullRequestRisk findUniqueOrThrow
   */
  export type PullRequestRiskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequestRisk
     */
    select?: PullRequestRiskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequestRisk
     */
    omit?: PullRequestRiskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestRiskInclude<ExtArgs> | null
    /**
     * Filter, which PullRequestRisk to fetch.
     */
    where: PullRequestRiskWhereUniqueInput
  }

  /**
   * PullRequestRisk findFirst
   */
  export type PullRequestRiskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequestRisk
     */
    select?: PullRequestRiskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequestRisk
     */
    omit?: PullRequestRiskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestRiskInclude<ExtArgs> | null
    /**
     * Filter, which PullRequestRisk to fetch.
     */
    where?: PullRequestRiskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PullRequestRisks to fetch.
     */
    orderBy?: PullRequestRiskOrderByWithRelationInput | PullRequestRiskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PullRequestRisks.
     */
    cursor?: PullRequestRiskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PullRequestRisks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PullRequestRisks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PullRequestRisks.
     */
    distinct?: PullRequestRiskScalarFieldEnum | PullRequestRiskScalarFieldEnum[]
  }

  /**
   * PullRequestRisk findFirstOrThrow
   */
  export type PullRequestRiskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequestRisk
     */
    select?: PullRequestRiskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequestRisk
     */
    omit?: PullRequestRiskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestRiskInclude<ExtArgs> | null
    /**
     * Filter, which PullRequestRisk to fetch.
     */
    where?: PullRequestRiskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PullRequestRisks to fetch.
     */
    orderBy?: PullRequestRiskOrderByWithRelationInput | PullRequestRiskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PullRequestRisks.
     */
    cursor?: PullRequestRiskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PullRequestRisks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PullRequestRisks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PullRequestRisks.
     */
    distinct?: PullRequestRiskScalarFieldEnum | PullRequestRiskScalarFieldEnum[]
  }

  /**
   * PullRequestRisk findMany
   */
  export type PullRequestRiskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequestRisk
     */
    select?: PullRequestRiskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequestRisk
     */
    omit?: PullRequestRiskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestRiskInclude<ExtArgs> | null
    /**
     * Filter, which PullRequestRisks to fetch.
     */
    where?: PullRequestRiskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PullRequestRisks to fetch.
     */
    orderBy?: PullRequestRiskOrderByWithRelationInput | PullRequestRiskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PullRequestRisks.
     */
    cursor?: PullRequestRiskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PullRequestRisks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PullRequestRisks.
     */
    skip?: number
    distinct?: PullRequestRiskScalarFieldEnum | PullRequestRiskScalarFieldEnum[]
  }

  /**
   * PullRequestRisk create
   */
  export type PullRequestRiskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequestRisk
     */
    select?: PullRequestRiskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequestRisk
     */
    omit?: PullRequestRiskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestRiskInclude<ExtArgs> | null
    /**
     * The data needed to create a PullRequestRisk.
     */
    data: XOR<PullRequestRiskCreateInput, PullRequestRiskUncheckedCreateInput>
  }

  /**
   * PullRequestRisk createMany
   */
  export type PullRequestRiskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PullRequestRisks.
     */
    data: PullRequestRiskCreateManyInput | PullRequestRiskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PullRequestRisk createManyAndReturn
   */
  export type PullRequestRiskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequestRisk
     */
    select?: PullRequestRiskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequestRisk
     */
    omit?: PullRequestRiskOmit<ExtArgs> | null
    /**
     * The data used to create many PullRequestRisks.
     */
    data: PullRequestRiskCreateManyInput | PullRequestRiskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestRiskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PullRequestRisk update
   */
  export type PullRequestRiskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequestRisk
     */
    select?: PullRequestRiskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequestRisk
     */
    omit?: PullRequestRiskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestRiskInclude<ExtArgs> | null
    /**
     * The data needed to update a PullRequestRisk.
     */
    data: XOR<PullRequestRiskUpdateInput, PullRequestRiskUncheckedUpdateInput>
    /**
     * Choose, which PullRequestRisk to update.
     */
    where: PullRequestRiskWhereUniqueInput
  }

  /**
   * PullRequestRisk updateMany
   */
  export type PullRequestRiskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PullRequestRisks.
     */
    data: XOR<PullRequestRiskUpdateManyMutationInput, PullRequestRiskUncheckedUpdateManyInput>
    /**
     * Filter which PullRequestRisks to update
     */
    where?: PullRequestRiskWhereInput
    /**
     * Limit how many PullRequestRisks to update.
     */
    limit?: number
  }

  /**
   * PullRequestRisk updateManyAndReturn
   */
  export type PullRequestRiskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequestRisk
     */
    select?: PullRequestRiskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequestRisk
     */
    omit?: PullRequestRiskOmit<ExtArgs> | null
    /**
     * The data used to update PullRequestRisks.
     */
    data: XOR<PullRequestRiskUpdateManyMutationInput, PullRequestRiskUncheckedUpdateManyInput>
    /**
     * Filter which PullRequestRisks to update
     */
    where?: PullRequestRiskWhereInput
    /**
     * Limit how many PullRequestRisks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestRiskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PullRequestRisk upsert
   */
  export type PullRequestRiskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequestRisk
     */
    select?: PullRequestRiskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequestRisk
     */
    omit?: PullRequestRiskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestRiskInclude<ExtArgs> | null
    /**
     * The filter to search for the PullRequestRisk to update in case it exists.
     */
    where: PullRequestRiskWhereUniqueInput
    /**
     * In case the PullRequestRisk found by the `where` argument doesn't exist, create a new PullRequestRisk with this data.
     */
    create: XOR<PullRequestRiskCreateInput, PullRequestRiskUncheckedCreateInput>
    /**
     * In case the PullRequestRisk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PullRequestRiskUpdateInput, PullRequestRiskUncheckedUpdateInput>
  }

  /**
   * PullRequestRisk delete
   */
  export type PullRequestRiskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequestRisk
     */
    select?: PullRequestRiskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequestRisk
     */
    omit?: PullRequestRiskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestRiskInclude<ExtArgs> | null
    /**
     * Filter which PullRequestRisk to delete.
     */
    where: PullRequestRiskWhereUniqueInput
  }

  /**
   * PullRequestRisk deleteMany
   */
  export type PullRequestRiskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PullRequestRisks to delete
     */
    where?: PullRequestRiskWhereInput
    /**
     * Limit how many PullRequestRisks to delete.
     */
    limit?: number
  }

  /**
   * PullRequestRisk without action
   */
  export type PullRequestRiskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequestRisk
     */
    select?: PullRequestRiskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequestRisk
     */
    omit?: PullRequestRiskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestRiskInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    githubId: 'githubId',
    name: 'name'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RepositoryScalarFieldEnum: {
    id: 'id',
    githubRepoId: 'githubRepoId',
    fullName: 'fullName',
    owner: 'owner',
    installationId: 'installationId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type RepositoryScalarFieldEnum = (typeof RepositoryScalarFieldEnum)[keyof typeof RepositoryScalarFieldEnum]


  export const PullRequestScalarFieldEnum: {
    id: 'id',
    githubPrId: 'githubPrId',
    prNumber: 'prNumber',
    title: 'title',
    state: 'state',
    author: 'author',
    additions: 'additions',
    deletions: 'deletions',
    changedFiles: 'changedFiles',
    repoId: 'repoId',
    createdAt: 'createdAt'
  };

  export type PullRequestScalarFieldEnum = (typeof PullRequestScalarFieldEnum)[keyof typeof PullRequestScalarFieldEnum]


  export const PullRequestRiskScalarFieldEnum: {
    id: 'id',
    pullRequestId: 'pullRequestId',
    commentPosted: 'commentPosted',
    hasDependencyRisk: 'hasDependencyRisk',
    hasAuthRisk: 'hasAuthRisk',
    hasMalciousRisk: 'hasMalciousRisk',
    malciousReasons: 'malciousReasons',
    affectedFiles: 'affectedFiles',
    createdAt: 'createdAt'
  };

  export type PullRequestRiskScalarFieldEnum = (typeof PullRequestRiskScalarFieldEnum)[keyof typeof PullRequestRiskScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    githubId?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    repos?: RepositoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    githubId?: SortOrder
    name?: SortOrderInput | SortOrder
    repos?: RepositoryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    githubId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    repos?: RepositoryListRelationFilter
  }, "id" | "githubId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    githubId?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    githubId?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type RepositoryWhereInput = {
    AND?: RepositoryWhereInput | RepositoryWhereInput[]
    OR?: RepositoryWhereInput[]
    NOT?: RepositoryWhereInput | RepositoryWhereInput[]
    id?: StringFilter<"Repository"> | string
    githubRepoId?: IntFilter<"Repository"> | number
    fullName?: StringFilter<"Repository"> | string
    owner?: StringFilter<"Repository"> | string
    installationId?: IntFilter<"Repository"> | number
    userId?: StringFilter<"Repository"> | string
    createdAt?: DateTimeFilter<"Repository"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    pullRequests?: PullRequestListRelationFilter
  }

  export type RepositoryOrderByWithRelationInput = {
    id?: SortOrder
    githubRepoId?: SortOrder
    fullName?: SortOrder
    owner?: SortOrder
    installationId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    pullRequests?: PullRequestOrderByRelationAggregateInput
  }

  export type RepositoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    githubRepoId?: number
    AND?: RepositoryWhereInput | RepositoryWhereInput[]
    OR?: RepositoryWhereInput[]
    NOT?: RepositoryWhereInput | RepositoryWhereInput[]
    fullName?: StringFilter<"Repository"> | string
    owner?: StringFilter<"Repository"> | string
    installationId?: IntFilter<"Repository"> | number
    userId?: StringFilter<"Repository"> | string
    createdAt?: DateTimeFilter<"Repository"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    pullRequests?: PullRequestListRelationFilter
  }, "id" | "githubRepoId">

  export type RepositoryOrderByWithAggregationInput = {
    id?: SortOrder
    githubRepoId?: SortOrder
    fullName?: SortOrder
    owner?: SortOrder
    installationId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: RepositoryCountOrderByAggregateInput
    _avg?: RepositoryAvgOrderByAggregateInput
    _max?: RepositoryMaxOrderByAggregateInput
    _min?: RepositoryMinOrderByAggregateInput
    _sum?: RepositorySumOrderByAggregateInput
  }

  export type RepositoryScalarWhereWithAggregatesInput = {
    AND?: RepositoryScalarWhereWithAggregatesInput | RepositoryScalarWhereWithAggregatesInput[]
    OR?: RepositoryScalarWhereWithAggregatesInput[]
    NOT?: RepositoryScalarWhereWithAggregatesInput | RepositoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Repository"> | string
    githubRepoId?: IntWithAggregatesFilter<"Repository"> | number
    fullName?: StringWithAggregatesFilter<"Repository"> | string
    owner?: StringWithAggregatesFilter<"Repository"> | string
    installationId?: IntWithAggregatesFilter<"Repository"> | number
    userId?: StringWithAggregatesFilter<"Repository"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Repository"> | Date | string
  }

  export type PullRequestWhereInput = {
    AND?: PullRequestWhereInput | PullRequestWhereInput[]
    OR?: PullRequestWhereInput[]
    NOT?: PullRequestWhereInput | PullRequestWhereInput[]
    id?: StringFilter<"PullRequest"> | string
    githubPrId?: BigIntFilter<"PullRequest"> | bigint | number
    prNumber?: IntFilter<"PullRequest"> | number
    title?: StringFilter<"PullRequest"> | string
    state?: StringFilter<"PullRequest"> | string
    author?: StringFilter<"PullRequest"> | string
    additions?: IntFilter<"PullRequest"> | number
    deletions?: IntFilter<"PullRequest"> | number
    changedFiles?: IntFilter<"PullRequest"> | number
    repoId?: StringFilter<"PullRequest"> | string
    createdAt?: DateTimeFilter<"PullRequest"> | Date | string
    repository?: XOR<RepositoryScalarRelationFilter, RepositoryWhereInput>
    risk?: PullRequestRiskListRelationFilter
  }

  export type PullRequestOrderByWithRelationInput = {
    id?: SortOrder
    githubPrId?: SortOrder
    prNumber?: SortOrder
    title?: SortOrder
    state?: SortOrder
    author?: SortOrder
    additions?: SortOrder
    deletions?: SortOrder
    changedFiles?: SortOrder
    repoId?: SortOrder
    createdAt?: SortOrder
    repository?: RepositoryOrderByWithRelationInput
    risk?: PullRequestRiskOrderByRelationAggregateInput
  }

  export type PullRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    githubPrId?: bigint | number
    AND?: PullRequestWhereInput | PullRequestWhereInput[]
    OR?: PullRequestWhereInput[]
    NOT?: PullRequestWhereInput | PullRequestWhereInput[]
    prNumber?: IntFilter<"PullRequest"> | number
    title?: StringFilter<"PullRequest"> | string
    state?: StringFilter<"PullRequest"> | string
    author?: StringFilter<"PullRequest"> | string
    additions?: IntFilter<"PullRequest"> | number
    deletions?: IntFilter<"PullRequest"> | number
    changedFiles?: IntFilter<"PullRequest"> | number
    repoId?: StringFilter<"PullRequest"> | string
    createdAt?: DateTimeFilter<"PullRequest"> | Date | string
    repository?: XOR<RepositoryScalarRelationFilter, RepositoryWhereInput>
    risk?: PullRequestRiskListRelationFilter
  }, "id" | "githubPrId">

  export type PullRequestOrderByWithAggregationInput = {
    id?: SortOrder
    githubPrId?: SortOrder
    prNumber?: SortOrder
    title?: SortOrder
    state?: SortOrder
    author?: SortOrder
    additions?: SortOrder
    deletions?: SortOrder
    changedFiles?: SortOrder
    repoId?: SortOrder
    createdAt?: SortOrder
    _count?: PullRequestCountOrderByAggregateInput
    _avg?: PullRequestAvgOrderByAggregateInput
    _max?: PullRequestMaxOrderByAggregateInput
    _min?: PullRequestMinOrderByAggregateInput
    _sum?: PullRequestSumOrderByAggregateInput
  }

  export type PullRequestScalarWhereWithAggregatesInput = {
    AND?: PullRequestScalarWhereWithAggregatesInput | PullRequestScalarWhereWithAggregatesInput[]
    OR?: PullRequestScalarWhereWithAggregatesInput[]
    NOT?: PullRequestScalarWhereWithAggregatesInput | PullRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PullRequest"> | string
    githubPrId?: BigIntWithAggregatesFilter<"PullRequest"> | bigint | number
    prNumber?: IntWithAggregatesFilter<"PullRequest"> | number
    title?: StringWithAggregatesFilter<"PullRequest"> | string
    state?: StringWithAggregatesFilter<"PullRequest"> | string
    author?: StringWithAggregatesFilter<"PullRequest"> | string
    additions?: IntWithAggregatesFilter<"PullRequest"> | number
    deletions?: IntWithAggregatesFilter<"PullRequest"> | number
    changedFiles?: IntWithAggregatesFilter<"PullRequest"> | number
    repoId?: StringWithAggregatesFilter<"PullRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PullRequest"> | Date | string
  }

  export type PullRequestRiskWhereInput = {
    AND?: PullRequestRiskWhereInput | PullRequestRiskWhereInput[]
    OR?: PullRequestRiskWhereInput[]
    NOT?: PullRequestRiskWhereInput | PullRequestRiskWhereInput[]
    id?: StringFilter<"PullRequestRisk"> | string
    pullRequestId?: StringFilter<"PullRequestRisk"> | string
    commentPosted?: BoolFilter<"PullRequestRisk"> | boolean
    hasDependencyRisk?: BoolFilter<"PullRequestRisk"> | boolean
    hasAuthRisk?: BoolFilter<"PullRequestRisk"> | boolean
    hasMalciousRisk?: BoolFilter<"PullRequestRisk"> | boolean
    malciousReasons?: StringNullableListFilter<"PullRequestRisk">
    affectedFiles?: StringNullableListFilter<"PullRequestRisk">
    createdAt?: DateTimeFilter<"PullRequestRisk"> | Date | string
    pullRequest?: XOR<PullRequestScalarRelationFilter, PullRequestWhereInput>
  }

  export type PullRequestRiskOrderByWithRelationInput = {
    id?: SortOrder
    pullRequestId?: SortOrder
    commentPosted?: SortOrder
    hasDependencyRisk?: SortOrder
    hasAuthRisk?: SortOrder
    hasMalciousRisk?: SortOrder
    malciousReasons?: SortOrder
    affectedFiles?: SortOrder
    createdAt?: SortOrder
    pullRequest?: PullRequestOrderByWithRelationInput
  }

  export type PullRequestRiskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    pullRequestId?: string
    AND?: PullRequestRiskWhereInput | PullRequestRiskWhereInput[]
    OR?: PullRequestRiskWhereInput[]
    NOT?: PullRequestRiskWhereInput | PullRequestRiskWhereInput[]
    commentPosted?: BoolFilter<"PullRequestRisk"> | boolean
    hasDependencyRisk?: BoolFilter<"PullRequestRisk"> | boolean
    hasAuthRisk?: BoolFilter<"PullRequestRisk"> | boolean
    hasMalciousRisk?: BoolFilter<"PullRequestRisk"> | boolean
    malciousReasons?: StringNullableListFilter<"PullRequestRisk">
    affectedFiles?: StringNullableListFilter<"PullRequestRisk">
    createdAt?: DateTimeFilter<"PullRequestRisk"> | Date | string
    pullRequest?: XOR<PullRequestScalarRelationFilter, PullRequestWhereInput>
  }, "id" | "pullRequestId">

  export type PullRequestRiskOrderByWithAggregationInput = {
    id?: SortOrder
    pullRequestId?: SortOrder
    commentPosted?: SortOrder
    hasDependencyRisk?: SortOrder
    hasAuthRisk?: SortOrder
    hasMalciousRisk?: SortOrder
    malciousReasons?: SortOrder
    affectedFiles?: SortOrder
    createdAt?: SortOrder
    _count?: PullRequestRiskCountOrderByAggregateInput
    _max?: PullRequestRiskMaxOrderByAggregateInput
    _min?: PullRequestRiskMinOrderByAggregateInput
  }

  export type PullRequestRiskScalarWhereWithAggregatesInput = {
    AND?: PullRequestRiskScalarWhereWithAggregatesInput | PullRequestRiskScalarWhereWithAggregatesInput[]
    OR?: PullRequestRiskScalarWhereWithAggregatesInput[]
    NOT?: PullRequestRiskScalarWhereWithAggregatesInput | PullRequestRiskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PullRequestRisk"> | string
    pullRequestId?: StringWithAggregatesFilter<"PullRequestRisk"> | string
    commentPosted?: BoolWithAggregatesFilter<"PullRequestRisk"> | boolean
    hasDependencyRisk?: BoolWithAggregatesFilter<"PullRequestRisk"> | boolean
    hasAuthRisk?: BoolWithAggregatesFilter<"PullRequestRisk"> | boolean
    hasMalciousRisk?: BoolWithAggregatesFilter<"PullRequestRisk"> | boolean
    malciousReasons?: StringNullableListFilter<"PullRequestRisk">
    affectedFiles?: StringNullableListFilter<"PullRequestRisk">
    createdAt?: DateTimeWithAggregatesFilter<"PullRequestRisk"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    githubId: string
    name?: string | null
    repos?: RepositoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    githubId: string
    name?: string | null
    repos?: RepositoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    repos?: RepositoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    repos?: RepositoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    githubId: string
    name?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RepositoryCreateInput = {
    id?: string
    githubRepoId: number
    fullName: string
    owner: string
    installationId: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReposInput
    pullRequests?: PullRequestCreateNestedManyWithoutRepositoryInput
  }

  export type RepositoryUncheckedCreateInput = {
    id?: string
    githubRepoId: number
    fullName: string
    owner: string
    installationId: number
    userId: string
    createdAt?: Date | string
    pullRequests?: PullRequestUncheckedCreateNestedManyWithoutRepositoryInput
  }

  export type RepositoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubRepoId?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    installationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReposNestedInput
    pullRequests?: PullRequestUpdateManyWithoutRepositoryNestedInput
  }

  export type RepositoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubRepoId?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    installationId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pullRequests?: PullRequestUncheckedUpdateManyWithoutRepositoryNestedInput
  }

  export type RepositoryCreateManyInput = {
    id?: string
    githubRepoId: number
    fullName: string
    owner: string
    installationId: number
    userId: string
    createdAt?: Date | string
  }

  export type RepositoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubRepoId?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    installationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepositoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubRepoId?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    installationId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PullRequestCreateInput = {
    id?: string
    githubPrId: bigint | number
    prNumber: number
    title: string
    state: string
    author: string
    additions: number
    deletions: number
    changedFiles: number
    createdAt?: Date | string
    repository: RepositoryCreateNestedOneWithoutPullRequestsInput
    risk?: PullRequestRiskCreateNestedManyWithoutPullRequestInput
  }

  export type PullRequestUncheckedCreateInput = {
    id?: string
    githubPrId: bigint | number
    prNumber: number
    title: string
    state: string
    author: string
    additions: number
    deletions: number
    changedFiles: number
    repoId: string
    createdAt?: Date | string
    risk?: PullRequestRiskUncheckedCreateNestedManyWithoutPullRequestInput
  }

  export type PullRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubPrId?: BigIntFieldUpdateOperationsInput | bigint | number
    prNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    additions?: IntFieldUpdateOperationsInput | number
    deletions?: IntFieldUpdateOperationsInput | number
    changedFiles?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repository?: RepositoryUpdateOneRequiredWithoutPullRequestsNestedInput
    risk?: PullRequestRiskUpdateManyWithoutPullRequestNestedInput
  }

  export type PullRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubPrId?: BigIntFieldUpdateOperationsInput | bigint | number
    prNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    additions?: IntFieldUpdateOperationsInput | number
    deletions?: IntFieldUpdateOperationsInput | number
    changedFiles?: IntFieldUpdateOperationsInput | number
    repoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    risk?: PullRequestRiskUncheckedUpdateManyWithoutPullRequestNestedInput
  }

  export type PullRequestCreateManyInput = {
    id?: string
    githubPrId: bigint | number
    prNumber: number
    title: string
    state: string
    author: string
    additions: number
    deletions: number
    changedFiles: number
    repoId: string
    createdAt?: Date | string
  }

  export type PullRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubPrId?: BigIntFieldUpdateOperationsInput | bigint | number
    prNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    additions?: IntFieldUpdateOperationsInput | number
    deletions?: IntFieldUpdateOperationsInput | number
    changedFiles?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PullRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubPrId?: BigIntFieldUpdateOperationsInput | bigint | number
    prNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    additions?: IntFieldUpdateOperationsInput | number
    deletions?: IntFieldUpdateOperationsInput | number
    changedFiles?: IntFieldUpdateOperationsInput | number
    repoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PullRequestRiskCreateInput = {
    id?: string
    commentPosted?: boolean
    hasDependencyRisk: boolean
    hasAuthRisk: boolean
    hasMalciousRisk: boolean
    malciousReasons?: PullRequestRiskCreatemalciousReasonsInput | string[]
    affectedFiles?: PullRequestRiskCreateaffectedFilesInput | string[]
    createdAt?: Date | string
    pullRequest: PullRequestCreateNestedOneWithoutRiskInput
  }

  export type PullRequestRiskUncheckedCreateInput = {
    id?: string
    pullRequestId: string
    commentPosted?: boolean
    hasDependencyRisk: boolean
    hasAuthRisk: boolean
    hasMalciousRisk: boolean
    malciousReasons?: PullRequestRiskCreatemalciousReasonsInput | string[]
    affectedFiles?: PullRequestRiskCreateaffectedFilesInput | string[]
    createdAt?: Date | string
  }

  export type PullRequestRiskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    commentPosted?: BoolFieldUpdateOperationsInput | boolean
    hasDependencyRisk?: BoolFieldUpdateOperationsInput | boolean
    hasAuthRisk?: BoolFieldUpdateOperationsInput | boolean
    hasMalciousRisk?: BoolFieldUpdateOperationsInput | boolean
    malciousReasons?: PullRequestRiskUpdatemalciousReasonsInput | string[]
    affectedFiles?: PullRequestRiskUpdateaffectedFilesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pullRequest?: PullRequestUpdateOneRequiredWithoutRiskNestedInput
  }

  export type PullRequestRiskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pullRequestId?: StringFieldUpdateOperationsInput | string
    commentPosted?: BoolFieldUpdateOperationsInput | boolean
    hasDependencyRisk?: BoolFieldUpdateOperationsInput | boolean
    hasAuthRisk?: BoolFieldUpdateOperationsInput | boolean
    hasMalciousRisk?: BoolFieldUpdateOperationsInput | boolean
    malciousReasons?: PullRequestRiskUpdatemalciousReasonsInput | string[]
    affectedFiles?: PullRequestRiskUpdateaffectedFilesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PullRequestRiskCreateManyInput = {
    id?: string
    pullRequestId: string
    commentPosted?: boolean
    hasDependencyRisk: boolean
    hasAuthRisk: boolean
    hasMalciousRisk: boolean
    malciousReasons?: PullRequestRiskCreatemalciousReasonsInput | string[]
    affectedFiles?: PullRequestRiskCreateaffectedFilesInput | string[]
    createdAt?: Date | string
  }

  export type PullRequestRiskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    commentPosted?: BoolFieldUpdateOperationsInput | boolean
    hasDependencyRisk?: BoolFieldUpdateOperationsInput | boolean
    hasAuthRisk?: BoolFieldUpdateOperationsInput | boolean
    hasMalciousRisk?: BoolFieldUpdateOperationsInput | boolean
    malciousReasons?: PullRequestRiskUpdatemalciousReasonsInput | string[]
    affectedFiles?: PullRequestRiskUpdateaffectedFilesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PullRequestRiskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pullRequestId?: StringFieldUpdateOperationsInput | string
    commentPosted?: BoolFieldUpdateOperationsInput | boolean
    hasDependencyRisk?: BoolFieldUpdateOperationsInput | boolean
    hasAuthRisk?: BoolFieldUpdateOperationsInput | boolean
    hasMalciousRisk?: BoolFieldUpdateOperationsInput | boolean
    malciousReasons?: PullRequestRiskUpdatemalciousReasonsInput | string[]
    affectedFiles?: PullRequestRiskUpdateaffectedFilesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type RepositoryListRelationFilter = {
    every?: RepositoryWhereInput
    some?: RepositoryWhereInput
    none?: RepositoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RepositoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    githubId?: SortOrder
    name?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    githubId?: SortOrder
    name?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    githubId?: SortOrder
    name?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PullRequestListRelationFilter = {
    every?: PullRequestWhereInput
    some?: PullRequestWhereInput
    none?: PullRequestWhereInput
  }

  export type PullRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RepositoryCountOrderByAggregateInput = {
    id?: SortOrder
    githubRepoId?: SortOrder
    fullName?: SortOrder
    owner?: SortOrder
    installationId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type RepositoryAvgOrderByAggregateInput = {
    githubRepoId?: SortOrder
    installationId?: SortOrder
  }

  export type RepositoryMaxOrderByAggregateInput = {
    id?: SortOrder
    githubRepoId?: SortOrder
    fullName?: SortOrder
    owner?: SortOrder
    installationId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type RepositoryMinOrderByAggregateInput = {
    id?: SortOrder
    githubRepoId?: SortOrder
    fullName?: SortOrder
    owner?: SortOrder
    installationId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type RepositorySumOrderByAggregateInput = {
    githubRepoId?: SortOrder
    installationId?: SortOrder
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

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type RepositoryScalarRelationFilter = {
    is?: RepositoryWhereInput
    isNot?: RepositoryWhereInput
  }

  export type PullRequestRiskListRelationFilter = {
    every?: PullRequestRiskWhereInput
    some?: PullRequestRiskWhereInput
    none?: PullRequestRiskWhereInput
  }

  export type PullRequestRiskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PullRequestCountOrderByAggregateInput = {
    id?: SortOrder
    githubPrId?: SortOrder
    prNumber?: SortOrder
    title?: SortOrder
    state?: SortOrder
    author?: SortOrder
    additions?: SortOrder
    deletions?: SortOrder
    changedFiles?: SortOrder
    repoId?: SortOrder
    createdAt?: SortOrder
  }

  export type PullRequestAvgOrderByAggregateInput = {
    githubPrId?: SortOrder
    prNumber?: SortOrder
    additions?: SortOrder
    deletions?: SortOrder
    changedFiles?: SortOrder
  }

  export type PullRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    githubPrId?: SortOrder
    prNumber?: SortOrder
    title?: SortOrder
    state?: SortOrder
    author?: SortOrder
    additions?: SortOrder
    deletions?: SortOrder
    changedFiles?: SortOrder
    repoId?: SortOrder
    createdAt?: SortOrder
  }

  export type PullRequestMinOrderByAggregateInput = {
    id?: SortOrder
    githubPrId?: SortOrder
    prNumber?: SortOrder
    title?: SortOrder
    state?: SortOrder
    author?: SortOrder
    additions?: SortOrder
    deletions?: SortOrder
    changedFiles?: SortOrder
    repoId?: SortOrder
    createdAt?: SortOrder
  }

  export type PullRequestSumOrderByAggregateInput = {
    githubPrId?: SortOrder
    prNumber?: SortOrder
    additions?: SortOrder
    deletions?: SortOrder
    changedFiles?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type PullRequestScalarRelationFilter = {
    is?: PullRequestWhereInput
    isNot?: PullRequestWhereInput
  }

  export type PullRequestRiskCountOrderByAggregateInput = {
    id?: SortOrder
    pullRequestId?: SortOrder
    commentPosted?: SortOrder
    hasDependencyRisk?: SortOrder
    hasAuthRisk?: SortOrder
    hasMalciousRisk?: SortOrder
    malciousReasons?: SortOrder
    affectedFiles?: SortOrder
    createdAt?: SortOrder
  }

  export type PullRequestRiskMaxOrderByAggregateInput = {
    id?: SortOrder
    pullRequestId?: SortOrder
    commentPosted?: SortOrder
    hasDependencyRisk?: SortOrder
    hasAuthRisk?: SortOrder
    hasMalciousRisk?: SortOrder
    createdAt?: SortOrder
  }

  export type PullRequestRiskMinOrderByAggregateInput = {
    id?: SortOrder
    pullRequestId?: SortOrder
    commentPosted?: SortOrder
    hasDependencyRisk?: SortOrder
    hasAuthRisk?: SortOrder
    hasMalciousRisk?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RepositoryCreateNestedManyWithoutUserInput = {
    create?: XOR<RepositoryCreateWithoutUserInput, RepositoryUncheckedCreateWithoutUserInput> | RepositoryCreateWithoutUserInput[] | RepositoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RepositoryCreateOrConnectWithoutUserInput | RepositoryCreateOrConnectWithoutUserInput[]
    createMany?: RepositoryCreateManyUserInputEnvelope
    connect?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
  }

  export type RepositoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RepositoryCreateWithoutUserInput, RepositoryUncheckedCreateWithoutUserInput> | RepositoryCreateWithoutUserInput[] | RepositoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RepositoryCreateOrConnectWithoutUserInput | RepositoryCreateOrConnectWithoutUserInput[]
    createMany?: RepositoryCreateManyUserInputEnvelope
    connect?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RepositoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<RepositoryCreateWithoutUserInput, RepositoryUncheckedCreateWithoutUserInput> | RepositoryCreateWithoutUserInput[] | RepositoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RepositoryCreateOrConnectWithoutUserInput | RepositoryCreateOrConnectWithoutUserInput[]
    upsert?: RepositoryUpsertWithWhereUniqueWithoutUserInput | RepositoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RepositoryCreateManyUserInputEnvelope
    set?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    disconnect?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    delete?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    connect?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    update?: RepositoryUpdateWithWhereUniqueWithoutUserInput | RepositoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RepositoryUpdateManyWithWhereWithoutUserInput | RepositoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RepositoryScalarWhereInput | RepositoryScalarWhereInput[]
  }

  export type RepositoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RepositoryCreateWithoutUserInput, RepositoryUncheckedCreateWithoutUserInput> | RepositoryCreateWithoutUserInput[] | RepositoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RepositoryCreateOrConnectWithoutUserInput | RepositoryCreateOrConnectWithoutUserInput[]
    upsert?: RepositoryUpsertWithWhereUniqueWithoutUserInput | RepositoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RepositoryCreateManyUserInputEnvelope
    set?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    disconnect?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    delete?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    connect?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    update?: RepositoryUpdateWithWhereUniqueWithoutUserInput | RepositoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RepositoryUpdateManyWithWhereWithoutUserInput | RepositoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RepositoryScalarWhereInput | RepositoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReposInput = {
    create?: XOR<UserCreateWithoutReposInput, UserUncheckedCreateWithoutReposInput>
    connectOrCreate?: UserCreateOrConnectWithoutReposInput
    connect?: UserWhereUniqueInput
  }

  export type PullRequestCreateNestedManyWithoutRepositoryInput = {
    create?: XOR<PullRequestCreateWithoutRepositoryInput, PullRequestUncheckedCreateWithoutRepositoryInput> | PullRequestCreateWithoutRepositoryInput[] | PullRequestUncheckedCreateWithoutRepositoryInput[]
    connectOrCreate?: PullRequestCreateOrConnectWithoutRepositoryInput | PullRequestCreateOrConnectWithoutRepositoryInput[]
    createMany?: PullRequestCreateManyRepositoryInputEnvelope
    connect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
  }

  export type PullRequestUncheckedCreateNestedManyWithoutRepositoryInput = {
    create?: XOR<PullRequestCreateWithoutRepositoryInput, PullRequestUncheckedCreateWithoutRepositoryInput> | PullRequestCreateWithoutRepositoryInput[] | PullRequestUncheckedCreateWithoutRepositoryInput[]
    connectOrCreate?: PullRequestCreateOrConnectWithoutRepositoryInput | PullRequestCreateOrConnectWithoutRepositoryInput[]
    createMany?: PullRequestCreateManyRepositoryInputEnvelope
    connect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutReposNestedInput = {
    create?: XOR<UserCreateWithoutReposInput, UserUncheckedCreateWithoutReposInput>
    connectOrCreate?: UserCreateOrConnectWithoutReposInput
    upsert?: UserUpsertWithoutReposInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReposInput, UserUpdateWithoutReposInput>, UserUncheckedUpdateWithoutReposInput>
  }

  export type PullRequestUpdateManyWithoutRepositoryNestedInput = {
    create?: XOR<PullRequestCreateWithoutRepositoryInput, PullRequestUncheckedCreateWithoutRepositoryInput> | PullRequestCreateWithoutRepositoryInput[] | PullRequestUncheckedCreateWithoutRepositoryInput[]
    connectOrCreate?: PullRequestCreateOrConnectWithoutRepositoryInput | PullRequestCreateOrConnectWithoutRepositoryInput[]
    upsert?: PullRequestUpsertWithWhereUniqueWithoutRepositoryInput | PullRequestUpsertWithWhereUniqueWithoutRepositoryInput[]
    createMany?: PullRequestCreateManyRepositoryInputEnvelope
    set?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    disconnect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    delete?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    connect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    update?: PullRequestUpdateWithWhereUniqueWithoutRepositoryInput | PullRequestUpdateWithWhereUniqueWithoutRepositoryInput[]
    updateMany?: PullRequestUpdateManyWithWhereWithoutRepositoryInput | PullRequestUpdateManyWithWhereWithoutRepositoryInput[]
    deleteMany?: PullRequestScalarWhereInput | PullRequestScalarWhereInput[]
  }

  export type PullRequestUncheckedUpdateManyWithoutRepositoryNestedInput = {
    create?: XOR<PullRequestCreateWithoutRepositoryInput, PullRequestUncheckedCreateWithoutRepositoryInput> | PullRequestCreateWithoutRepositoryInput[] | PullRequestUncheckedCreateWithoutRepositoryInput[]
    connectOrCreate?: PullRequestCreateOrConnectWithoutRepositoryInput | PullRequestCreateOrConnectWithoutRepositoryInput[]
    upsert?: PullRequestUpsertWithWhereUniqueWithoutRepositoryInput | PullRequestUpsertWithWhereUniqueWithoutRepositoryInput[]
    createMany?: PullRequestCreateManyRepositoryInputEnvelope
    set?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    disconnect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    delete?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    connect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    update?: PullRequestUpdateWithWhereUniqueWithoutRepositoryInput | PullRequestUpdateWithWhereUniqueWithoutRepositoryInput[]
    updateMany?: PullRequestUpdateManyWithWhereWithoutRepositoryInput | PullRequestUpdateManyWithWhereWithoutRepositoryInput[]
    deleteMany?: PullRequestScalarWhereInput | PullRequestScalarWhereInput[]
  }

  export type RepositoryCreateNestedOneWithoutPullRequestsInput = {
    create?: XOR<RepositoryCreateWithoutPullRequestsInput, RepositoryUncheckedCreateWithoutPullRequestsInput>
    connectOrCreate?: RepositoryCreateOrConnectWithoutPullRequestsInput
    connect?: RepositoryWhereUniqueInput
  }

  export type PullRequestRiskCreateNestedManyWithoutPullRequestInput = {
    create?: XOR<PullRequestRiskCreateWithoutPullRequestInput, PullRequestRiskUncheckedCreateWithoutPullRequestInput> | PullRequestRiskCreateWithoutPullRequestInput[] | PullRequestRiskUncheckedCreateWithoutPullRequestInput[]
    connectOrCreate?: PullRequestRiskCreateOrConnectWithoutPullRequestInput | PullRequestRiskCreateOrConnectWithoutPullRequestInput[]
    createMany?: PullRequestRiskCreateManyPullRequestInputEnvelope
    connect?: PullRequestRiskWhereUniqueInput | PullRequestRiskWhereUniqueInput[]
  }

  export type PullRequestRiskUncheckedCreateNestedManyWithoutPullRequestInput = {
    create?: XOR<PullRequestRiskCreateWithoutPullRequestInput, PullRequestRiskUncheckedCreateWithoutPullRequestInput> | PullRequestRiskCreateWithoutPullRequestInput[] | PullRequestRiskUncheckedCreateWithoutPullRequestInput[]
    connectOrCreate?: PullRequestRiskCreateOrConnectWithoutPullRequestInput | PullRequestRiskCreateOrConnectWithoutPullRequestInput[]
    createMany?: PullRequestRiskCreateManyPullRequestInputEnvelope
    connect?: PullRequestRiskWhereUniqueInput | PullRequestRiskWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type RepositoryUpdateOneRequiredWithoutPullRequestsNestedInput = {
    create?: XOR<RepositoryCreateWithoutPullRequestsInput, RepositoryUncheckedCreateWithoutPullRequestsInput>
    connectOrCreate?: RepositoryCreateOrConnectWithoutPullRequestsInput
    upsert?: RepositoryUpsertWithoutPullRequestsInput
    connect?: RepositoryWhereUniqueInput
    update?: XOR<XOR<RepositoryUpdateToOneWithWhereWithoutPullRequestsInput, RepositoryUpdateWithoutPullRequestsInput>, RepositoryUncheckedUpdateWithoutPullRequestsInput>
  }

  export type PullRequestRiskUpdateManyWithoutPullRequestNestedInput = {
    create?: XOR<PullRequestRiskCreateWithoutPullRequestInput, PullRequestRiskUncheckedCreateWithoutPullRequestInput> | PullRequestRiskCreateWithoutPullRequestInput[] | PullRequestRiskUncheckedCreateWithoutPullRequestInput[]
    connectOrCreate?: PullRequestRiskCreateOrConnectWithoutPullRequestInput | PullRequestRiskCreateOrConnectWithoutPullRequestInput[]
    upsert?: PullRequestRiskUpsertWithWhereUniqueWithoutPullRequestInput | PullRequestRiskUpsertWithWhereUniqueWithoutPullRequestInput[]
    createMany?: PullRequestRiskCreateManyPullRequestInputEnvelope
    set?: PullRequestRiskWhereUniqueInput | PullRequestRiskWhereUniqueInput[]
    disconnect?: PullRequestRiskWhereUniqueInput | PullRequestRiskWhereUniqueInput[]
    delete?: PullRequestRiskWhereUniqueInput | PullRequestRiskWhereUniqueInput[]
    connect?: PullRequestRiskWhereUniqueInput | PullRequestRiskWhereUniqueInput[]
    update?: PullRequestRiskUpdateWithWhereUniqueWithoutPullRequestInput | PullRequestRiskUpdateWithWhereUniqueWithoutPullRequestInput[]
    updateMany?: PullRequestRiskUpdateManyWithWhereWithoutPullRequestInput | PullRequestRiskUpdateManyWithWhereWithoutPullRequestInput[]
    deleteMany?: PullRequestRiskScalarWhereInput | PullRequestRiskScalarWhereInput[]
  }

  export type PullRequestRiskUncheckedUpdateManyWithoutPullRequestNestedInput = {
    create?: XOR<PullRequestRiskCreateWithoutPullRequestInput, PullRequestRiskUncheckedCreateWithoutPullRequestInput> | PullRequestRiskCreateWithoutPullRequestInput[] | PullRequestRiskUncheckedCreateWithoutPullRequestInput[]
    connectOrCreate?: PullRequestRiskCreateOrConnectWithoutPullRequestInput | PullRequestRiskCreateOrConnectWithoutPullRequestInput[]
    upsert?: PullRequestRiskUpsertWithWhereUniqueWithoutPullRequestInput | PullRequestRiskUpsertWithWhereUniqueWithoutPullRequestInput[]
    createMany?: PullRequestRiskCreateManyPullRequestInputEnvelope
    set?: PullRequestRiskWhereUniqueInput | PullRequestRiskWhereUniqueInput[]
    disconnect?: PullRequestRiskWhereUniqueInput | PullRequestRiskWhereUniqueInput[]
    delete?: PullRequestRiskWhereUniqueInput | PullRequestRiskWhereUniqueInput[]
    connect?: PullRequestRiskWhereUniqueInput | PullRequestRiskWhereUniqueInput[]
    update?: PullRequestRiskUpdateWithWhereUniqueWithoutPullRequestInput | PullRequestRiskUpdateWithWhereUniqueWithoutPullRequestInput[]
    updateMany?: PullRequestRiskUpdateManyWithWhereWithoutPullRequestInput | PullRequestRiskUpdateManyWithWhereWithoutPullRequestInput[]
    deleteMany?: PullRequestRiskScalarWhereInput | PullRequestRiskScalarWhereInput[]
  }

  export type PullRequestRiskCreatemalciousReasonsInput = {
    set: string[]
  }

  export type PullRequestRiskCreateaffectedFilesInput = {
    set: string[]
  }

  export type PullRequestCreateNestedOneWithoutRiskInput = {
    create?: XOR<PullRequestCreateWithoutRiskInput, PullRequestUncheckedCreateWithoutRiskInput>
    connectOrCreate?: PullRequestCreateOrConnectWithoutRiskInput
    connect?: PullRequestWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PullRequestRiskUpdatemalciousReasonsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PullRequestRiskUpdateaffectedFilesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PullRequestUpdateOneRequiredWithoutRiskNestedInput = {
    create?: XOR<PullRequestCreateWithoutRiskInput, PullRequestUncheckedCreateWithoutRiskInput>
    connectOrCreate?: PullRequestCreateOrConnectWithoutRiskInput
    upsert?: PullRequestUpsertWithoutRiskInput
    connect?: PullRequestWhereUniqueInput
    update?: XOR<XOR<PullRequestUpdateToOneWithWhereWithoutRiskInput, PullRequestUpdateWithoutRiskInput>, PullRequestUncheckedUpdateWithoutRiskInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RepositoryCreateWithoutUserInput = {
    id?: string
    githubRepoId: number
    fullName: string
    owner: string
    installationId: number
    createdAt?: Date | string
    pullRequests?: PullRequestCreateNestedManyWithoutRepositoryInput
  }

  export type RepositoryUncheckedCreateWithoutUserInput = {
    id?: string
    githubRepoId: number
    fullName: string
    owner: string
    installationId: number
    createdAt?: Date | string
    pullRequests?: PullRequestUncheckedCreateNestedManyWithoutRepositoryInput
  }

  export type RepositoryCreateOrConnectWithoutUserInput = {
    where: RepositoryWhereUniqueInput
    create: XOR<RepositoryCreateWithoutUserInput, RepositoryUncheckedCreateWithoutUserInput>
  }

  export type RepositoryCreateManyUserInputEnvelope = {
    data: RepositoryCreateManyUserInput | RepositoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RepositoryUpsertWithWhereUniqueWithoutUserInput = {
    where: RepositoryWhereUniqueInput
    update: XOR<RepositoryUpdateWithoutUserInput, RepositoryUncheckedUpdateWithoutUserInput>
    create: XOR<RepositoryCreateWithoutUserInput, RepositoryUncheckedCreateWithoutUserInput>
  }

  export type RepositoryUpdateWithWhereUniqueWithoutUserInput = {
    where: RepositoryWhereUniqueInput
    data: XOR<RepositoryUpdateWithoutUserInput, RepositoryUncheckedUpdateWithoutUserInput>
  }

  export type RepositoryUpdateManyWithWhereWithoutUserInput = {
    where: RepositoryScalarWhereInput
    data: XOR<RepositoryUpdateManyMutationInput, RepositoryUncheckedUpdateManyWithoutUserInput>
  }

  export type RepositoryScalarWhereInput = {
    AND?: RepositoryScalarWhereInput | RepositoryScalarWhereInput[]
    OR?: RepositoryScalarWhereInput[]
    NOT?: RepositoryScalarWhereInput | RepositoryScalarWhereInput[]
    id?: StringFilter<"Repository"> | string
    githubRepoId?: IntFilter<"Repository"> | number
    fullName?: StringFilter<"Repository"> | string
    owner?: StringFilter<"Repository"> | string
    installationId?: IntFilter<"Repository"> | number
    userId?: StringFilter<"Repository"> | string
    createdAt?: DateTimeFilter<"Repository"> | Date | string
  }

  export type UserCreateWithoutReposInput = {
    id?: string
    githubId: string
    name?: string | null
  }

  export type UserUncheckedCreateWithoutReposInput = {
    id?: string
    githubId: string
    name?: string | null
  }

  export type UserCreateOrConnectWithoutReposInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReposInput, UserUncheckedCreateWithoutReposInput>
  }

  export type PullRequestCreateWithoutRepositoryInput = {
    id?: string
    githubPrId: bigint | number
    prNumber: number
    title: string
    state: string
    author: string
    additions: number
    deletions: number
    changedFiles: number
    createdAt?: Date | string
    risk?: PullRequestRiskCreateNestedManyWithoutPullRequestInput
  }

  export type PullRequestUncheckedCreateWithoutRepositoryInput = {
    id?: string
    githubPrId: bigint | number
    prNumber: number
    title: string
    state: string
    author: string
    additions: number
    deletions: number
    changedFiles: number
    createdAt?: Date | string
    risk?: PullRequestRiskUncheckedCreateNestedManyWithoutPullRequestInput
  }

  export type PullRequestCreateOrConnectWithoutRepositoryInput = {
    where: PullRequestWhereUniqueInput
    create: XOR<PullRequestCreateWithoutRepositoryInput, PullRequestUncheckedCreateWithoutRepositoryInput>
  }

  export type PullRequestCreateManyRepositoryInputEnvelope = {
    data: PullRequestCreateManyRepositoryInput | PullRequestCreateManyRepositoryInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutReposInput = {
    update: XOR<UserUpdateWithoutReposInput, UserUncheckedUpdateWithoutReposInput>
    create: XOR<UserCreateWithoutReposInput, UserUncheckedCreateWithoutReposInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReposInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReposInput, UserUncheckedUpdateWithoutReposInput>
  }

  export type UserUpdateWithoutReposInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateWithoutReposInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PullRequestUpsertWithWhereUniqueWithoutRepositoryInput = {
    where: PullRequestWhereUniqueInput
    update: XOR<PullRequestUpdateWithoutRepositoryInput, PullRequestUncheckedUpdateWithoutRepositoryInput>
    create: XOR<PullRequestCreateWithoutRepositoryInput, PullRequestUncheckedCreateWithoutRepositoryInput>
  }

  export type PullRequestUpdateWithWhereUniqueWithoutRepositoryInput = {
    where: PullRequestWhereUniqueInput
    data: XOR<PullRequestUpdateWithoutRepositoryInput, PullRequestUncheckedUpdateWithoutRepositoryInput>
  }

  export type PullRequestUpdateManyWithWhereWithoutRepositoryInput = {
    where: PullRequestScalarWhereInput
    data: XOR<PullRequestUpdateManyMutationInput, PullRequestUncheckedUpdateManyWithoutRepositoryInput>
  }

  export type PullRequestScalarWhereInput = {
    AND?: PullRequestScalarWhereInput | PullRequestScalarWhereInput[]
    OR?: PullRequestScalarWhereInput[]
    NOT?: PullRequestScalarWhereInput | PullRequestScalarWhereInput[]
    id?: StringFilter<"PullRequest"> | string
    githubPrId?: BigIntFilter<"PullRequest"> | bigint | number
    prNumber?: IntFilter<"PullRequest"> | number
    title?: StringFilter<"PullRequest"> | string
    state?: StringFilter<"PullRequest"> | string
    author?: StringFilter<"PullRequest"> | string
    additions?: IntFilter<"PullRequest"> | number
    deletions?: IntFilter<"PullRequest"> | number
    changedFiles?: IntFilter<"PullRequest"> | number
    repoId?: StringFilter<"PullRequest"> | string
    createdAt?: DateTimeFilter<"PullRequest"> | Date | string
  }

  export type RepositoryCreateWithoutPullRequestsInput = {
    id?: string
    githubRepoId: number
    fullName: string
    owner: string
    installationId: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReposInput
  }

  export type RepositoryUncheckedCreateWithoutPullRequestsInput = {
    id?: string
    githubRepoId: number
    fullName: string
    owner: string
    installationId: number
    userId: string
    createdAt?: Date | string
  }

  export type RepositoryCreateOrConnectWithoutPullRequestsInput = {
    where: RepositoryWhereUniqueInput
    create: XOR<RepositoryCreateWithoutPullRequestsInput, RepositoryUncheckedCreateWithoutPullRequestsInput>
  }

  export type PullRequestRiskCreateWithoutPullRequestInput = {
    id?: string
    commentPosted?: boolean
    hasDependencyRisk: boolean
    hasAuthRisk: boolean
    hasMalciousRisk: boolean
    malciousReasons?: PullRequestRiskCreatemalciousReasonsInput | string[]
    affectedFiles?: PullRequestRiskCreateaffectedFilesInput | string[]
    createdAt?: Date | string
  }

  export type PullRequestRiskUncheckedCreateWithoutPullRequestInput = {
    id?: string
    commentPosted?: boolean
    hasDependencyRisk: boolean
    hasAuthRisk: boolean
    hasMalciousRisk: boolean
    malciousReasons?: PullRequestRiskCreatemalciousReasonsInput | string[]
    affectedFiles?: PullRequestRiskCreateaffectedFilesInput | string[]
    createdAt?: Date | string
  }

  export type PullRequestRiskCreateOrConnectWithoutPullRequestInput = {
    where: PullRequestRiskWhereUniqueInput
    create: XOR<PullRequestRiskCreateWithoutPullRequestInput, PullRequestRiskUncheckedCreateWithoutPullRequestInput>
  }

  export type PullRequestRiskCreateManyPullRequestInputEnvelope = {
    data: PullRequestRiskCreateManyPullRequestInput | PullRequestRiskCreateManyPullRequestInput[]
    skipDuplicates?: boolean
  }

  export type RepositoryUpsertWithoutPullRequestsInput = {
    update: XOR<RepositoryUpdateWithoutPullRequestsInput, RepositoryUncheckedUpdateWithoutPullRequestsInput>
    create: XOR<RepositoryCreateWithoutPullRequestsInput, RepositoryUncheckedCreateWithoutPullRequestsInput>
    where?: RepositoryWhereInput
  }

  export type RepositoryUpdateToOneWithWhereWithoutPullRequestsInput = {
    where?: RepositoryWhereInput
    data: XOR<RepositoryUpdateWithoutPullRequestsInput, RepositoryUncheckedUpdateWithoutPullRequestsInput>
  }

  export type RepositoryUpdateWithoutPullRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubRepoId?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    installationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReposNestedInput
  }

  export type RepositoryUncheckedUpdateWithoutPullRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubRepoId?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    installationId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PullRequestRiskUpsertWithWhereUniqueWithoutPullRequestInput = {
    where: PullRequestRiskWhereUniqueInput
    update: XOR<PullRequestRiskUpdateWithoutPullRequestInput, PullRequestRiskUncheckedUpdateWithoutPullRequestInput>
    create: XOR<PullRequestRiskCreateWithoutPullRequestInput, PullRequestRiskUncheckedCreateWithoutPullRequestInput>
  }

  export type PullRequestRiskUpdateWithWhereUniqueWithoutPullRequestInput = {
    where: PullRequestRiskWhereUniqueInput
    data: XOR<PullRequestRiskUpdateWithoutPullRequestInput, PullRequestRiskUncheckedUpdateWithoutPullRequestInput>
  }

  export type PullRequestRiskUpdateManyWithWhereWithoutPullRequestInput = {
    where: PullRequestRiskScalarWhereInput
    data: XOR<PullRequestRiskUpdateManyMutationInput, PullRequestRiskUncheckedUpdateManyWithoutPullRequestInput>
  }

  export type PullRequestRiskScalarWhereInput = {
    AND?: PullRequestRiskScalarWhereInput | PullRequestRiskScalarWhereInput[]
    OR?: PullRequestRiskScalarWhereInput[]
    NOT?: PullRequestRiskScalarWhereInput | PullRequestRiskScalarWhereInput[]
    id?: StringFilter<"PullRequestRisk"> | string
    pullRequestId?: StringFilter<"PullRequestRisk"> | string
    commentPosted?: BoolFilter<"PullRequestRisk"> | boolean
    hasDependencyRisk?: BoolFilter<"PullRequestRisk"> | boolean
    hasAuthRisk?: BoolFilter<"PullRequestRisk"> | boolean
    hasMalciousRisk?: BoolFilter<"PullRequestRisk"> | boolean
    malciousReasons?: StringNullableListFilter<"PullRequestRisk">
    affectedFiles?: StringNullableListFilter<"PullRequestRisk">
    createdAt?: DateTimeFilter<"PullRequestRisk"> | Date | string
  }

  export type PullRequestCreateWithoutRiskInput = {
    id?: string
    githubPrId: bigint | number
    prNumber: number
    title: string
    state: string
    author: string
    additions: number
    deletions: number
    changedFiles: number
    createdAt?: Date | string
    repository: RepositoryCreateNestedOneWithoutPullRequestsInput
  }

  export type PullRequestUncheckedCreateWithoutRiskInput = {
    id?: string
    githubPrId: bigint | number
    prNumber: number
    title: string
    state: string
    author: string
    additions: number
    deletions: number
    changedFiles: number
    repoId: string
    createdAt?: Date | string
  }

  export type PullRequestCreateOrConnectWithoutRiskInput = {
    where: PullRequestWhereUniqueInput
    create: XOR<PullRequestCreateWithoutRiskInput, PullRequestUncheckedCreateWithoutRiskInput>
  }

  export type PullRequestUpsertWithoutRiskInput = {
    update: XOR<PullRequestUpdateWithoutRiskInput, PullRequestUncheckedUpdateWithoutRiskInput>
    create: XOR<PullRequestCreateWithoutRiskInput, PullRequestUncheckedCreateWithoutRiskInput>
    where?: PullRequestWhereInput
  }

  export type PullRequestUpdateToOneWithWhereWithoutRiskInput = {
    where?: PullRequestWhereInput
    data: XOR<PullRequestUpdateWithoutRiskInput, PullRequestUncheckedUpdateWithoutRiskInput>
  }

  export type PullRequestUpdateWithoutRiskInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubPrId?: BigIntFieldUpdateOperationsInput | bigint | number
    prNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    additions?: IntFieldUpdateOperationsInput | number
    deletions?: IntFieldUpdateOperationsInput | number
    changedFiles?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repository?: RepositoryUpdateOneRequiredWithoutPullRequestsNestedInput
  }

  export type PullRequestUncheckedUpdateWithoutRiskInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubPrId?: BigIntFieldUpdateOperationsInput | bigint | number
    prNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    additions?: IntFieldUpdateOperationsInput | number
    deletions?: IntFieldUpdateOperationsInput | number
    changedFiles?: IntFieldUpdateOperationsInput | number
    repoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepositoryCreateManyUserInput = {
    id?: string
    githubRepoId: number
    fullName: string
    owner: string
    installationId: number
    createdAt?: Date | string
  }

  export type RepositoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubRepoId?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    installationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pullRequests?: PullRequestUpdateManyWithoutRepositoryNestedInput
  }

  export type RepositoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubRepoId?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    installationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pullRequests?: PullRequestUncheckedUpdateManyWithoutRepositoryNestedInput
  }

  export type RepositoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubRepoId?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    installationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PullRequestCreateManyRepositoryInput = {
    id?: string
    githubPrId: bigint | number
    prNumber: number
    title: string
    state: string
    author: string
    additions: number
    deletions: number
    changedFiles: number
    createdAt?: Date | string
  }

  export type PullRequestUpdateWithoutRepositoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubPrId?: BigIntFieldUpdateOperationsInput | bigint | number
    prNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    additions?: IntFieldUpdateOperationsInput | number
    deletions?: IntFieldUpdateOperationsInput | number
    changedFiles?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    risk?: PullRequestRiskUpdateManyWithoutPullRequestNestedInput
  }

  export type PullRequestUncheckedUpdateWithoutRepositoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubPrId?: BigIntFieldUpdateOperationsInput | bigint | number
    prNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    additions?: IntFieldUpdateOperationsInput | number
    deletions?: IntFieldUpdateOperationsInput | number
    changedFiles?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    risk?: PullRequestRiskUncheckedUpdateManyWithoutPullRequestNestedInput
  }

  export type PullRequestUncheckedUpdateManyWithoutRepositoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubPrId?: BigIntFieldUpdateOperationsInput | bigint | number
    prNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    additions?: IntFieldUpdateOperationsInput | number
    deletions?: IntFieldUpdateOperationsInput | number
    changedFiles?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PullRequestRiskCreateManyPullRequestInput = {
    id?: string
    commentPosted?: boolean
    hasDependencyRisk: boolean
    hasAuthRisk: boolean
    hasMalciousRisk: boolean
    malciousReasons?: PullRequestRiskCreatemalciousReasonsInput | string[]
    affectedFiles?: PullRequestRiskCreateaffectedFilesInput | string[]
    createdAt?: Date | string
  }

  export type PullRequestRiskUpdateWithoutPullRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    commentPosted?: BoolFieldUpdateOperationsInput | boolean
    hasDependencyRisk?: BoolFieldUpdateOperationsInput | boolean
    hasAuthRisk?: BoolFieldUpdateOperationsInput | boolean
    hasMalciousRisk?: BoolFieldUpdateOperationsInput | boolean
    malciousReasons?: PullRequestRiskUpdatemalciousReasonsInput | string[]
    affectedFiles?: PullRequestRiskUpdateaffectedFilesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PullRequestRiskUncheckedUpdateWithoutPullRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    commentPosted?: BoolFieldUpdateOperationsInput | boolean
    hasDependencyRisk?: BoolFieldUpdateOperationsInput | boolean
    hasAuthRisk?: BoolFieldUpdateOperationsInput | boolean
    hasMalciousRisk?: BoolFieldUpdateOperationsInput | boolean
    malciousReasons?: PullRequestRiskUpdatemalciousReasonsInput | string[]
    affectedFiles?: PullRequestRiskUpdateaffectedFilesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PullRequestRiskUncheckedUpdateManyWithoutPullRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    commentPosted?: BoolFieldUpdateOperationsInput | boolean
    hasDependencyRisk?: BoolFieldUpdateOperationsInput | boolean
    hasAuthRisk?: BoolFieldUpdateOperationsInput | boolean
    hasMalciousRisk?: BoolFieldUpdateOperationsInput | boolean
    malciousReasons?: PullRequestRiskUpdatemalciousReasonsInput | string[]
    affectedFiles?: PullRequestRiskUpdateaffectedFilesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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