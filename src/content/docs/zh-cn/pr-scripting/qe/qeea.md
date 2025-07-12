---
title: QEEA 接口
---
# QEEA 接口

`qe.ea`

## 描述

`QEEA` 接口与 Premiere Pro 的协作功能相关，提供了对生产项目、同步状态、冲突解决等功能的控制。此接口主要用于管理与 Creative Cloud 相关的生产、协作和编辑会话等。

## 访问方式

```javascript
var ea = qe.ea; // 获取 QEEA 对象
```

## 属性

| 属性名 | 类型 | 描述 |
| --- | --- | --- |
| `isAdministrator` | `boolean` | 当前用户是否为管理员 |

## 方法

| 方法名 | 参数 | 返回值类型 | 描述 |
| --- | --- | --- | --- |
| `benchmarkReflectEverything()` | 无 | `number` | 反射一切的基准测试 |
| `canShare()` | 无 | `number` | 检查是否可以共享 |
| `closeProduction(p0)` | `p0: string` | `boolean` | 关闭指定生产任务 |
| `convertProductionIntoProject(p0)` | `p0: string` | `boolean` | 将生产任务转换为项目 |
| `convertProjectIntoProduction(p0, p1, p2, p3, p4)` | `p0: string, p1: string, p2: boolean, p3: string, p4: boolean` | `boolean` | 将项目转换为生产任务 |
| `createProduction(p0, p1, p2, p3, p4, p5)` | `p0: string, p1: string, p2: boolean, p3: string, p4: string, p5: boolean` | `object` | 创建一个新的生产任务 |
| `doesEditingSessionHaveLocalMedia()` | 无 | `boolean` | 检查编辑会话是否有本地媒体资源 |
| `doesProjectHaveUnsharedChanges()` | 无 | `boolean` | 检查项目是否有未共享的更改 |
| `fetchIMSAccessToken(clientID, clientSecret, scope)` | `clientID: string, clientSecret: string, scope: string` | `string` | 获取 IMS 访问令牌 |
| `getAdminInterface()` | 无 | `object` | 获取管理员接口对象 |
| `getArchivedProductionList()` | 无 | `Array` | 获取已归档的生产任务列表 |
| `getConflicts()` | 无 | `Array` | 获取所有冲突列表 |
| `getCreativeCloudIdentity()` | 无 | `object` | 获取 Creative Cloud 身份信息 |
| `getDiscoveryURL()` | 无 | `string` | 获取发现 URL |
| `getInviteList()` | 无 | `Array` | 获取邀请列表 |
| `getLoggedInDataServerVersion()` | 无 | `string` | 获取已登录数据服务器版本 |
| `getProcessID()` | 无 | `string` | 获取当前进程 ID |
| `getProductionByID(productionIdentifier)` | `productionIdentifier: string` | `object` | 获取指定 ID 的生产任务 |
| `getProductionList()` | 无 | `Array` | 获取所有生产任务列表 |
| `getRemoteServerBuildVersion()` | 无 | `string` | 获取远程服务器构建版本 |
| `getSessionSyncStatus()` | 无 | `string` | 获取会话同步状态 |
| `getUserEmail()` | 无 | `string` | 获取用户邮箱 |
| `getUsername()` | 无 | `string` | 获取用户名 |
| `isCollaborationOnly()` | 无 | `boolean` | 检查是否为仅协作模式 |
| `isConvertProductionIntoProjectRunning()` | 无 | `boolean` | 检查是否正在进行生产转换为项目的操作 |
| `isConvertProjectIntoProductionRunning()` | 无 | `boolean` | 检查是否正在进行项目转换为生产的操作 |
| `isHostedCollaborationOnly()` | 无 | `boolean` | 检查是否为仅托管协作模式 |
| `isLoggedIn()` | 无 | `boolean` | 检查用户是否已登录 |
| `isShareCommandEnabled()` | 无 | `boolean` | 检查是否启用共享命令 |
| `isSyncCommandEnabled()` | 无 | `boolean` | 检查是否启用同步命令 |
| `openCleanSandbox(productionIdentifier)` | `productionIdentifier: string` | `boolean` | 打开干净的沙箱环境 |
| `openProduction(p0)` | `p0: string` | `boolean` | 打开指定的生产任务 |
| `renameProduction(p0)` | `p0: string` | `boolean` | 重命名指定的生产任务 |
| `resolveConflict(p0, p1)` | `p0: object, p1: object` | `boolean` | 解决冲突 |
| `saveProductionAs(p0, p1)` | `p0: string, p1: string` | `boolean` | 将生产任务保存为新的文件 |
| `setAuthToken(p0, p1, p2)` | `p0: string, p1: string, p2: string` | `number` | 设置授权令牌 |
| `setLocalHubConnectionStatus(p0)` | `p0: number` | `boolean` | 设置本地 Hub 连接状态 |
| `setMediaCachePath(p0)` | `p0: string` | `boolean` | 设置媒体缓存路径 |
| `share(p0)` | `p0: string` | `boolean` | 共享指定的生产任务 |
| `sync()` | 无 | `boolean` | 同步生产任务 |
| `waitForCurrentReflectionToComplete()` | 无 | `boolean` | 等待当前反射过程完成 |

### 示例代码

#### 获取当前用户的邮箱

```javascript
var email = qe.ea.getUserEmail();
$.writeln("User email: " + email);
```

#### 创建生产任务并获取其 ID

```javascript

var production = qe.ea.createProduction("NewProduction", "ProjectName", true, "SomePath", "OtherInfo", false);
$.writeln("Production created with ID: " + production.id);
```

#### 同步生产任务

```javascript

var result = qe.ea.sync();
if (result) {
 $.writeln("Sync completed successfully.");
} else {
 $.writeln("Sync failed.");
}
```
