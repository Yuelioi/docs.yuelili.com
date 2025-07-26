---
title: intersect
order: 8
---

要获取射线路径上*所有*相交点列表，请使用[intersect_all](/zh-cn/houdini-vex/geometry/intersect_all "计算指定射线与几何体的所有相交点")。 

`int  intersect(<geometry>geometry, vector orig, vector dir, vector &p, float &u, float &v)` 

`int  intersect(<geometry>geometry, vector orig, vector dir, vector &p, float &u, float &v, ...)` 

计算指定射线与几何体的首个相交点。 
若要获取沿向量的*所有*相交点，请改用[intersect_all](/zh-cn/houdini-vex/geometry/intersect_all "计算指定射线与几何体的所有相交点")。 
可变参数`"farthest"`可用于指示是否返回最后一个相交点而非第一个。 

`int  intersect(<geometry>geometry, vector orig, vector dir, vector &p, vector &uvw)` 

计算指定射线与几何体的首个相交点。 
若要获取沿向量的*所有*相交点，请改用[intersect_all](/zh-cn/houdini-vex/geometry/intersect_all "计算指定射线与几何体的所有相交点")。 

`int  intersect(<geometry>geometry, string group, vector orig, vector dir, vector &p, vector &uvw)` 

计算指定射线与给定组内图元的相交点。 

`<geometry>` 

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。 

或者，该参数可以是指定几何体文件（如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。 

`group` 

若指定，则仅检测该组内的图元。 

`orig` 

射线原点坐标。 

`dir` 

射线方向*及最大距离*。 
本函数不要求归一化的方向向量，而是使用向量长度作为最大检测距离。 

`&p` 

若射线与图元相交，此变量将被覆盖为世界空间中的相交位置。 

`&u`, `&v`, `&uvw` 

若射线与图元相交，此变量将被覆盖为图元上的参数化相交位置。 

返回值 

相交图元的编号，若出现错误或未相交则返回`-1`。 

注意 
当对元球几何体执行相交检测时，无法确定被击中的元球图元编号。 
此时函数将返回相交几何体中的图元总数。 

示例 

## 示例 

```vex 
// 针对第二输入端的几何体执行相交检测，使用当前点位置作为射线原点 
// 并以速度向量方向作为射线方向 
vector origin = @P; 
float max_dist = 1000; 
vector dir = max_dist * normalize(@v); 

vector isect_pos; 
float isect_u, isect_v; 
int isect_prim = intersect(@OpInput2, origin, dir, isect_pos, isect_u, isect_v); 

// 改为返回最远相交点 
isect_prim = intersect(@OpInput2, origin, dir, isect_pos, isect_u, isect_v, "farthest", 1); 

```
