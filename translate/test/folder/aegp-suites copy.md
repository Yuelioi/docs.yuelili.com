## 动态流

`AEGP_DynamicStreamSuite` 用于访问和操作绘画和文本流。

在使用仅适用于特定流类型的函数之前，请使用 `AEGP_GetStreamGroupingType` 和 `AEGP_GetDynamicStreamFlags` 来识别流。

另外请注意，通常你可以简单地使用 [Stream Suite](#stream-suite) 调用来处理动态流。另一方面，只有那些特定于动态流的函数才在此套件中。

### AEGP_DynamicStreamSuite4

|  函数  |  用途  |
|-----|---|
| `AEGP_GetNewStreamRefForLayer`  | 获取与图层对应的 `AEGP_StreamRefH`。此函数用于启动图层流的递归遍历。  |
|  | <pre lang="cpp">AEGP_GetNewStreamRefForLayer(<br/>  AEGP_PluginID  aegp_plugin_id,<br/>  AEGP_LayerH  layerH,<br/>  AEGP_StreamRefH  \*streamPH);</pre>  |
| `AEGP_GetNewStreamRefForMask`  | 获取与蒙版对应的 `AEGP_StreamRefH`。  |
|  | <pre lang="cpp">AEGP_GetNewStreamRefForMask(<br/>  AEGP_PluginID  aegp_plugin_id,<br/>  AEGP_MaskRefH  maskH,<br/>  AEGP_StreamRefH  \*streamPH);</pre>  |
| `AEGP_GetStreamDepth`  | 获取与给定 `AEGP_StreamRefH` 关联的子流数量。初始图层的深度为 0。  |
|  | <pre lang="cpp">AEGP_GetStreamDepth(<br/>  AEGP_StreamRefH  streamH,<br/>  A_long  \*depthPL);</pre>  |
| `AEGP_GetStreamGroupingType`  | 获取给定 `AEGP_StreamRefH` 的分组类型。  |
|  | <pre lang="cpp">AEGP_GetStreamGroupingType(<br/>  AEGP_StreamRefH  streamH,<br/>  AEGP_StreamGroupingType  \*group_typeP);</pre>  |
|  | `AEGP_StreamGroupingType` 将是以下之一：  |
|  | - `AEGP_StreamGroupingType_NONE`  |
|  | - `AEGP_StreamGroupingType_LEAF`  |
|  | - `AEGP_StreamGroupingType_NAMED_GROUP`  |
|  | - `AEGP_StreamGroupingType_INDEXED_GROUP`  |
| `AEGP_GetNumStreamsInGroup`  | 获取与给定 `AEGP_StreamRefH` 关联的流数量。  |
|  | 如果使用类型为 `AEGP_StreamGroupingType_LEAF` 的 `AEGP_StreamRefH` 调用此函数，将返回错误。  |
|  | <pre lang="cpp">AEGP_GetNumStreamsInGroup(<br/>  AEGP_StreamRefH  streamH,<br/>  A_long  \*num_streamsPL);</pre>  |
| `AEGP_GetDynamicStreamFlags`  | 获取给定 `AEGP_StreamRefH` 的标志。  |
|  | <pre lang="cpp">AEGP_GetDynamicStreamFlags(<br/>  AEGP_StreamRefH  streamH,<br/>  AEGP_DynStreamFlags  \*flagsP);</pre>  |
|  | `AEGP_DynStreamFlags` 将是以下之一：  |
|  | - `AEGP_DynStreamFlag_ACTIVE_EYEBALL` 表示流可用于读取和写入。  |
|  | - `AEGP_DynStreamFlag_HIDDEN` 表示虽然流仍然可读/可写，但它可能当前在用户界面中不可见。  |
|  | - `AEGP_DynStreamFlag_DISABLED` 一个只读标志。指示 `AEGP_StreamRefH` 是否在用户界面中灰显。  |
|  |  - 注意：从 CS5 开始，如果参数被禁用，则不会返回此标志。  |
|  |  - 相反，请检查 [Parameter UI Flags](../effect-basics/PF_ParamDef.md#parameter-ui-flags) 中的 `PF_PUI_DISABLED`。  |
|  | - `AEGP_DynStreamFlag_ELIDED` 一个只读标志。指示 `AEGP_StreamRefH` 是只读的，用户永远不会看到它。然而，子流仍然可见，并且在时间轴面板中没有缩进。  |
|  | - `AEGP_DynStreamFlag_SHOWN_WHEN_EMPTY` CS6 新增。一个只读标志。指示此流组在为空时应显示。  |
|  | - `AEGP_DynStreamFlag_SKIP_REVEAL_WHEN_UNHIDDEN` CS6 新增。一个只读标志。指示此流属性在取消隐藏时不会自动显示。  |
| `AEGP_SetDynamicStreamFlag`  | 为 `AEGP_StreamRefH` 设置指定的标志。  |
|  | 注意：标志必须单独设置。如果 `undoableB` 为 `TRUE`，则可撤销。  |
|  | <pre lang="cpp">AEGP_SetDynamicStreamFlag(<br/>  AEGP_StreamRefH  streamH,<br/>  AEGP_DynStreamFlags  one_flag,<br/>  A_Boolean  undoableB,<br/>  A_Boolean  setB);</pre>  |
|  | 此调用可用于通过设置和清除 `AEGP_DynStreamFlag_HIDDEN` 来动态显示或隐藏参数。然而，`AEGP_DynStreamFlag_DISABLED` 可能无法设置。  |
| `AEGP_GetNewStreamRefByIndex`  | 从给定的 `AEGP_StreamRefH` 中按索引获取子流。不能用于类型为 `AEGP_StreamGroupingType_LEAF` 的流。  |
|  | <pre lang="cpp">AEGP_GetNewStreamRefByIndex(<br/>  AEGP_PluginID  aegp_plugin_id,<br/>  AEGP_StreamRefH  parent_groupH,<br/>  A_long  indexL,<br/>  AEGP_StreamRefH  \*streamPH);</pre>  |
| `AEGP_GetNewStreamRefByMatchname` | 从给定的 `AEGP_StreamRefH` 中按匹配名称获取子流。仅对 `AEGP_StreamGroupingType_NAMED_GROUP` 合法。  |
|  | <pre lang="cpp">AEGP_GetNewStreamRefByMatchname(<br/>  AEGP_PluginID  aegp_plugin_id,<br/>  AEGP_StreamRefH  parent_groupH,<br/>  const A_char  \*match_nameZ,<br/>  AEGP_StreamRefH  \*streamPH);</pre> |
|  | 以下是一些方便的流名称，可以检索其引用：  |
|  | - `AEGP_StreamGroupName_MASK_PARADE`  |
|  | - `AEGP_StreamGroupName_MASK_ATOM`  |
|  | - `AEGP_StreamName_MASK_FEATHER`  |
|  | - `AEGP_StreamName_MASK_OPACITY`  |
|  | - `AEGP_StreamName_MASK_OFFSET`  |
|  | - `AEGP_StreamGroupName_EFFECT_PARADE`  |
|  | - `AEGP_StreamGroupName_LAYER`  |
|  | - `AEGP_StreamGroupName_AV_LAYER`  |
|  | - `AEGP_StreamGroupName_TEXT_LAYER`  |
|  | - `AEGP_StreamGroupName_CAMERA_LAYER`  |
|  | - `AEGP_StreamGroupName_LIGHT_LAYER`  |
|  | - `AEGP_StreamGroupName_AUDIO`  |
|  | - `AEGP_StreamGroupName_MATERIAL_OPTIONS`  |
|  | - `AEGP_StreamGroupName_TRANSFORM`  |
|  | - `AEGP_StreamGroupName_LIGHT_OPTIONS`  |
|  | - `AEGP_StreamGroupName_CAMERA_OPTIONS`  |
| `AEGP_DeleteStream`  | 从流分组中删除指定的流。  |
|  | 注意：调用者仍然必须处理通过 API 获取的任何 `AEGP_StreamRefH`（已分配）。可撤销。  |
|  | 仅对类型为 `AEGP_StreamGroupingType_INDEXED_GROUP` 的子流有效。  |
|  | <pre lang="cpp">AEGP_DeleteStream(<br/>  AEGP_StreamRefH  streamH);</pre>  |
|  | 注意：从 6.5 开始，如果在流或任何子流被选中时删除流，当前合成选择将变为 `NULL`。  |
| `AEGP_ReorderStream`  | 设置指定 `AEGP_StreamRefH` 的新索引。可撤销。  |
|  | 仅对 `AEGP_StreamGroupingType_INDEXED_GROUP` 的子流有效。  |
|  | `AEGP_StreamRefH` 更新为引用新排序的流。  |
|  | <pre lang="cpp">AEGP_ReorderStream(<br/>  AEGP_StreamRefH  streamH<br/>  A_long  new_indexL);</pre>  |
| `AEGP_DuplicateStream`  | 复制指定的流并将其附加到流组。  |
|  | 可撤销。  |
|  | 仅对 `AEGP_StreamGroupingType_INDEXED_GROUP` 的子流有效。  |
|  | <pre lang="cpp">AEGP_DuplicateStream(<br/>  AEGP_PluginID  aegp_plugin_id,<br/>  AEGP_StreamRefH  streamH,<br/>  A_long  \*new_indexPL0);</pre>  |
| `AEGP_SetStreamName`  | 设置给定 `AEGP_StreamRefH` 的名称。可撤销。`nameZ` 指向一个以 null 结尾的 UTF-16 字符串。  |
|  | 仅对 `AEGP_StreamGroupingType_INDEXED_GROUP` 的子流有效。  |
|  | 注意：如果使用 `force_englishB` 设置为 `TRUE` 检索名称，你将获得流的规范、未更改的名称。  |
|  | <pre lang="cpp">AEGP_SetStreamName(<br/>  AEGP_StreamRefH  streamH,<br/>  const A_UTF16Char  \*nameZ);</pre>  |
|  | 注意：在效果流的组上使用此函数以更改效果的显示名称。  |
| `AEGP_CanAddStream`  | 返回当前是否可以通过 API 添加流。  |
|  | <pre lang="cpp">AEGP_CanAddStream(<br/>  AEGP_StreamRefH  group_streamH,<br/>  const A_char  \*match_nameZ,<br/>  A_Boolean  \*can_addPB);</pre>  |
| `AEGP_AddStream`  | 将流添加到指定的流组。可撤销。仅对 `AEGP_StreamGroupingType_INDEXED_GROUP` 有效。  |
|  | <pre lang="cpp">AEGP_AddStream(<br/>  AEGP_PluginID  aegp_plugin_id,<br/>  AEGP_StreamRefH  indxd_grp_streamH,<br/>  const A_char  \*match_nameZ,<br/>  AEGP_StreamRefH  \*streamPH0);</pre>  |
| `AEGP_GetMatchName`  | 获取指定 `AEGP_StreamRefH` 的匹配名称。  |
|  | 注意：这可能与显示名称不同，可以使用 `AEGP_GetStreamName` 在 [AEGP_StreamSuite5](#aegp_streamsuite5) 中检索显示名称。  |
|  | `nameZ` 的长度最多为 `AEGP_MAX_STREAM_MATCH_NAME_SIZE`。  |
|  | <pre lang="cpp">AEGP_GetMatchName(<br/>  AEGP_StreamRefH  streamH,<br/>  A_char  \*nameZ);</pre>  |
| `AEGP_GetNewParentStreamRef`  | 获取指定 `AEGP_StreamRefH` 的父级的 `AEGP_StreamRefH`。  |
|  | <pre lang="cpp">AEGP_GetNewParentStreamRef(<br/>  AEGP_PluginID  plugin_id,<br/>  AEGP_StreamRefH  streamH,<br/>  AEGP_StreamRefH  \*parentPH);</pre>  |
| `AEGP_GetStreamIsModified`  | 返回指定的 `AEGP_StreamRefH` 是否已被修改。  |
|  | 注意：通过在 After Effects 用户界面中选择合成并输入 "UU"，可以获得相同的结果。  |
|  | <pre lang="cpp">AEGP_GetStreamIsModified(<br/>  AEGP_StreamRefH  streamH,<br/>  A_Boolean  \*modifiedPB);</pre>  |
| `AEGP_GetStreamIndexInParent`  | 获取给定流相对于其父流的索引。  |
|  | 仅对 `AEGP_StreamGroupingType_INDEXED_GROUP` 的子流有效  |
|  | <pre lang="cpp">AEGP_GetStreamIndexInParent(<br/>  AEGP_StreamRefH  streamH,<br/>  A_long  \*indexPL);</pre>  |
|  | !!! 注意  |
|  |  如*其他地方*所述，`AEGP_StreamRefHs` 不会在函数调用之间持久存在。  |
|  | 如果流被重新排序、添加或删除，之前获取的所有 `AEGP_StreamRefHs` 可能会失效。  |
| `AEGP_IsSeparationLeader`  | 仅对叶流有效。如果此流是可以分离其维度的多维流，则返回 true，尽管它们当前可能未分离。  |
|  | 术语：Leader 是可以分离的流，Follower 是 N 个自动流之一，对应于 Leader 的 N 个维度。  |
|  | Leader 并不总是分离的，调用 `AEGP_AreDimensionsSeparated` 以确定它是否分离。从 CS4 开始，唯一分离的流是图层的 Position 属性。  |
|  | 请*不要*编写假设代码，我们预计将来会允许分离更多流。  |
|  | <pre lang="cpp">AEGP_IsSeparationLeader(<br/>  AEGP_StreamRefH  streamH,<br/>  A_Boolean  \*leaderPB);</pre>  |
| `AEGP_AreDimensionsSeparated`  | 诸如 `AEGP_GetNewKeyframeValue` 之类的方法在关键帧索引上工作，绝对*不会*在 Leader 属性上工作，你需要显式检索并操作 Follower。  |
|  | <pre lang="cpp">AEGP_AreDimensionsSeparated(<br/>  AEGP_StreamRefH  streamH,<br/>  A_Boolean  \*separatedPB);</pre>  |
| `AEGP_SetDimensionsSeparated`  | 仅在 `AEGP_IsSeparationLeader()` 为 `true` 时有效。  |
|  | <pre lang="cpp">AEGP_AreDimensionsSeparated(<br/>  AEGP_StreamRefH  streamH,<br/>  A_Boolean  \*separatedPB);</pre>  |
| `AEGP_GetSeparationFollower`  | 检索与 Leader 流的给定维度对应的 Follower 流。  |
|  | `dimS` 的范围可以从 `0` 到 `AEGP_GetStreamValueDimensionality(lea der_streamH) - 1`。  |
|  | <pre lang="cpp">AEGP_GetSeparationFollower(<br/>  AEGP_StreamRefH  leader_streamH<br/>  A_short  dimS,<br/>  AEGP_StreamRefH  \*follower_streamPH);</pre>  |
| `AEGP_IsSeparationFollower`  | 仅对叶流有效。  |
|  | 如果此流是表示 Leader 的一个维度的一维属性，则返回 `true`。  |
|  | 你可以使用 `AEGP_GetSeparationFollower()` 从 Leader 检索流。  |
|  | <pre lang="cpp">AEGP_IsSeparationFollower(<br/>  AEGP_StreamRefH  streamH<br/>  A_Boolean  \*followerPB);</pre>  |
| `AEGP_GetSeparationLeader`  | 仅在分离 Follower 上有效，返回它所属的 Leader。  |
|  | <pre lang="cpp">AEGP_GetSeparationLeader(<br/>  AEGP_StreamRefH  follower_streamH,<br/>  AEGP_StreamRefH