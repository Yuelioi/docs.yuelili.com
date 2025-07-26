---
title: VEX Functions
order: 1
---
See [VEX contexts](../contexts/index.html "Guide to the different contexts in which you can write VEX
programs.") to learn about the different contexts (such as surface shaders or displacement shaders) in which the various functions and [statements](../statement.html) are available.
Functions

## subtopics

Arrays

## array_group

- [append](/en/houdini-vex/arrays/append)
 Adds an item to an array or string.
- [argsort](/en/houdini-vex/arrays/argsort)
 Returns the indices of a sorted version of an array.
- [array](/en/houdini-vex/arrays/array)
 Efficiently creates an array from its arguments.
- [foreach](/en/houdini-vex/arrays/foreach)
 Loops over the items in an array, with optional enumeration.
- [insert](/en/houdini-vex/arrays/insert)
 Inserts an item, array, or string into an array or string.
- [isvalidindex](/en/houdini-vex/arrays/isvalidindex)
 Checks if the index given is valid for the array or string given.
- [len](/en/houdini-vex/arrays/len)
 Returns the length of an array.
- [pop](/en/houdini-vex/arrays/pop)
 Removes the last element of an array and returns it.
- [push](/en/houdini-vex/arrays/push)
 Adds an item to an array.
- [removeindex](/en/houdini-vex/arrays/removeindex)
 Removes an item at the given index from an array.
- [removevalue](/en/houdini-vex/arrays/removevalue)
 Removes an item from an array.
- [reorder](/en/houdini-vex/arrays/reorder)
 Reorders items in an array or string.
- [resize](/en/houdini-vex/arrays/resize)
 Sets the length of an array.
- [reverse](/en/houdini-vex/arrays/reverse)
 Returns an array or string in reverse order.
- [slice](/en/houdini-vex/arrays/slice)
 Slices a sub-string or sub-array of a string or array.
- [sort](/en/houdini-vex/arrays/sort)
 Returns the array sorted in increasing order.
- [upush](/en/houdini-vex/arrays/upush)
 Adds a uniform item to an array.

Attributes and Intrinsics

## attrib_group

- [addattrib](/en/houdini-vex/attributes-and-intrinsics/addattrib)
 Adds an attribute to a geometry.
- [adddetailattrib](/en/houdini-vex/attributes-and-intrinsics/adddetailattrib)
 Adds a detail attribute to a geometry.
- [addpointattrib](/en/houdini-vex/attributes-and-intrinsics/addpointattrib)
 Adds a point attribute to a geometry.
- [addprimattrib](/en/houdini-vex/attributes-and-intrinsics/addprimattrib)
 Adds a primitive attribute to a geometry.
- [addvertexattrib](/en/houdini-vex/attributes-and-intrinsics/addvertexattrib)
 Adds a vertex attribute to a geometry.
- [addvisualizer](/en/houdini-vex/attributes-and-intrinsics/addvisualizer)
 Appends to a geometry’s visualizer detail attribute.
- [attrib](/en/houdini-vex/attributes-and-intrinsics/attrib)
 Reads the value of an attribute from geometry.
- [attribclass](/en/houdini-vex/attributes-and-intrinsics/attribclass)
 Returns the class of a geometry attribute.
- [attribdataid](/en/houdini-vex/attributes-and-intrinsics/attribdataid)
 Returns the data id of a geometry attribute.
- [attribsize](/en/houdini-vex/attributes-and-intrinsics/attribsize)
 Returns the size of a geometry attribute.
- [attribtype](/en/houdini-vex/attributes-and-intrinsics/attribtype)
 Returns the type of a geometry attribute.
- [attribtypeinfo](/en/houdini-vex/attributes-and-intrinsics/attribtypeinfo)
 Returns the transformation metadata of a geometry attribute.
- [curvearclen](/en/houdini-vex/attributes-and-intrinsics/curvearclen)
 Evaluates the length of an arc on a primitive defined by an array of points using parametric uv coordinates.
- [detail](/en/houdini-vex/attributes-and-intrinsics/detail)
 Reads the value of a detail attribute value from a geometry.
- [detailattrib](/en/houdini-vex/attributes-and-intrinsics/detailattrib)
 Reads a detail attribute value from a geometry.
- [detailattribsize](/en/houdini-vex/attributes-and-intrinsics/detailattribsize)
 Returns the size of a geometry detail attribute.
- [detailattribtype](/en/houdini-vex/attributes-and-intrinsics/detailattribtype)
 Returns the type of a geometry detail attribute.
- [detailattribtypeinfo](/en/houdini-vex/attributes-and-intrinsics/detailattribtypeinfo)
 Returns the type info of a geometry attribute.
- [detailintrinsic](/en/houdini-vex/attributes-and-intrinsics/detailintrinsic)
 Reads the value of a detail intrinsic from a geometry.
- [findattribval](/en/houdini-vex/attributes-and-intrinsics/findattribval)
 Finds a primitive/point/vertex that has a certain attribute value.
- [findattribvalcount](/en/houdini-vex/attributes-and-intrinsics/findattribvalcount)
 Returns number of elements where an integer or string attribute has a certain value.
- [getattrib](/en/houdini-vex/attributes-and-intrinsics/getattrib)
 Reads an attribute value from geometry, with validity check.
- [getattribute](/en/houdini-vex/attributes-and-intrinsics/getattribute)
 Copies the value of a geometry attribute into a variable and returns a success flag.
- [hasattrib](/en/houdini-vex/attributes-and-intrinsics/hasattrib)
 Checks whether a geometry attribute exists.
- [hasdetailattrib](/en/houdini-vex/attributes-and-intrinsics/hasdetailattrib)
 Returns if a geometry detail attribute exists.
- [haspointattrib](/en/houdini-vex/attributes-and-intrinsics/haspointattrib)
 Returns if a geometry point attribute exists.
- [hasprimattrib](/en/houdini-vex/attributes-and-intrinsics/hasprimattrib)
 Returns if a geometry prim attribute exists.
- [hasvertexattrib](/en/houdini-vex/attributes-and-intrinsics/hasvertexattrib)
 Returns if a geometry vertex attribute exists.
- [idtopoint](/en/houdini-vex/attributes-and-intrinsics/idtopoint)
 Finds a point by its id attribute.
- [idtoprim](/en/houdini-vex/attributes-and-intrinsics/idtoprim)
 Finds a primitive by its id attribute.
- [nametopoint](/en/houdini-vex/attributes-and-intrinsics/nametopoint)
 Finds a point by its name attribute.
- [nametoprim](/en/houdini-vex/attributes-and-intrinsics/nametoprim)
 Finds a primitive by its name attribute.
- [nuniqueval](/en/houdini-vex/attributes-and-intrinsics/nuniqueval)
 Returns the number of unique values from an integer or string attribute.
- [point](/en/houdini-vex/attributes-and-intrinsics/point)
 Reads a point attribute value from a geometry.
- [pointattrib](/en/houdini-vex/attributes-and-intrinsics/pointattrib)
 Reads a point attribute value from a geometry and outputs a success/fail flag.
- [pointattribsize](/en/houdini-vex/attributes-and-intrinsics/pointattribsize)
 Returns the size of a geometry point attribute.
- [pointattribtype](/en/houdini-vex/attributes-and-intrinsics/pointattribtype)
 Returns the type of a geometry point attribute.
- [pointattribtypeinfo](/en/houdini-vex/attributes-and-intrinsics/pointattribtypeinfo)
 Returns the type info of a geometry attribute.
- [pointlocaltransforms](/en/houdini-vex/attributes-and-intrinsics/pointlocaltransforms)
 Returns an array of point localtransforms from an array of point indices.
- [pointtransform](/en/houdini-vex/attributes-and-intrinsics/pointtransform)
 Returns a point transform from a point index.
- [pointtransformrigid](/en/houdini-vex/attributes-and-intrinsics/pointtransformrigid)
 Returns a rigid point transform from a point index.
- [pointtransforms](/en/houdini-vex/attributes-and-intrinsics/pointtransforms)
 Returns an array of point transforms from an array of point indices.
- [pointtransformsrigid](/en/houdini-vex/attributes-and-intrinsics/pointtransformsrigid)
 Returns an array of rigid point transforms from an array of point indices.
- [prim](/en/houdini-vex/attributes-and-intrinsics/prim)
 Reads a primitive attribute value from a geometry.
- [prim_attribute](/en/houdini-vex/attributes-and-intrinsics/prim_attribute)
 Interpolates the value of an attribute at a certain parametric (u, v) position and copies it into a variable.
- [primarclen](/en/houdini-vex/attributes-and-intrinsics/primarclen)
 Evaluates the length of an arc on a primitive using parametric uv coordinates.
- [primattrib](/en/houdini-vex/attributes-and-intrinsics/primattrib)
 Reads a primitive attribute value from a geometry, outputting a success flag.
- [primattribsize](/en/houdini-vex/attributes-and-intrinsics/primattribsize)
 Returns the size of a geometry prim attribute.
- [primattribtype](/en/houdini-vex/attributes-and-intrinsics/primattribtype)
 Returns the type of a geometry prim attribute.
- [primattribtypeinfo](/en/houdini-vex/attributes-and-intrinsics/primattribtypeinfo)
 Returns the type info of a geometry attribute.
- [primduv](/en/houdini-vex/attributes-and-intrinsics/primduv)
 Returns position derivative on a primitive at a certain parametric (u, v) position.
- [priminteriorweights](/en/houdini-vex/attributes-and-intrinsics/priminteriorweights)
 Finds the indices and weightings of the vertices that will compute an
 interior point given the UVW coordinates.
- [primintrinsic](/en/houdini-vex/attributes-and-intrinsics/primintrinsic)
 Reads a primitive intrinsic from a geometry.
- [primuv](/en/houdini-vex/attributes-and-intrinsics/primuv)
 Interpolates the value of an attribute at a certain parametric (uvw) position.
- [primuvconvert](/en/houdini-vex/attributes-and-intrinsics/primuvconvert)
 Convert parametric UV locations on curve primitives between different spaces.
- [removedetailattrib](/en/houdini-vex/attributes-and-intrinsics/removedetailattrib)
 Removes a detail attribute from a geometry.
- [removepointattrib](/en/houdini-vex/attributes-and-intrinsics/removepointattrib)
 Removes a point attribute from a geometry.
- [removepointgroup](/en/houdini-vex/attributes-and-intrinsics/removepointgroup)
 Removes a point group from a geometry.
- [removeprimattrib](/en/houdini-vex/attributes-and-intrinsics/removeprimattrib)
 Removes a primitive attribute from a geometry.
- [removeprimgroup](/en/houdini-vex/attributes-and-intrinsics/removeprimgroup)
 Removes a primitive group from a geometry.
- [removevertexattrib](/en/houdini-vex/attributes-and-intrinsics/removevertexattrib)
 Removes a vertex attribute from a geometry.
- [removevertexgroup](/en/houdini-vex/attributes-and-intrinsics/removevertexgroup)
 Removes a vertex group from a geometry.
- [setattrib](/en/houdini-vex/attributes-and-intrinsics/setattrib)
 Writes an attribute value to geometry.
- [setattribtypeinfo](/en/houdini-vex/attributes-and-intrinsics/setattribtypeinfo)
 Sets the meaning of an attribute in geometry.
- [setdetailattrib](/en/houdini-vex/attributes-and-intrinsics/setdetailattrib)
 Sets a detail attribute in a geometry.
- [setdetailintrinsic](/en/houdini-vex/attributes-and-intrinsics/setdetailintrinsic)
 Sets the value of a writeable detail intrinsic attribute.
- [setpointattrib](/en/houdini-vex/attributes-and-intrinsics/setpointattrib)
 Sets a point attribute in a geometry.
- [setpointlocaltransforms](/en/houdini-vex/attributes-and-intrinsics/setpointlocaltransforms)
 Sets an array of point local transforms at the given point indices.
- [setpointtransform](/en/houdini-vex/attributes-and-intrinsics/setpointtransform)
 Sets the world space transform of a given point
- [setpointtransforms](/en/houdini-vex/attributes-and-intrinsics/setpointtransforms)
 Sets an array of point transforms at the given point indices.
- [setprimattrib](/en/houdini-vex/attributes-and-intrinsics/setprimattrib)
 Sets a primitive attribute in a geometry.
- [setprimintrinsic](/en/houdini-vex/attributes-and-intrinsics/setprimintrinsic)
 Sets the value of a writeable primitive intrinsic attribute.
- [setvertexattrib](/en/houdini-vex/attributes-and-intrinsics/setvertexattrib)
 Sets a vertex attribute in a geometry.
- [uniqueval](/en/houdini-vex/attributes-and-intrinsics/uniqueval)
 Returns one of the set of unique values across all values for an int or string attribute.
- [uniquevals](/en/houdini-vex/attributes-and-intrinsics/uniquevals)
 Returns the set of unique values across all values for an int or string attribute.
- [uvsample](/en/houdini-vex/attributes-and-intrinsics/uvsample)
 Interpolates the value of an attribute at certain UV coordinates using a UV attribute.
- [vertex](/en/houdini-vex/attributes-and-intrinsics/vertex)
 Reads a vertex attribute value from a geometry.
- [vertexattrib](/en/houdini-vex/attributes-and-intrinsics/vertexattrib)
 Reads a vertex attribute value from a geometry.
- [vertexattribsize](/en/houdini-vex/attributes-and-intrinsics/vertexattribsize)
 Returns the size of a geometry vertex attribute.
- [vertexattribtype](/en/houdini-vex/attributes-and-intrinsics/vertexattribtype)
 Returns the type of a geometry vertex attribute.
- [vertexattribtypeinfo](/en/houdini-vex/attributes-and-intrinsics/vertexattribtypeinfo)
 Returns the type info of a geometry attribute.

BSDFs

## bsdf_group

- [albedo](/en/houdini-vex/bsdfs/albedo)
 Returns the albedo (percentage of reflected light) for a bsdf given the outgoing light direction.
- [ashikhmin](/en/houdini-vex/bsdfs/ashikhmin)
 Returns a specular BSDF using the Ashikhmin shading model.
- [blinn](/en/houdini-vex/bsdfs/blinn)
 Returns a Blinn BSDF or computes Blinn shading.
- [chiang](/en/houdini-vex/bsdfs/chiang)
 Returns a chiang BSDF.
- [chiang_fur](/en/houdini-vex/bsdfs/chiang_fur)
 Returns a chiang_fur BSDF.
- [cone](/en/houdini-vex/bsdfs/cone)
 Returns a cone reflection BSDF.
- [cvex_bsdf](/en/houdini-vex/bsdfs/cvex_bsdf)
 Creates a bsdf object from two CVEX shader strings.
- [diffuse](/en/houdini-vex/bsdfs/diffuse)
 Returns a diffuse BSDF or computes diffuse shading.
- [eval_bsdf](/en/houdini-vex/bsdfs/eval_bsdf)
 Evaluates a bsdf given two vectors.
- [getbounces](/en/houdini-vex/bsdfs/getbounces)
- [ggx](/en/houdini-vex/bsdfs/ggx)
 Returns a ggx BSDF.
- [hair](/en/houdini-vex/bsdfs/hair)
 Returns a BSDF for shading hair.
- [henyeygreenstein](/en/houdini-vex/bsdfs/henyeygreenstein)
 Returns an anisotropic volumetric BSDF, which can scatter light forward or backward.
- [isotropic](/en/houdini-vex/bsdfs/isotropic)
 Returns an isotropic BSDF, which scatters light equally in all directions.
- [mask_bsdf](/en/houdini-vex/bsdfs/mask_bsdf)
 Returns new BSDF that only includes the components specified by the mask.
- [normal_bsdf](/en/houdini-vex/bsdfs/normal_bsdf)
 Returns the normal for the diffuse component of a BSDF.
- [phong](/en/houdini-vex/bsdfs/phong)
 Returns a Phong BSDF or computes Phong shading.
- [phonglobe](/en/houdini-vex/bsdfs/phonglobe)
- [sample_bsdf](/en/houdini-vex/bsdfs/sample_bsdf)
 Samples a BSDF.
- [solid_angle](/en/houdini-vex/bsdfs/solid_angle)
 Computes the solid angle (in steradians) a BSDF function subtends.
- [split_bsdf](/en/houdini-vex/bsdfs/split_bsdf)
 Splits a bsdf into its component lobes.
- [sssapprox](/en/houdini-vex/bsdfs/sssapprox)
 Creates an approximate SSS BSDF.

BSDFs

## BSDFs_group

- [specular](/en/houdini-vex/bsdfs/specular)
 Returns a specular BSDF or computes specular shading.

CHOP

## CHOP_group

- [chadd](/en/houdini-vex/chop/chadd)
 Adds new channels to a CHOP node.
- [chattr](/en/houdini-vex/chop/chattr)
 Reads from a CHOP attribute.
- [chattrnames](/en/houdini-vex/chop/chattrnames)
 Reads CHOP attribute names of a given attribute class from a CHOP input.
- [chend](/en/houdini-vex/chop/chend)
 Returns the sample number of the last sample in a given CHOP input.
- [chendf](/en/houdini-vex/chop/chendf)
 Returns the frame corresponding to the last sample of the input specified.
- [chendt](/en/houdini-vex/chop/chendt)
 Returns the time corresponding to the last sample of the input
 specified.
- [chindex](/en/houdini-vex/chop/chindex)
 Returns the channel index from a input given a channel name.
- [chinput](/en/houdini-vex/chop/chinput)
 Returns the value of a channel at the specified sample.
- [chinputlimits](/en/houdini-vex/chop/chinputlimits)
 Computes the minimum and maximum value of samples in an input channel.
- [chnames](/en/houdini-vex/chop/chnames)
 Returns all the CHOP channel names of a given CHOP input.
- [chnumchan](/en/houdini-vex/chop/chnumchan)
 Returns the number of channels in the input specified.
- [chop](/en/houdini-vex/chop/chop)
 Returns the value of a CHOP channel at the specified sample.
- [choplocal](/en/houdini-vex/chop/choplocal)
 Returns the value of a CHOP local transform channel at the specified sample.
- [choplocalt](/en/houdini-vex/chop/choplocalt)
 Returns the value of a CHOP local transform channel at the specified sample and evaluation time.
- [chopt](/en/houdini-vex/chop/chopt)
 Returns the value of a CHOP channel at the specified sample and evaluation time.
- [chrate](/en/houdini-vex/chop/chrate)
 Returns the sample rate of the input specified.
- [chreadbuf](/en/houdini-vex/chop/chreadbuf)
 Returns the value of CHOP context temporary buffer at the specified index.
- [chremove](/en/houdini-vex/chop/chremove)
 Removes channels from a CHOP node.
- [chremoveattr](/en/houdini-vex/chop/chremoveattr)
 Removes a CHOP attribute.
- [chrename](/en/houdini-vex/chop/chrename)
 Renames a CHOP channel.
- [chresizebuf](/en/houdini-vex/chop/chresizebuf)
 Resize the CHOP context temporary buffer
- [chsetattr](/en/houdini-vex/chop/chsetattr)
 Sets the value of a CHOP attribute.
- [chsetlength](/en/houdini-vex/chop/chsetlength)
 Sets the length of the CHOP channel data.
- [chsetrate](/en/houdini-vex/chop/chsetrate)
 Sets the sampling rate of the CHOP channel data.
- [chsetstart](/en/houdini-vex/chop/chsetstart)
 Sets the CHOP start sample in the channel data.
- [chstart](/en/houdini-vex/chop/chstart)
 Returns the start sample of the input specified.
- [chstartf](/en/houdini-vex/chop/chstartf)
 Returns the frame corresponding to the first sample of the input
 specified.
- [chstartt](/en/houdini-vex/chop/chstartt)
 Returns the time corresponding to the first sample of the input
 specified.
- [chwritebuf](/en/houdini-vex/chop/chwritebuf)
 Writes a value of CHOP context temporary buffer at the specified index.
- [isframes](/en/houdini-vex/chop/isframes)
 Returns 1 if the Vex CHOP’s Unit Menu is currently set to 'frames', 0
 otherwise.
- [issamples](/en/houdini-vex/chop/issamples)
 Returns 1 if the Vex CHOP’s Unit Menu is currently set to 'samples',
 0 otherwise.
- [isseconds](/en/houdini-vex/chop/isseconds)
 Returns 1 if the Vex CHOP’s Unit Menu is currently set to 'seconds',
 0 otherwise.
- [ninputs](/en/houdini-vex/chop/ninputs)
 Returns the number of inputs.

Channel Primitives

## chprim_group

- [chprim_clear](/en/houdini-vex/channel-primitives/chprim_clear)
 Clears a channel primitive, removing all keys.
- [chprim_destroykey](/en/houdini-vex/channel-primitives/chprim_destroykey)
 Destroy an existing key from a channel primitive.
- [chprim_end](/en/houdini-vex/channel-primitives/chprim_end)
 Get the end time of a channel primitive.
- [chprim_eval](/en/houdini-vex/channel-primitives/chprim_eval)
 Evaluate a channel primitive at the given time.
- [chprim_insertkey](/en/houdini-vex/channel-primitives/chprim_insertkey)
 Insert a key into a channel primitive.
- [chprim_keycount](/en/houdini-vex/channel-primitives/chprim_keycount)
 Get the number of keys in a channel primitive.
- [chprim_keytimes](/en/houdini-vex/channel-primitives/chprim_keytimes)
 Get the key times of a channel primitive.
- [chprim_keyvalues](/en/houdini-vex/channel-primitives/chprim_keyvalues)
 Get the key values of a channel primitive.
- [chprim_length](/en/houdini-vex/channel-primitives/chprim_length)
 Get the length of a channel primitive.
- [chprim_setkeyaccel](/en/houdini-vex/channel-primitives/chprim_setkeyaccel)
 Set the acceleration of a channel primitive key.
- [chprim_setkeyslope](/en/houdini-vex/channel-primitives/chprim_setkeyslope)
 Set the slope of a channel primitive key.
- [chprim_setkeyvalue](/en/houdini-vex/channel-primitives/chprim_setkeyvalue)
 Set the value of a channel primitive key.
- [chprim_start](/en/houdini-vex/channel-primitives/chprim_start)
 Get the start time of a channel primitive.

color

## color_group

- [blackbody](/en/houdini-vex/color/blackbody)
 Compute the color value of an incandescent black body.
- [ctransform](/en/houdini-vex/color/ctransform)
 Transforms between color spaces.
- [luminance](/en/houdini-vex/color/luminance)
 Compute the luminance of the RGB color specified by the parameters.

Conversion

## convert_group

- [atof](/en/houdini-vex/conversion/atof)
 Converts a string to a float.
- [atoi](/en/houdini-vex/conversion/atoi)
 Converts a string to an integer.
- [cracktransform](/en/houdini-vex/conversion/cracktransform)
 Depending on the value of c, returns the translate (c=0), rotate
 (c=1), scale (c=2), or shears (c=3) component of the transform (xform).
- [degrees](/en/houdini-vex/conversion/degrees)
 Converts the argument from radians into degrees.
- [eulertoquaternion](/en/houdini-vex/conversion/eulertoquaternion)
 Creates a vector4 representing a quaternion from euler angles.
- [hsvtorgb](/en/houdini-vex/conversion/hsvtorgb)
 Convert HSV color space into RGB color space.
- [qconvert](/en/houdini-vex/conversion/qconvert)
 Converts a quaternion represented by a vector4 to a matrix3 representation.
- [quaterniontoeuler](/en/houdini-vex/conversion/quaterniontoeuler)
 Creates a euler angle representing a quaternion.
- [radians](/en/houdini-vex/conversion/radians)
 Converts the argument from degrees into radians.
- [rgbtohsv](/en/houdini-vex/conversion/rgbtohsv)
 Convert RGB color space to HSV color space.
- [rgbtoxyz](/en/houdini-vex/conversion/rgbtoxyz)
 Convert a linear sRGB triplet to CIE XYZ tristimulus values.
- [serialize](/en/houdini-vex/conversion/serialize)
 Flattens an array of vector or matrix types into an array of floats.
- [unserialize](/en/houdini-vex/conversion/unserialize)
 Turns a flat array of floats into an array of vectors or matrices.
- [xyztorgb](/en/houdini-vex/conversion/xyztorgb)
 Convert CIE XYZ tristimulus values to a linear sRGB triplet.

Crowds

## crowd_group

- [agentaddclip](/en/houdini-vex/crowds/agentaddclip)
 Add a clip into an agent’s definition.
- [agentchannelcount](/en/houdini-vex/crowds/agentchannelcount)
 Returns the number of channels in an agent primitive’s rig.
- [agentchannelnames](/en/houdini-vex/crowds/agentchannelnames)
 Returns the names of the channels in an agent primitive’s rig.
- [agentchannelvalue](/en/houdini-vex/crowds/agentchannelvalue)
 Returns the current value of an agent primitive’s channel.
- [agentchannelvalues](/en/houdini-vex/crowds/agentchannelvalues)
 Returns the current values of an agent primitive’s channels.
- [agentclipcatalog](/en/houdini-vex/crowds/agentclipcatalog)
 Returns all of the animation clips that have been loaded for an agent primitive.
- [agentclipchannel](/en/houdini-vex/crowds/agentclipchannel)
 Finds the index of a channel in an agent’s animation clip.
- [agentclipchannelnames](/en/houdini-vex/crowds/agentclipchannelnames)
 Returns the names of the channels in an agent’s animation clip.
- [agentcliplayerblend](/en/houdini-vex/crowds/agentcliplayerblend)
 Blends values according to an agent’s animation layers.
- [agentcliplength](/en/houdini-vex/crowds/agentcliplength)
 Returns the length (in seconds) of an agent’s animation clip.
- [agentclipnames](/en/houdini-vex/crowds/agentclipnames)
 Returns an agent primitive’s current animation clips.
- [agentclipsample](/en/houdini-vex/crowds/agentclipsample)
 Samples a channel of an agent’s clip at a specific time.
- [agentclipsamplelocal](/en/houdini-vex/crowds/agentclipsamplelocal)
 Samples an agent’s animation clip at a specific time.
- [agentclipsamplerate](/en/houdini-vex/crowds/agentclipsamplerate)
 Returns the sample rate of an agent’s animation clip.
- [agentclipsampleworld](/en/houdini-vex/crowds/agentclipsampleworld)
 Samples an agent’s animation clip at a specific time.
- [agentclipstarttime](/en/houdini-vex/crowds/agentclipstarttime)
 Returns the start time (in seconds) of an agent’s animation clip.
- [agentcliptimes](/en/houdini-vex/crowds/agentcliptimes)
 Returns the current times for an agent primitive’s animation clips.
- [agentcliptransformgroups](/en/houdini-vex/crowds/agentcliptransformgroups)
 Returns the transform groups for an agent primitive’s current animation clips.
- [agentclipweights](/en/houdini-vex/crowds/agentclipweights)
 Returns the blend weights for an agent primitive’s animation clips.
- [agentcollisionlayer](/en/houdini-vex/crowds/agentcollisionlayer)
 Returns the name of the collision layer of an agent primitive.
- [agentcollisionlayers](/en/houdini-vex/crowds/agentcollisionlayers)
 Returns the names of an agent primitive’s collision layers.
- [agentcurrentlayer](/en/houdini-vex/crowds/agentcurrentlayer)
 Returns the name of the current layer of an agent primitive.
- [agentcurrentlayers](/en/houdini-vex/crowds/agentcurrentlayers)
 Returns the names of an agent primitive’s current layers.
- [agentfindclip](/en/houdini-vex/crowds/agentfindclip)
 Finds the index of a clip in an agent’s definition.
- [agentfindlayer](/en/houdini-vex/crowds/agentfindlayer)
 Finds the index of a layer in an agent’s definition.
- [agentfindtransformgroup](/en/houdini-vex/crowds/agentfindtransformgroup)
 Finds the index of a transform group in an agent’s definition.
- [agentlayerbindings](/en/houdini-vex/crowds/agentlayerbindings)
 Returns the transform that each shape in an agent’s layer is bound to.
- [agentlayers](/en/houdini-vex/crowds/agentlayers)
 Returns all of the layers that have been loaded for an agent primitive.
- [agentlayershapes](/en/houdini-vex/crowds/agentlayershapes)
 Returns the names of the shapes referenced by an agent primitive’s layer.
- [agentlocaltransform](/en/houdini-vex/crowds/agentlocaltransform)
 Returns the current local space transform of an agent primitive’s bone.
- [agentlocaltransforms](/en/houdini-vex/crowds/agentlocaltransforms)
 Returns the current local space transforms of an agent primitive.
- [agentmetadata](/en/houdini-vex/crowds/agentmetadata)
 Returns the agent definition’s metadata dictionary.
- [agentrestlocaltransform](/en/houdini-vex/crowds/agentrestlocaltransform)
 Returns the local space rest transform for an agent primitive’s joint.
- [agentrestworldtransform](/en/houdini-vex/crowds/agentrestworldtransform)
 Returns the world space rest transform for an agent primitive’s joint.
- [agentrigchildren](/en/houdini-vex/crowds/agentrigchildren)
 Returns the child transforms of a transform in an agent primitive’s rig.
- [agentrigfind](/en/houdini-vex/crowds/agentrigfind)
 Finds the index of a transform in an agent primitive’s rig.
- [agentrigfindchannel](/en/houdini-vex/crowds/agentrigfindchannel)
 Finds the index of a channel in an agent primitive’s rig.
- [agentrigparent](/en/houdini-vex/crowds/agentrigparent)
 Returns the parent transform of a transform in an agent primitive’s rig.
- [agentsolvefbik](/en/houdini-vex/crowds/agentsolvefbik)
 Applies a full-body inverse kinematics algorithm to an agent’s skeleton.
- [agenttransformcount](/en/houdini-vex/crowds/agenttransformcount)
 Returns the number of transforms in an agent primitive’s rig.
- [agenttransformgroupmember](/en/houdini-vex/crowds/agenttransformgroupmember)
 Returns whether a transform is a member of the specified transform group.
- [agenttransformgroupmemberchannel](/en/houdini-vex/crowds/agenttransformgroupmemberchannel)
 Returns whether a channel is a member of the specified transform group.
- [agenttransformgroups](/en/houdini-vex/crowds/agenttransformgroups)
 Returns the names of the transform groups in an agent’s definition.
- [agenttransformgroupweight](/en/houdini-vex/crowds/agenttransformgroupweight)
 Returns the weight of a member of the specified transform group.
- [agenttransformnames](/en/houdini-vex/crowds/agenttransformnames)
 Returns the name of each transform in an agent primitive’s rig.
- [agenttransformtolocal](/en/houdini-vex/crowds/agenttransformtolocal)
 Converts transforms from world space to local space for an agent primitive.
- [agenttransformtoworld](/en/houdini-vex/crowds/agenttransformtoworld)
 Converts transforms from local space to world space for an agent primitive.
- [agentworldtransform](/en/houdini-vex/crowds/agentworldtransform)
 Returns the current world space transform of an agent primitive’s bone.
- [agentworldtransforms](/en/houdini-vex/crowds/agentworldtransforms)
 Returns the current world space transforms of an agent primitive.
- [setagentchannelvalue](/en/houdini-vex/crowds/setagentchannelvalue)
 Overrides the value of an agent primitive’s channel.
- [setagentchannelvalues](/en/houdini-vex/crowds/setagentchannelvalues)
 Overrides the values of an agent primitive’s channels.
- [setagentclipnames](/en/houdini-vex/crowds/setagentclipnames)
 Sets the current animation clips for an agent primitive.
- [setagentclips](/en/houdini-vex/crowds/setagentclips)
 Sets the animation clips that an agent should use to compute its transforms.
- [setagentcliptimes](/en/houdini-vex/crowds/setagentcliptimes)
 Sets the current times for an agent primitive’s animation clips.
- [setagentclipweights](/en/houdini-vex/crowds/setagentclipweights)
 Sets the blend weights for an agent primitive’s animation clips.
- [setagentcollisionlayer](/en/houdini-vex/crowds/setagentcollisionlayer)
 Sets the collision layer of an agent primitive.
- [setagentcollisionlayers](/en/houdini-vex/crowds/setagentcollisionlayers)
 Sets the collision layers of an agent primitive.
- [setagentcurrentlayer](/en/houdini-vex/crowds/setagentcurrentlayer)
 Sets the current layer of an agent primitive.
- [setagentcurrentlayers](/en/houdini-vex/crowds/setagentcurrentlayers)
 Sets the current display layers of an agent primitive.
- [setagentlocaltransform](/en/houdini-vex/crowds/setagentlocaltransform)
 Overrides the local space transform of an agent primitive’s bone.
- [setagentlocaltransforms](/en/houdini-vex/crowds/setagentlocaltransforms)
 Overrides the local space transforms of an agent primitive.
- [setagentworldtransform](/en/houdini-vex/crowds/setagentworldtransform)
 Overrides the world space transform of an agent primitive’s bone.
- [setagentworldtransforms](/en/houdini-vex/crowds/setagentworldtransforms)
 Overrides the world space transforms of an agent primitive.

dict

## dict_group

- [json_dumps](/en/houdini-vex/dict/json_dumps)
 Converts a VEX dictionary into a JSON string.
- [json_loads](/en/houdini-vex/dict/json_loads)
 Converts a JSON string into a VEX dictionary.
- [keys](/en/houdini-vex/dict/keys)
 Returns all the keys in a dictionary.
- [typeid](/en/houdini-vex/dict/typeid)
 Returns a numeric code identifying a VEX data type.

displace

## displace_group

- [dimport](/en/houdini-vex/displace/dimport)
 Reads a variable from the displacement shader for the surface.

File I/O

## file_group

- [file_stat](/en/houdini-vex/file-i/file_stat)
 Returns file system status for a given file.

filter

## filter_group

- [filter_remap](/en/houdini-vex/filter/filter_remap)
 Computes an importance sample based on the given filter type and input uv.

Fuzzy Logic

## fuzzy_group

- [fuzzify](/en/houdini-vex/fuzzy-logic/fuzzify)
- [fuzzy_and](/en/houdini-vex/fuzzy-logic/fuzzy_and)
- [fuzzy_defuzz_centroid](/en/houdini-vex/fuzzy-logic/fuzzy_defuzz_centroid)
- [fuzzy_nand](/en/houdini-vex/fuzzy-logic/fuzzy_nand)
- [fuzzy_nor](/en/houdini-vex/fuzzy-logic/fuzzy_nor)
- [fuzzy_not](/en/houdini-vex/fuzzy-logic/fuzzy_not)
- [fuzzy_nxor](/en/houdini-vex/fuzzy-logic/fuzzy_nxor)
- [fuzzy_or](/en/houdini-vex/fuzzy-logic/fuzzy_or)
- [fuzzy_xor](/en/houdini-vex/fuzzy-logic/fuzzy_xor)

Geometry

## geo_group

- [addpoint](/en/houdini-vex/geometry/addpoint)
 Adds a point to the geometry.
- [addprim](/en/houdini-vex/geometry/addprim)
 Adds a primitive to the geometry.
- [addvertex](/en/houdini-vex/geometry/addvertex)
 Adds a vertex to a primitive in a geometry.
- [clip](/en/houdini-vex/geometry/clip)
 Clip the line segment between p0 and p1.
- [geoself](/en/houdini-vex/geometry/geoself)
 Returns a handle to the current geometry.
- [geounwrap](/en/houdini-vex/geometry/geounwrap)
 Returns an oppath: string to unwrap the geometry in-place.
- [inedgegroup](/en/houdini-vex/geometry/inedgegroup)
 Returns 1 if the edge specified by the point pair is in the group specified by the string.
- [intersect](/en/houdini-vex/geometry/intersect)
 This function computes the first intersection of a ray with geometry.
- [intersect_all](/en/houdini-vex/geometry/intersect_all)
 Computes all intersections of the specified ray with geometry.
- [minpos](/en/houdini-vex/geometry/minpos)
 Given a position in world space, returns the position of the closest point on a given geometry.
- [nearpoint](/en/houdini-vex/geometry/nearpoint)
 Finds the closest point in a geometry.
- [nearpoints](/en/houdini-vex/geometry/nearpoints)
 Finds the all the closest point in a geometry.
- [nedgesgroup](/en/houdini-vex/geometry/nedgesgroup)
 Returns the number of edges in the group.
- [neighbour](/en/houdini-vex/geometry/neighbour)
 Returns the point number of the next point connected to a given point.
- [neighbourcount](/en/houdini-vex/geometry/neighbourcount)
 Returns the number of points that are connected to the specified point.
- [neighbours](/en/houdini-vex/geometry/neighbours)
 Returns an array of the point numbers of the neighbours of a point.
- [npoints](/en/houdini-vex/geometry/npoints)
 Returns the number of points in the input or geometry file.
- [nprimitives](/en/houdini-vex/geometry/nprimitives)
 Returns the number of primitives in the input or geometry file.
- [nvertices](/en/houdini-vex/geometry/nvertices)
 Returns the number of vertices in the input or geometry file.
- [nverticesgroup](/en/houdini-vex/geometry/nverticesgroup)
 Returns the number of vertices in the group.
- [pointprims](/en/houdini-vex/geometry/pointprims)
 Returns the list of primitives containing a point.
- [pointvertex](/en/houdini-vex/geometry/pointvertex)
 Returns a linear vertex number of a point in a geometry.
- [pointvertices](/en/houdini-vex/geometry/pointvertices)
 Returns the list of vertices connected to a point.
- [polyneighbours](/en/houdini-vex/geometry/polyneighbours)
 Returns an array of the primitive numbers of the edge-neighbours of a polygon.
- [primfind](/en/houdini-vex/geometry/primfind)
 Returns a list of primitives potentially intersecting a given bounding box.
- [primpoint](/en/houdini-vex/geometry/primpoint)
 Converts a primitive/vertex pair into a point number.
- [primpoints](/en/houdini-vex/geometry/primpoints)
 Returns the list of points on a primitive.
- [primvertex](/en/houdini-vex/geometry/primvertex)
 Converts a primitive/vertex pair into a linear vertex.
- [primvertexcount](/en/houdini-vex/geometry/primvertexcount)
 Returns number of vertices in a primitive in a geometry.
- [primvertices](/en/houdini-vex/geometry/primvertices)
 Returns the list of vertices on a primitive.
- [removeattrib](/en/houdini-vex/geometry/removeattrib)
 Removes an attribute or group from the geometry.
- [removepoint](/en/houdini-vex/geometry/removepoint)
 Removes a point from the geometry.
- [removeprim](/en/houdini-vex/geometry/removeprim)
 Removes a primitive from the geometry.
- [removevertex](/en/houdini-vex/geometry/removevertex)
 Removes a vertex from the geometry.
- [setedgegroup](/en/houdini-vex/geometry/setedgegroup)
 Sets edge group membership in a geometry.
- [setprimvertex](/en/houdini-vex/geometry/setprimvertex)
 Rewires a vertex in the geometry to a different point.
- [setvertexpoint](/en/houdini-vex/geometry/setvertexpoint)
 Rewires a vertex in the geometry to a different point.
- [uvintersect](/en/houdini-vex/geometry/uvintersect)
 This function computes the intersection of the specified ray with the geometry in uv space.
- [vertexcurveparam](/en/houdini-vex/geometry/vertexcurveparam)
 Returns the parametric coordinate of a vertex along the perimeter of
 its primitive.
- [vertexindex](/en/houdini-vex/geometry/vertexindex)
 Converts a primitive/vertex pair into a linear vertex.
- [vertexnext](/en/houdini-vex/geometry/vertexnext)
 Returns the linear vertex number of the next vertex sharing a point with a given vertex.
- [vertexpoint](/en/houdini-vex/geometry/vertexpoint)
 Returns the point number of linear vertex in a geometry.
- [vertexprev](/en/houdini-vex/geometry/vertexprev)
 Returns the linear vertex number of the previous vertex sharing a point with a given vertex.
- [vertexprim](/en/houdini-vex/geometry/vertexprim)
 Returns the number of the primitive containing a given vertex.
- [vertexprimindex](/en/houdini-vex/geometry/vertexprimindex)
 Converts a linear vertex index into a primitive vertex number.

groups

## groups_group

- [expandedgegroup](/en/houdini-vex/groups/expandedgegroup)
- [expandpointgroup](/en/houdini-vex/groups/expandpointgroup)
 Returns an array of point numbers corresponding to a group string.
- [expandprimgroup](/en/houdini-vex/groups/expandprimgroup)
 Returns an array of prim numbers corresponding to a group string.
- [expandvertexgroup](/en/houdini-vex/groups/expandvertexgroup)
 Returns an array of linear vertex numbers corresponding to a group string.
- [inpointgroup](/en/houdini-vex/groups/inpointgroup)
 Returns 1 if the point specified by the point number is in the group specified by the string.
- [inprimgroup](/en/houdini-vex/groups/inprimgroup)
 Returns 1 if the primitive specified by the primitive number is in the group specified by the string.
- [invertexgroup](/en/houdini-vex/groups/invertexgroup)
 Returns 1 if the vertex specified by the vertex number is in the group specified by the string.
- [npointsgroup](/en/houdini-vex/groups/npointsgroup)
 Returns the number of points in the group.
- [nprimitivesgroup](/en/houdini-vex/groups/nprimitivesgroup)
 Returns the number of primitives in the group.
- [setpointgroup](/en/houdini-vex/groups/setpointgroup)
 Adds or removes a point to/from a group in a geometry.
- [setprimgroup](/en/houdini-vex/groups/setprimgroup)
 Adds or removes a primitive to/from a group in a geometry.
- [setvertexgroup](/en/houdini-vex/groups/setvertexgroup)
 Adds or removes a vertex to/from a group in a geometry.

Half-edges

## hedge_group

- [hedge_dstpoint](/en/houdini-vex/half-edges/hedge_dstpoint)
 Returns the destination point of a half-edge.
- [hedge_dstvertex](/en/houdini-vex/half-edges/hedge_dstvertex)
 Returns the destination vertex of a half-edge.
- [hedge_equivcount](/en/houdini-vex/half-edges/hedge_equivcount)
 Returns the number of half-edges equivalent to a given half-edge.
- [hedge_isequiv](/en/houdini-vex/half-edges/hedge_isequiv)
 Determines whether a two half-edges are equivalent (represent the same edge).
- [hedge_isprimary](/en/houdini-vex/half-edges/hedge_isprimary)
 Determines whether a half-edge number corresponds to a primary half-edge.
- [hedge_isvalid](/en/houdini-vex/half-edges/hedge_isvalid)
 Determines whether a half-edge number corresponds to a valid half-edge.
- [hedge_next](/en/houdini-vex/half-edges/hedge_next)
 Returns the half-edge that follows a given half-edge in its polygon.
- [hedge_nextequiv](/en/houdini-vex/half-edges/hedge_nextequiv)
 Returns the next half-edges equivalent to a given half-edge.
- [hedge_postdstpoint](/en/houdini-vex/half-edges/hedge_postdstpoint)
 Returns the point into which the vertex following the destination vertex of a half-edge in its primitive is wired.
- [hedge_postdstvertex](/en/houdini-vex/half-edges/hedge_postdstvertex)
 Returns the vertex following the destination vertex of a half-edge in its primitive.
- [hedge_presrcpoint](/en/houdini-vex/half-edges/hedge_presrcpoint)
 Returns the point into which the vertex that precedes the source vertex of a half-edge in its primitive is wired.
- [hedge_presrcvertex](/en/houdini-vex/half-edges/hedge_presrcvertex)
 Returns the vertex that precedes the source vertex of a half-edge in its primitive.
- [hedge_prev](/en/houdini-vex/half-edges/hedge_prev)
 Returns the half-edge that precedes a given half-edge in its polygon.
- [hedge_prim](/en/houdini-vex/half-edges/hedge_prim)
 Returns the primitive that contains a half-edge.
- [hedge_primary](/en/houdini-vex/half-edges/hedge_primary)
 Returns the primary half-edge equivalent to a given half-edge.
- [hedge_srcpoint](/en/houdini-vex/half-edges/hedge_srcpoint)
 Returns the source point of a half-edge.
- [hedge_srcvertex](/en/houdini-vex/half-edges/hedge_srcvertex)
 Returns the source vertex of a half-edge.
- [pointedge](/en/houdini-vex/half-edges/pointedge)
 Finds and returns a half-edge with the given endpoints.
- [pointhedge](/en/houdini-vex/half-edges/pointhedge)
 Finds and returns a half-edge with a given source point or with given source and destination points.
- [pointhedgenext](/en/houdini-vex/half-edges/pointhedgenext)
 Returns the next half-edge with the same source as a given half-edge.
- [primhedge](/en/houdini-vex/half-edges/primhedge)
 Returns one of the half-edges contained in a primitive.
- [vertexhedge](/en/houdini-vex/half-edges/vertexhedge)
 Returns the half-edge which has a vertex as source.

hex

## hex_group

- [hex_adjacent](/en/houdini-vex/hex/hex_adjacent)
 Returns primitive number of an adjacent hexahedron.
- [hex_faceindex](/en/houdini-vex/hex/hex_faceindex)
 Returns vertex indices of each face of a hexahedron.

Image Processing

## image_group

- [accessframe](/en/houdini-vex/image-processing/accessframe)
 Tells the COP manager that you need access to the given frame.
- [alphaname](/en/houdini-vex/image-processing/alphaname)
 Returns the default name of the alpha plane (as it appears in the
 compositor preferences).
- [binput](/en/houdini-vex/image-processing/binput)
 Samples a 2×2 pixel block around the given UV position, and bilinearly interpolates these pixels.
- [bumpname](/en/houdini-vex/image-processing/bumpname)
 Returns the default name of the bump plane (as it appears in the
 compositor preferences).
- [chname](/en/houdini-vex/image-processing/chname)
 Returns the name of a numbered channel.
- [cinput](/en/houdini-vex/image-processing/cinput)
 Samples the exact (unfiltered) pixel color at the given coordinates.
- [colorname](/en/houdini-vex/image-processing/colorname)
 Returns the default name of the color plane (as it appears in the
 compositor preferences).
- [depthname](/en/houdini-vex/image-processing/depthname)
 Returns the default name of the depth plane (as it appears in the
 compositor preferences).
- [dsmpixel](/en/houdini-vex/image-processing/dsmpixel)
 Reads the z-records stored in a pixel of a deep shadow map
 or deep camera map.
- [finput](/en/houdini-vex/image-processing/finput)
 Returns fully filtered pixel input.
- [hasmetadata](/en/houdini-vex/image-processing/hasmetadata)
 Queries if metadata exists on a composite operator.
- [hasplane](/en/houdini-vex/image-processing/hasplane)
 Returns 1 if the plane specified by the parameter exists in this
 COP.
- [iaspect](/en/houdini-vex/image-processing/iaspect)
 Returns the aspect ratio of the specified input.
- [ichname](/en/houdini-vex/image-processing/ichname)
 Returns the channel name of the indexed plane of the given input.
- [iend](/en/houdini-vex/image-processing/iend)
 Returns the last frame of the specified input.
- [iendtime](/en/houdini-vex/image-processing/iendtime)
 Returns the end time of the specified input.
- [ihasplane](/en/houdini-vex/image-processing/ihasplane)
 Returns 1 if the specified input has a plane named planename.
- [inumplanes](/en/houdini-vex/image-processing/inumplanes)
 Returns the number of planes in the given input.
- [iplaneindex](/en/houdini-vex/image-processing/iplaneindex)
 Returns the index of the plane named 'planename' in the specified input.
- [iplanename](/en/houdini-vex/image-processing/iplanename)
 Returns the name of the plane specified by the planeindex of the given input
- [iplanesize](/en/houdini-vex/image-processing/iplanesize)
 Returns the number of components in the plane named planename in
 the specified input.
- [irate](/en/houdini-vex/image-processing/irate)
 Returns the frame rate of the specified input.
- [istart](/en/houdini-vex/image-processing/istart)
 Returns the starting frame of the specified input.
- [istarttime](/en/houdini-vex/image-processing/istarttime)
 Returns the start time of the specified input.
- [ixres](/en/houdini-vex/image-processing/ixres)
 Returns the X resolution of the specified input.
- [iyres](/en/houdini-vex/image-processing/iyres)
 Returns the Y resolution of the specified input.
- [lumname](/en/houdini-vex/image-processing/lumname)
 Returns the default name of the luminaence plane (as it appears in the
 compositor preferences).
- [maskname](/en/houdini-vex/image-processing/maskname)
 Returns the default name of the mask plane (as it appears in the
 compositor preferences).
- [metadata](/en/houdini-vex/image-processing/metadata)
 Returns a metadata value from a composite operator.
- [ninput](/en/houdini-vex/image-processing/ninput)
 Reads a component from a pixel and its eight neighbors.
- [normalname](/en/houdini-vex/image-processing/normalname)
 Returns the default name of the normal plane (as it appears in the
 compositor preferences).
- [planeindex](/en/houdini-vex/image-processing/planeindex)
 Returns the index of the plane specified by the parameter, starting
 at zero.
- [planename](/en/houdini-vex/image-processing/planename)
 Returns the name of the plane specified by the index (e.
- [planesize](/en/houdini-vex/image-processing/planesize)
 Returns the number of components in the plane (1 for scalar planes
 and up to 4 for vector planes).
- [pointname](/en/houdini-vex/image-processing/pointname)
 Returns the default name of the point plane (as it appears in the
 compositor preferences).
- [velocityname](/en/houdini-vex/image-processing/velocityname)
 Returns the default name of the velocity plane (as it appears in the
 compositor preferences).

Interpolation

## interp_group

- [ckspline](/en/houdini-vex/interpolation/ckspline)
 Samples a Catmull-Rom (Cardinal) spline defined by position/value keys.
- [clamp](/en/houdini-vex/interpolation/clamp)
 Returns value clamped between min and max.
- [cspline](/en/houdini-vex/interpolation/cspline)
 Samples a Catmull-Rom (Cardinal) spline defined by uniformly spaced keys.
- [efit](/en/houdini-vex/interpolation/efit)
 Takes the value in one range and shifts it to the corresponding value in a new range.
- [fit](/en/houdini-vex/interpolation/fit)
 Takes the value in one range and shifts it to the corresponding value in a new range.
- [fit01](/en/houdini-vex/interpolation/fit01)
 Takes the value in the range (0, 1) and shifts it to the corresponding value in a new range.
- [fit10](/en/houdini-vex/interpolation/fit10)
 Takes the value in the range (1, 0) and shifts it to the corresponding value in a new range.
- [fit11](/en/houdini-vex/interpolation/fit11)
 Takes the value in the range (-1, 1) and shifts it to the corresponding value in a new range.
- [invlerp](/en/houdini-vex/interpolation/invlerp)
 Inverses a linear interpolation between the values.
- [lerp](/en/houdini-vex/interpolation/lerp)
 Performs linear interpolation between the values.
- [lkspline](/en/houdini-vex/interpolation/lkspline)
 Samples a polyline between the key points.
- [lspline](/en/houdini-vex/interpolation/lspline)
 Samples a polyline defined by linearly spaced values.
- [slerp](/en/houdini-vex/interpolation/slerp)
 Quaternion blend between q1 and q2 based on the bias.
- [slerpv](/en/houdini-vex/interpolation/slerpv)
 Spherical blends between two vectors based on the bias.
- [smooth](/en/houdini-vex/interpolation/smooth)
 Computes ease in/out interpolation between values.

light

## light_group

- [ambient](/en/houdini-vex/light/ambient)
 Returns the color of ambient light in the scene.
- [atten](/en/houdini-vex/light/atten)
 Computes attenuated falloff.
- [fastshadow](/en/houdini-vex/light/fastshadow)
 Sends a ray from the position P along the direction specified by the
 direction D.
- [filtershadow](/en/houdini-vex/light/filtershadow)
 Sends a ray from the position P along direction D.

Math

## math_group

- [abs](/en/houdini-vex/math/abs)
 Returns the absolute value of the argument.
- [acos](/en/houdini-vex/math/acos)
 Returns the inverse cosine of the argument.
- [asin](/en/houdini-vex/math/asin)
 Returns the inverse sine of the argument.
- [atan](/en/houdini-vex/math/atan)
 Returns the inverse tangent of the argument.
- [atan2](/en/houdini-vex/math/atan2)
 Returns the inverse tangent of y/x.
- [avg](/en/houdini-vex/math/avg)
 Returns the average value of the input(s)
- [cbrt](/en/houdini-vex/math/cbrt)
 Returns the cube root of the argument.
- [ceil](/en/houdini-vex/math/ceil)
 Returns the smallest integer greater than or equal to the argument.
- [combinelocaltransform](/en/houdini-vex/math/combinelocaltransform)
 Combines Local and Parent Transforms with Scale Inheritance.
- [cos](/en/houdini-vex/math/cos)
 Returns the cosine of the argument.
- [cosh](/en/houdini-vex/math/cosh)
 Returns the hyperbolic cosine of the argument.
- [cross](/en/houdini-vex/math/cross)
 Returns the cross product between the two vectors.
- [determinant](/en/houdini-vex/math/determinant)
 Computes the determinant of the matrix.
- [diag](/en/houdini-vex/math/diag)
 Extracts diagonal entries or constructs a diagonal matrix.
- [diagonalizesymmetric](/en/houdini-vex/math/diagonalizesymmetric)
 Diagonalizes Symmetric Matrices.
- [distance_pointline](/en/houdini-vex/math/distance_pointline)
 This function returns the closest distance between the point Q and the
 infinite line going through O parallel to vector D.
- [distance_pointray](/en/houdini-vex/math/distance_pointray)
 This function returns the closest distance between the point Q and the
 semi-finite ray starting at O and extending in the direction D.
- [distance_pointsegment](/en/houdini-vex/math/distance_pointsegment)
 This function returns the closest distance between the point Q and a
 finite line segment between points P0 and P1.
- [dot](/en/houdini-vex/math/dot)
 Returns the dot product between the arguments.
- [Du](Du.html)
 Returns the derivative of the given value with respect to U.
- [Dv](Dv.html)
 Returns the derivative of the given value with respect to V.
- [Dw](Dw.html)
 Returns the derivative of the given value with respect to the 3rd axis (for volume rendering).
- [eigenvalues](/en/houdini-vex/math/eigenvalues)
 Computes the eigenvalues of a 3×3 matrix.
- [erf](/en/houdini-vex/math/erf)
 Gauss error function.
- [erf_inv](/en/houdini-vex/math/erf_inv)
 Inverse Gauss error function.
- [erfc](/en/houdini-vex/math/erfc)
 Gauss error function’s complement.
- [exp](/en/houdini-vex/math/exp)
 Returns the exponential function of the argument.
- [extractlocaltransform](/en/houdini-vex/math/extractlocaltransform)
 Extracts Local Transform from a World Transform with Scale Inheritance.
- [floor](/en/houdini-vex/math/floor)
 Returns the largest integer less than or equal to the argument.
- [frac](/en/houdini-vex/math/frac)
 Returns the fractional component of the floating point number.
- [ident](/en/houdini-vex/math/ident)
 Returns an identity matrix.
- [invert](/en/houdini-vex/math/invert)
 Inverts a matrix.
- [isfinite](/en/houdini-vex/math/isfinite)
 Checks whether a value is a normal finite number.
- [isinf](/en/houdini-vex/math/isinf)
 Checks whether a value is a positive or negative infinity.
- [isnan](/en/houdini-vex/math/isnan)
 Checks whether a value is not a number.
- [kspline](/en/houdini-vex/math/kspline)
 Returns an interpolated value along a curve defined by a basis and key/position pairs.
- [length](/en/houdini-vex/math/length)
 Returns the magnitude of a vector.
- [length2](/en/houdini-vex/math/length2)
 Returns the squared distance of the vector or vector4.
- [log](/en/houdini-vex/math/log)
 Returns the natural logarithm of the argument.
- [log10](/en/houdini-vex/math/log10)
 Returns the logarithm (base 10) of the argument.
- [makebasis](/en/houdini-vex/math/makebasis)
 Creates an orthonormal basis given a z-axis vector.
- [max](/en/houdini-vex/math/max)
- [min](/en/houdini-vex/math/min)
- [norm_1](/en/houdini-vex/math/norm_1)
 Returns the induced matrix 1-norm.
- [norm_fro](/en/houdini-vex/math/norm_fro)
 Returns the Frobenius norm of a matrix.
- [norm_inf](/en/houdini-vex/math/norm_inf)
 Returns the induced matrix infinity-norm.
- [norm_max](/en/houdini-vex/math/norm_max)
 Returns the matrix max-norm.
- [norm_spectral](/en/houdini-vex/math/norm_spectral)
 Returns the matrix spectral norm.
- [normalize](/en/houdini-vex/math/normalize)
 Returns a normalized vector.
- [outerproduct](/en/houdini-vex/math/outerproduct)
 Returns the outer product between the arguments.
- [pinvert](/en/houdini-vex/math/pinvert)
 Computes the pseudo-inverse of a matrix.
- [planesphereintersect](/en/houdini-vex/math/planesphereintersect)
 Computes the intersection of a 3D sphere and an infinite 3D plane.
- [pow](/en/houdini-vex/math/pow)
 Raises the first argument to the power of the second argument.
- [predicate_incircle](/en/houdini-vex/math/predicate_incircle)
 Determines if a point is inside or outside a triangle circumcircle.
- [predicate_insphere](/en/houdini-vex/math/predicate_insphere)
 Determines if a point is inside or outside a tetrahedron circumsphere.
- [predicate_orient2d](/en/houdini-vex/math/predicate_orient2d)
 Determines the orientation of a point with respect to a line.
- [predicate_orient3d](/en/houdini-vex/math/predicate_orient3d)
 Determines the orientation of a point with respect to a plane.
- [premul](/en/houdini-vex/math/premul)
 Pre multiply matrices.
- [product](/en/houdini-vex/math/product)
 Returns the product of a list of numbers.
- [ptlined](/en/houdini-vex/math/ptlined)
 This function returns the closest distance between the point Q and a
 finite line segment between points P0 and P1.
- [qdistance](/en/houdini-vex/math/qdistance)
 Finds distance between two quaternions.
- [qinvert](/en/houdini-vex/math/qinvert)
 Inverts a quaternion rotation.
- [qmultiply](/en/houdini-vex/math/qmultiply)
 Multiplies two quaternions and returns the result.
- [qrotate](/en/houdini-vex/math/qrotate)
 Rotates a vector by a quaternion.
- [quaternion](/en/houdini-vex/math/quaternion)
 Creates a vector4 representing a quaternion.
- [resample_linear](/en/houdini-vex/math/resample_linear)
- [rint](/en/houdini-vex/math/rint)
 Rounds the number to the closest whole number.
- [shl](/en/houdini-vex/math/shl)
 Bit-shifts an integer left.
- [shr](/en/houdini-vex/math/shr)
 Bit-shifts an integer right.
- [shrz](/en/houdini-vex/math/shrz)
 Bit-shifts an integer right.
- [sign](/en/houdini-vex/math/sign)
 Returns -1, 0, or 1 depending on the sign of the argument.
- [sin](/en/houdini-vex/math/sin)
 Returns the sine of the argument.
- [sinh](/en/houdini-vex/math/sinh)
 Returns the hyperbolic sine of the argument.
- [slideframe](/en/houdini-vex/math/slideframe)
 Finds the normal component of frame slid along a curve.
- [solvecubic](/en/houdini-vex/math/solvecubic)
 Solves a cubic function returning the number of real roots.
- [solvepoly](/en/houdini-vex/math/solvepoly)
 Finds the real roots of a polynomial.
- [solvequadratic](/en/houdini-vex/math/solvequadratic)
 Solves a quadratic function returning the number of real roots.
- [solvetriangleSSS](solvetriangleSSS.html)
 Finds the angles of a triangle from its sides.
- [spline](/en/houdini-vex/math/spline)
 Samples a value along a polyline or spline curve.
- [spline_cdf](/en/houdini-vex/math/spline_cdf)
 Generate a cumulative distribution function (CDF) by sampling a spline curve.
- [sqrt](/en/houdini-vex/math/sqrt)
 Returns the square root of the argument.
- [sum](/en/houdini-vex/math/sum)
 Returns the sum of a list of numbers.
- [svddecomp](/en/houdini-vex/math/svddecomp)
 Computes the singular value decomposition of a given matrix.
- [tan](/en/houdini-vex/math/tan)
 Returns the trigonometric tangent of the argument
- [tanh](/en/houdini-vex/math/tanh)
 Returns the hyperbolic tangent of the argument
- [tr](/en/houdini-vex/math/tr)
 Returns the trace of the given matrix.
- [transpose](/en/houdini-vex/math/transpose)
 Transposes the given matrix.
- [trunc](/en/houdini-vex/math/trunc)
 Removes the fractional part of a floating point number.

measure

## measure_group

- [distance](/en/houdini-vex/measure/distance)
 Returns the distance between two points.
- [distance2](/en/houdini-vex/measure/distance2)
 Returns the squared distance between the two points.
- [getbbox](/en/houdini-vex/measure/getbbox)
 Sets two vectors to the minimum and maximum corners of the bounding box for the geometry.
- [getbbox_center](/en/houdini-vex/measure/getbbox_center)
 Returns the center of the bounding box for the geometry.
- [getbbox_max](/en/houdini-vex/measure/getbbox_max)
 Returns the maximum of the bounding box for the geometry.
- [getbbox_min](/en/houdini-vex/measure/getbbox_min)
 Returns the minimum of the bounding box for the geometry.
- [getbbox_size](/en/houdini-vex/measure/getbbox_size)
 Returns the size of the bounding box for the geometry.
- [getbounds](/en/houdini-vex/measure/getbounds)
 Returns the bounding box of the geometry specified by the filename.
- [getpointbbox](/en/houdini-vex/measure/getpointbbox)
 Sets two vectors to the minimum and maximum corners of the bounding box for the geometry.
- [getpointbbox_center](/en/houdini-vex/measure/getpointbbox_center)
 Returns the center of the bounding box for the geometry.
- [getpointbbox_max](/en/houdini-vex/measure/getpointbbox_max)
 Returns the maximum of the bounding box for the geometry.
- [getpointbbox_min](/en/houdini-vex/measure/getpointbbox_min)
 Returns the minimum of the bounding box for the geometry.
- [getpointbbox_size](/en/houdini-vex/measure/getpointbbox_size)
 Returns the size of the bounding box for the geometry.
- [planepointdistance](/en/houdini-vex/measure/planepointdistance)
 Computes the distance and closest point of a point to an infinite plane.
- [relbbox](/en/houdini-vex/measure/relbbox)
 Returns the relative position of the point given with respect to the bounding box of the geometry.
- [relpointbbox](/en/houdini-vex/measure/relpointbbox)
 Returns the relative position of the point given with respect to the bounding box of the geometry.
- [surfacedist](/en/houdini-vex/measure/surfacedist)
 Finds the distance of a point to a group of points along the surface of a geometry.
- [uvdist](/en/houdini-vex/measure/uvdist)
 Finds the distance of a uv coordinate to a geometry in uv space.
- [windingnumber](/en/houdini-vex/measure/windingnumber)
 Computes the winding number of a mesh around a point. Winding number indicates how many times a geometry wraps around a point. Useful for inside/outside test, the winding number is equal to one inside of the mesh and zero outside.
- [windingnumber2d](/en/houdini-vex/measure/windingnumber2d)
 Computes the winding number of a curve in XY plane around a point. Winding number indicates how many times a curve wraps around a point. Useful for inside/outside test, the winding number is equal to one inside of the curve and zero outside.
- [xyzdist](/en/houdini-vex/measure/xyzdist)
 Finds the distance from a point to the closest location on surface geometry.

metaball

## metaball_group

- [metaimport](/en/houdini-vex/metaball/metaimport)
 Once you get a handle to a metaball using metastart and metanext, you
 can query attributes of the metaball with metaimport.
- [metamarch](/en/houdini-vex/metaball/metamarch)
 Takes the ray defined by p0 and p1 and partitions it into zero or
 more sub-intervals where each interval intersects a cluster of metaballs
 from filename.
- [metanext](/en/houdini-vex/metaball/metanext)
 Iterate to the next metaball in the list of metaballs returned by the metastart() function.
- [metastart](/en/houdini-vex/metaball/metastart)
 Open a geometry file and return a handle for the metaballs of
 interest, at the position p.
- [metaweight](/en/houdini-vex/metaball/metaweight)
 Returns the metaweight of the geometry at position p.

Nodes

## nodes_group

- [addvariablename](/en/houdini-vex/nodes/addvariablename)
 Adds a mapping for an attribute to a local variable.
- [ch](/en/houdini-vex/nodes/ch)
 Evaluates a channel (or parameter) and return its value.
- [ch2](/en/houdini-vex/nodes/ch2)
 Evaluates a channel (or parameter) and return its value.
- [ch3](/en/houdini-vex/nodes/ch3)
 Evaluates a channel (or parameter) and return its value.
- [ch4](/en/houdini-vex/nodes/ch4)
 Evaluates a channel (or parameter) and return its value.
- [chdict](/en/houdini-vex/nodes/chdict)
 Evaluates a key-value dictionary parameter and return its value.
- [chexpr](/en/houdini-vex/nodes/chexpr)
 Evaluates a channel with a new segment expression.
- [chexprf](/en/houdini-vex/nodes/chexprf)
 Evaluates a channel with a new segment expression at a given frame.
- [chexprt](/en/houdini-vex/nodes/chexprt)
 Evaluates a channel with a new segment expression at a given time.
- [chf](/en/houdini-vex/nodes/chf)
 Evaluates a channel (or parameter) and return its value.
- [chi](/en/houdini-vex/nodes/chi)
 Evaluates a channel (or parameter) and return its value.
- [chid](/en/houdini-vex/nodes/chid)
 Resolves a channel string (or parameter) and return op_id, parm_index and vector_index.
- [chp](/en/houdini-vex/nodes/chp)
 Evaluates a channel (or parameter) and return its value.
- [chramp](/en/houdini-vex/nodes/chramp)
 Evaluates a ramp parameter and return its value.
- [chrampderiv](/en/houdini-vex/nodes/chrampderiv)
 Evaluates the derivative of a parm parameter with respect to position.
- [chs](/en/houdini-vex/nodes/chs)
 Evaluates a channel (or parameter) and return its value.
- [chsop](/en/houdini-vex/nodes/chsop)
 Evaluates an operator path parameter and return the path to the operator.
- [chsraw](/en/houdini-vex/nodes/chsraw)
 Returns the raw string channel (or parameter).
- [chu](/en/houdini-vex/nodes/chu)
 Evaluates a channel or parameter, and return its value.
- [chv](/en/houdini-vex/nodes/chv)
 Evaluates a channel or parameter, and return its value.
- [cregioncapturetransform](/en/houdini-vex/nodes/cregioncapturetransform)
 Returns the capture transform associated with a Capture Region SOP.
- [cregiondeformtransform](/en/houdini-vex/nodes/cregiondeformtransform)
 Returns the deform transform associated with a Capture Region SOP.
- [cregionoverridetransform](/en/houdini-vex/nodes/cregionoverridetransform)
 Returns the capture or deform transform associated with a Capture Region SOP based on the global capture override flag.
- [isconnected](/en/houdini-vex/nodes/isconnected)
 Returns 1 if input_number is connected, or 0 if the input is not connected.
- [opfullpath](/en/houdini-vex/nodes/opfullpath)
 Returns the full path for the given relative path
- [opid](/en/houdini-vex/nodes/opid)
 Resolves an operator path string and return its op_id.
- [opparentbonetransform](/en/houdini-vex/nodes/opparentbonetransform)
 Returns the parent bone transform associated with an OP.
- [opparenttransform](/en/houdini-vex/nodes/opparenttransform)
 Returns the parent transform associated with an OP.
- [opparmtransform](/en/houdini-vex/nodes/opparmtransform)
 Returns the parm transform associated with an OP.
- [oppreconstrainttransform](/en/houdini-vex/nodes/oppreconstrainttransform)
 Returns the preconstraint transform associated with an OP.
- [oppreparmtransform](/en/houdini-vex/nodes/oppreparmtransform)
 Returns the pre and parm transform associated with an OP.
- [opprerawparmtransform](/en/houdini-vex/nodes/opprerawparmtransform)
 Returns the pre and raw parm transform associated with an OP.
- [oppretransform](/en/houdini-vex/nodes/oppretransform)
 Returns the pretransform associated with an OP.
- [oprawparmtransform](/en/houdini-vex/nodes/oprawparmtransform)
 Returns the raw parm transform associated with an OP.
- [optransform](/en/houdini-vex/nodes/optransform)
 Returns the transform associated with an OP.

Noise and Randomness

## noise_group

- [anoise](/en/houdini-vex/noise-and-randomness/anoise)
 Generates alligator noise.
- [curlgxnoise](/en/houdini-vex/noise-and-randomness/curlgxnoise)
 Computes divergence free noise based on simplex noise.
- [curlgxnoise2d](/en/houdini-vex/noise-and-randomness/curlgxnoise2d)
 Computes divergence free noise in the plane based on simplex noise.
- [curlnoise](/en/houdini-vex/noise-and-randomness/curlnoise)
 Computes divergence free noise based on Perlin noise.
- [curlnoise2d](/en/houdini-vex/noise-and-randomness/curlnoise2d)
 Computes 2d divergence free noise based on Perlin noise.
- [curlxnoise](/en/houdini-vex/noise-and-randomness/curlxnoise)
 Computes divergence free noise based on Simplex noise.
- [curlxnoise2d](/en/houdini-vex/noise-and-randomness/curlxnoise2d)
 Computes 2d divergence free noise based on simplex noise.
- [cwnoise](/en/houdini-vex/noise-and-randomness/cwnoise)
 Generates Worley (cellular) noise using a Chebyshev distance metric.
- [flownoise](/en/houdini-vex/noise-and-randomness/flownoise)
 Generates 1D and 3D Perlin Flow Noise from 3D and 4D data.
- [flowpnoise](/en/houdini-vex/noise-and-randomness/flowpnoise)
 There are two forms of Perlin-style noise: a non-periodic noise which
 changes randomly throughout N-dimensional space, and a periodic form
 which repeats over a given range of space.
- [gxnoise](/en/houdini-vex/noise-and-randomness/gxnoise)
 Evaluates a simplex noise field.
- [gxnoised](/en/houdini-vex/noise-and-randomness/gxnoised)
 Evaluates a simplex noise field and its derivatives.
- [hscript_noise](/en/houdini-vex/noise-and-randomness/hscript_noise)
 Generates noise matching the output of the Hscript noise() expression function.
- [hscript_rand](/en/houdini-vex/noise-and-randomness/hscript_rand)
 Produces the exact same results as the Houdini expression function of
 the same name.
- [hscript_snoise](/en/houdini-vex/noise-and-randomness/hscript_snoise)
- [hscript_sturb](/en/houdini-vex/noise-and-randomness/hscript_sturb)
- [hscript_turb](/en/houdini-vex/noise-and-randomness/hscript_turb)
 Generates turbulence matching the output of the HScript turb() expression function.
- [mwnoise](/en/houdini-vex/noise-and-randomness/mwnoise)
 Generates Worley (cellular) noise using a Manhattan distance metric.
- [mx_cellnoise](/en/houdini-vex/noise-and-randomness/mx_cellnoise)
 MaterialX compatible cellnoise
- [mx_perlin](/en/houdini-vex/noise-and-randomness/mx_perlin)
 MaterialX compatible Perlin noise
- [mx_voronoi](/en/houdini-vex/noise-and-randomness/mx_voronoi)
 MaterialX compatible Voronoi noise
- [mx_worley](/en/houdini-vex/noise-and-randomness/mx_worley)
 MaterialX compatible Worley noise
- [noise](/en/houdini-vex/noise-and-randomness/noise)
 There are two forms of Perlin-style noise: a non-periodic noise which
 changes randomly throughout N-dimensional space, and a periodic form
 which repeats over a given range of space.
- [noised](/en/houdini-vex/noise-and-randomness/noised)
 Derivatives of Perlin Noise.
- [nrandom](/en/houdini-vex/noise-and-randomness/nrandom)
 Non-deterministic random number generation function.
- [onoise](/en/houdini-vex/noise-and-randomness/onoise)
 These functions are similar to wnoise and vnoise.
- [pnoise](/en/houdini-vex/noise-and-randomness/pnoise)
 There are two forms of Perlin-style noise: a non-periodic noise which
 changes randomly throughout N-dimensional space, and a periodic form
 which repeats over a given range of space.
- [pxnoised](/en/houdini-vex/noise-and-randomness/pxnoised)
 Periodic derivatives of Simplex Noise.
- [rand](/en/houdini-vex/noise-and-randomness/rand)
 Creates a random number between 0 and 1 from a seed.
- [random](/en/houdini-vex/noise-and-randomness/random)
 Generate a random number based on the integer position in 1-4D space.
- [random_brj](/en/houdini-vex/noise-and-randomness/random_brj)
 Generate a uniformly distributed random number.
- [random_fhash](/en/houdini-vex/noise-and-randomness/random_fhash)
 Hashes floating point numbers to integers.
- [random_ihash](/en/houdini-vex/noise-and-randomness/random_ihash)
 Hashes integer numbers to integers.
- [random_poisson](/en/houdini-vex/noise-and-randomness/random_poisson)
 Generates a random Poisson variable given the mean to the distribution and a seed.
- [random_shash](/en/houdini-vex/noise-and-randomness/random_shash)
 Hashes a string to an integer.
- [random_sobol](/en/houdini-vex/noise-and-randomness/random_sobol)
 Generate a uniformly distributed random number.
- [snoise](/en/houdini-vex/noise-and-randomness/snoise)
 These functions are similar to wnoise.
- [vnoise](/en/houdini-vex/noise-and-randomness/vnoise)
 Generates Voronoi (cellular) noise.
- [wnoise](/en/houdini-vex/noise-and-randomness/wnoise)
 Generates Worley (cellular) noise.
- [xnoise](pxnoise.html)
 Simplex noise is very close to Perlin noise, except with the samples on a simplex mesh rather than a grid. This results in less grid artifacts. It also uses a higher order bspline to provide better derivatives. This is the periodic simplex noise
- [xnoise](/en/houdini-vex/noise-and-randomness/xnoise)
 Simplex noise is very close to Perlin noise, except with the samples on a simplex mesh rather than a grid. This results in less grid artifacts. It also uses a higher order bspline to provide better derivatives.
- [xnoised](/en/houdini-vex/noise-and-randomness/xnoised)
 Derivatives of Simplex Noise.

normals

## normals_group

- [computenormal](/en/houdini-vex/normals/computenormal)
 In shading contexts, computes a normal. In the SOP contexts, sets how/whether to recompute normals.
- [prim_normal](/en/houdini-vex/normals/prim_normal)
 Returns the normal of the primitive (prim_number) at parametric location u, v.

Open Color IO

## ocio_group

- [ocio_activedisplays](/en/houdini-vex/open-color-io/ocio_activedisplays)
 Returns the names of active displays supported in Open Color IO
- [ocio_activeviews](/en/houdini-vex/open-color-io/ocio_activeviews)
 Returns the names of active views supported in Open Color IO
- [ocio_import](/en/houdini-vex/open-color-io/ocio_import)
 Imports attributes from OpenColorIO spaces.
- [ocio_parsecolorspace](/en/houdini-vex/open-color-io/ocio_parsecolorspace)
 Parse the color space from a string
- [ocio_roles](/en/houdini-vex/open-color-io/ocio_roles)
 Returns the names of roles supported in Open Color IO
- [ocio_spaces](/en/houdini-vex/open-color-io/ocio_spaces)
 Returns the names of color spaces supported in Open Color IO.
- [ocio_transform](/en/houdini-vex/open-color-io/ocio_transform)
 Transform colors using Open Color IO
- [ocio_transformview](/en/houdini-vex/open-color-io/ocio_transformview)
 Transform colors to a view using Open Color IO

particles

## particles_group

- [filamentsample](/en/houdini-vex/particles/filamentsample)
 Samples the velocity field defined by a set of vortex filaments.

Point Clouds and 3D Images

## ptcloud_group

- [mattrib](/en/houdini-vex/point-clouds-and-3d-images/mattrib)
 Returns the value of the point attribute for the metaballs if
 metaball geometry is specified to i3dgen.
- [mdensity](/en/houdini-vex/point-clouds-and-3d-images/mdensity)
 Returns the density of the metaball field if metaball geometry is
 specified to i3dgen.
- [mspace](/en/houdini-vex/point-clouds-and-3d-images/mspace)
 Transforms the position specified into the local space of the
 metaball.
- [pcclose](/en/houdini-vex/point-clouds-and-3d-images/pcclose)
 This function closes the handle associated with a pcopen
 function.
- [pccone](/en/houdini-vex/point-clouds-and-3d-images/pccone)
 Returns a list of closest points from a file within a specified cone.
- [pccone_radius](/en/houdini-vex/point-clouds-and-3d-images/pccone_radius)
 Returns a list of closest points from a file in a cone, taking into account their radii
- [pcconvex](/en/houdini-vex/point-clouds-and-3d-images/pcconvex)
- [pcexport](/en/houdini-vex/point-clouds-and-3d-images/pcexport)
 Writes data to a point cloud inside a pciterate or a pcunshaded loop.
- [pcfarthest](/en/houdini-vex/point-clouds-and-3d-images/pcfarthest)
 Returns the distance to the farthest point found in the search
 performed by pcopen.
- [pcfilter](/en/houdini-vex/point-clouds-and-3d-images/pcfilter)
 Filters points found by pcopen using a simple reconstruction filter.
- [pcfind](/en/houdini-vex/point-clouds-and-3d-images/pcfind)
 Returns a list of closest points from a file.
- [pcfind_radius](/en/houdini-vex/point-clouds-and-3d-images/pcfind_radius)
 Returns a list of closest points from a file taking into account their radii.
- [pcgenerate](/en/houdini-vex/point-clouds-and-3d-images/pcgenerate)
 Generates a point cloud.
- [pcimport](/en/houdini-vex/point-clouds-and-3d-images/pcimport)
 Imports channel data from a point cloud inside a pciterate or a pcunshaded loop.
- [pcimportbyidx3](/en/houdini-vex/point-clouds-and-3d-images/pcimportbyidx3)
 Imports channel data from a point cloud outside a pciterate or a pcunshaded loop.
- [pcimportbyidx4](/en/houdini-vex/point-clouds-and-3d-images/pcimportbyidx4)
 Imports channel data from a point cloud outside a pciterate or a pcunshaded loop.
- [pcimportbyidxf](/en/houdini-vex/point-clouds-and-3d-images/pcimportbyidxf)
 Imports channel data from a point cloud outside a pciterate or a pcunshaded loop.
- [pcimportbyidxi](/en/houdini-vex/point-clouds-and-3d-images/pcimportbyidxi)
 Imports channel data from a point cloud outside a pciterate or a pcunshaded loop.
- [pcimportbyidxp](/en/houdini-vex/point-clouds-and-3d-images/pcimportbyidxp)
 Imports channel data from a point cloud outside a pciterate or a pcunshaded loop.
- [pcimportbyidxs](/en/houdini-vex/point-clouds-and-3d-images/pcimportbyidxs)
 Imports channel data from a point cloud outside a pciterate or a pcunshaded loop.
- [pcimportbyidxv](/en/houdini-vex/point-clouds-and-3d-images/pcimportbyidxv)
 Imports channel data from a point cloud outside a pciterate or a pcunshaded loop.
- [pciterate](/en/houdini-vex/point-clouds-and-3d-images/pciterate)
 This function can be used to iterate over all the points which were
 found in the pcopen query.
- [pcline](/en/houdini-vex/point-clouds-and-3d-images/pcline)
 Returns a list of closest points to an infinite line from a specified file
- [pcline_radius](/en/houdini-vex/point-clouds-and-3d-images/pcline_radius)
 Returns a list of closest points to an infinite line from a specified file
- [pcnumfound](/en/houdini-vex/point-clouds-and-3d-images/pcnumfound)
 This node returns the number of points found by pcopen.
- [pcopen](/en/houdini-vex/point-clouds-and-3d-images/pcopen)
 Returns a handle to a point cloud file.
- [pcopenlod](/en/houdini-vex/point-clouds-and-3d-images/pcopenlod)
 Returns a handle to a point cloud file.
- [pcsampleleaf](/en/houdini-vex/point-clouds-and-3d-images/pcsampleleaf)
 Changes the current iteration point to a leaf descendant of the current aggregate point.
- [pcsegment](/en/houdini-vex/point-clouds-and-3d-images/pcsegment)
 Returns a list of closest points to a line segment from a specified file
- [pcsegment_radius](/en/houdini-vex/point-clouds-and-3d-images/pcsegment_radius)
 Returns a list of closest points to a line segment from a specified file
- [pcsize](/en/houdini-vex/point-clouds-and-3d-images/pcsize)
- [pcunshaded](/en/houdini-vex/point-clouds-and-3d-images/pcunshaded)
 Iterate over all of the points of a read-write channel which haven’t
 had any data written to the channel yet.
- [pcwrite](/en/houdini-vex/point-clouds-and-3d-images/pcwrite)
 Writes data to a point cloud file.
- [pgfind](/en/houdini-vex/point-clouds-and-3d-images/pgfind)
 Returns a list of closest points from a file.
- [photonmap](/en/houdini-vex/point-clouds-and-3d-images/photonmap)
 Samples a color from a photon map.
- [texture3d](/en/houdini-vex/point-clouds-and-3d-images/texture3d)
 Returns the value of the 3d image at the position specified by P.
- [texture3dBox](texture3dBox.html)
 This function queries the 3D texture map specified and returns the
 bounding box information of the file.

Sampling

## sampling_group

- [create_cdf](/en/houdini-vex/sampling/create_cdf)
 Creates a cumulative distribution function (CDF) from an array of probability density function (PDF) values.
- [create_pdf](/en/houdini-vex/sampling/create_pdf)
 Creates a probability density function from an array of input values.
- [limit_sample_space](/en/houdini-vex/sampling/limit_sample_space)
 Limits a unit value in a way that maintains uniformity and in-range consistency.
- [newsampler](/en/houdini-vex/sampling/newsampler)
 Initializes a sampling sequence for the nextsample function.
- [nextsample](/en/houdini-vex/sampling/nextsample)
- [sample_cauchy](/en/houdini-vex/sampling/sample_cauchy)
 Samples the Cauchy (Lorentz) distribution.
- [sample_cdf](/en/houdini-vex/sampling/sample_cdf)
 Samples a cumulative distribution function (CDF).
- [sample_circle_arc](/en/houdini-vex/sampling/sample_circle_arc)
 Generates a uniform unit vector2, within maxangle of center, given a uniform number between 0 and 1.
- [sample_circle_edge_uniform](/en/houdini-vex/sampling/sample_circle_edge_uniform)
 Generates a uniform unit vector2, given a uniform number between 0 and 1.
- [sample_circle_ring_uniform](/en/houdini-vex/sampling/sample_circle_ring_uniform)
 Generates a uniform vector2 with alpha \< length \< 1, where 0 \< alpha \< 1, given a vector2 of uniform numbers between 0 and 1.
- [sample_circle_slice](/en/houdini-vex/sampling/sample_circle_slice)
 Generates a uniform vector2 with length \< 1, within maxangle of center, given a vector2 of uniform numbers between 0 and 1.
- [sample_circle_uniform](/en/houdini-vex/sampling/sample_circle_uniform)
 Generates a uniform vector2 with length \< 1, given a vector2 of uniform numbers between 0 and 1.
- [sample_direction_cone](/en/houdini-vex/sampling/sample_direction_cone)
 Generates a uniform unit vector, within maxangle of center, given a vector2 of uniform numbers between 0 and 1.
- [sample_direction_uniform](/en/houdini-vex/sampling/sample_direction_uniform)
 Generates a uniform unit vector, given a vector2 of uniform numbers between 0 and 1.
- [sample_discrete](/en/houdini-vex/sampling/sample_discrete)
 Returns an integer, either uniform or weighted, given a uniform number between 0 and 1.
- [sample_exponential](/en/houdini-vex/sampling/sample_exponential)
 Samples the exponential distribution.
- [sample_geometry](/en/houdini-vex/sampling/sample_geometry)
 Samples geometry in the scene and returns information from the shaders of surfaces that were sampled.
- [sample_hemisphere](/en/houdini-vex/sampling/sample_hemisphere)
 Generates a unit vector, optionally biased, within a hemisphere, given a vector2 of uniform numbers between 0 and 1.
- [sample_hypersphere_cone](/en/houdini-vex/sampling/sample_hypersphere_cone)
 Generates a uniform vector4 with length \< 1, within maxangle of center, given a vector4 of uniform numbers between 0 and 1.
- [sample_hypersphere_uniform](/en/houdini-vex/sampling/sample_hypersphere_uniform)
 Generates a uniform vector4 with length \< 1, given a vector4 of uniform numbers between 0 and 1.
- [sample_light](/en/houdini-vex/sampling/sample_light)
 Samples a 3D position on a light source and runs the light shader at that point.
- [sample_lognormal](/en/houdini-vex/sampling/sample_lognormal)
 Samples the log-normal distribution based on parameters of the underlying normal distribution.
- [sample_lognormal_by_median](/en/houdini-vex/sampling/sample_lognormal_by_median)
 Samples the log-normal distribution based on median and standard deviation.
- [sample_normal](/en/houdini-vex/sampling/sample_normal)
 Samples the normal (Gaussian) distribution.
- [sample_orientation_cone](/en/houdini-vex/sampling/sample_orientation_cone)
 Generates a uniform unit vector4, within maxangle of center, given a vector of uniform numbers between 0 and 1.
- [sample_orientation_uniform](/en/houdini-vex/sampling/sample_orientation_uniform)
 Generates a uniform unit vector4, given a vector of uniform numbers between 0 and 1.
- [sample_photon](/en/houdini-vex/sampling/sample_photon)
 Samples a 3D position on a light source and runs the light shader at that point.
- [sample_sphere_cone](/en/houdini-vex/sampling/sample_sphere_cone)
 Generates a uniform vector with length \< 1, within maxangle of center, given a vector of uniform numbers between 0 and 1.
- [sample_sphere_shell_uniform](/en/houdini-vex/sampling/sample_sphere_shell_uniform)
 Generates a uniform vector with alpha \< length \< 1, where 0 \< alpha \< 1, given a vector of uniform numbers between 0 and 1.
- [sample_sphere_uniform](/en/houdini-vex/sampling/sample_sphere_uniform)
 Generates a uniform vector with length \< 1, given a vector of uniform numbers between 0 and 1.
- [sampledisk](/en/houdini-vex/sampling/sampledisk)
 Warps uniform random samples to a disk.
- [variance](/en/houdini-vex/sampling/variance)
 Computes the mean value and variance for a value.

Sensor Input

## sensor_group

- [sensor_panorama_create](/en/houdini-vex/sensor-input/sensor_panorama_create)
 Sensor function to render GL scene and query the result.
- [sensor_panorama_getcolor](/en/houdini-vex/sensor-input/sensor_panorama_getcolor)
 Sensor function query a rendered GL scene.
- [sensor_panorama_getcone](/en/houdini-vex/sensor-input/sensor_panorama_getcone)
 Sensor function to query average values from rendered GL scene.
- [sensor_panorama_getdepth](/en/houdini-vex/sensor-input/sensor_panorama_getdepth)
 Sensor function query a rendered GL scene.
- [sensor_save](/en/houdini-vex/sensor-input/sensor_save)
 Sensor function to save a rendered GL scene.

Shading and Rendering

## shading_group

- [area](/en/houdini-vex/shading-and-rendering/area)
 Returns the area of the micropolygon containing a variable such as P.
- [blinnBRDF](blinnBRDF.html)
- [bouncelabel](/en/houdini-vex/shading-and-rendering/bouncelabel)
- [bouncemask](/en/houdini-vex/shading-and-rendering/bouncemask)
- [diffuseBRDF](diffuseBRDF.html)
- [filterstep](/en/houdini-vex/shading-and-rendering/filterstep)
 Returns the anti-aliased weight of the step function.
- [fresnel](/en/houdini-vex/shading-and-rendering/fresnel)
 Computes the fresnel reflection/refraction contributions given an
 incoming vector, surface normal (both normalized), and an index of
 refraction (eta).
- [frontface](/en/houdini-vex/shading-and-rendering/frontface)
 If dot(I, Nref) is less than zero, N will be negated.
- [gather](/en/houdini-vex/shading-and-rendering/gather)
 Sends rays into the scene and returns information from the shaders of
 surfaces hit by the rays.
- [getblurP](getblurP.html)
 Returns the blurred point position (P) vector at a fractional time within the motion blur exposure.
- [getcomponents](/en/houdini-vex/shading-and-rendering/getcomponents)
- [getderiv](/en/houdini-vex/shading-and-rendering/getderiv)
 Evaluates surface derivatives of an attribute.
- [getfogname](/en/houdini-vex/shading-and-rendering/getfogname)
 Returns the name of the current object whose shader is being run.
- [getglobalraylevel](/en/houdini-vex/shading-and-rendering/getglobalraylevel)
 Returns the depth of the ray tree for computing global
 illumination.
- [getgroupid](/en/houdini-vex/shading-and-rendering/getgroupid)
 Returns group id containing current primitive.
- [getlight](/en/houdini-vex/shading-and-rendering/getlight)
 Returns a light struct for the specified light identifier.
- [getlightid](/en/houdini-vex/shading-and-rendering/getlightid)
 Returns the light id for a named light (or -1 for an invalid name).
- [getlightname](/en/houdini-vex/shading-and-rendering/getlightname)
 Returns the name of the current light when called from within an illuminance loop, or converts an integer light ID into the light’s name.
- [getlights](/en/houdini-vex/shading-and-rendering/getlights)
 Returns an array of light identifiers for the currently shaded surface.
- [getlightscope](/en/houdini-vex/shading-and-rendering/getlightscope)
 Returns a selection of lights that illuminate a given material.
- [getlocalcurvature](/en/houdini-vex/shading-and-rendering/getlocalcurvature)
 Evaluates local curvature of primitive grid, using the same curvature evaluation method as Measure SOPs.
- [getmaterial](/en/houdini-vex/shading-and-rendering/getmaterial)
 Returns a material struct for the current surface.
- [getmaterialid](/en/houdini-vex/shading-and-rendering/getmaterialid)
 Returns material id of shaded primitive.
- [getobjectid](/en/houdini-vex/shading-and-rendering/getobjectid)
 Returns the object id for the current shading context.
- [getobjectname](/en/houdini-vex/shading-and-rendering/getobjectname)
 Returns the name of the current object whose shader is being run.
- [getphotonlight](/en/houdini-vex/shading-and-rendering/getphotonlight)
 Returns the integer ID of the light being used for photon shading.
- [getprimid](/en/houdini-vex/shading-and-rendering/getprimid)
 Returns the number of the current primitive.
- [getptextureid](/en/houdini-vex/shading-and-rendering/getptextureid)
 Returns the ptexture face id for the current primitive.
- [getraylevel](/en/houdini-vex/shading-and-rendering/getraylevel)
 Returns the depth of the ray tree for the current shading.
- [getrayweight](/en/houdini-vex/shading-and-rendering/getrayweight)
 Returns an approximation to the contribution of the ray to the final
 pixel color.
- [getsamplestore](/en/houdini-vex/shading-and-rendering/getsamplestore)
 Looks up sample data in a channel, referenced by a point.
- [getscope](/en/houdini-vex/shading-and-rendering/getscope)
 Returns a selection of objects visible to rays for a given material.
- [getsmoothP](getsmoothP.html)
 Returns modified surface position based on a smoothing function.
- [getuvtangents](/en/houdini-vex/shading-and-rendering/getuvtangents)
 Evaluates UV tangents at a point on an arbitrary object.
- [gradient](/en/houdini-vex/shading-and-rendering/gradient)
 Returns the gradient of a field.
- [haslight](/en/houdini-vex/shading-and-rendering/haslight)
 Returns whether a light illuminates the given material.
- [illuminance](/en/houdini-vex/shading-and-rendering/illuminance)
 Loops through all light sources in the scene, calling the light shader for each light source to set the Cl and L global variables.
- [integratehoseksky](/en/houdini-vex/shading-and-rendering/integratehoseksky)
 Computes irradiance from the given Hosek Sky on a horizontal surface
- [interpolate](/en/houdini-vex/shading-and-rendering/interpolate)
 Interpolates a value across the currently shaded micropolygon.
- [intersect_lights](/en/houdini-vex/shading-and-rendering/intersect_lights)
 Finds the nearest intersection of a ray with any of a list of (area) lights and runs the light shader at the intersection point.
- [irradiance](/en/houdini-vex/shading-and-rendering/irradiance)
 Computes irradiance (global illumination) at the point P with the normal N.
- [isfogray](/en/houdini-vex/shading-and-rendering/isfogray)
 Returns 1 if the shader is being called to evaluate illumination for
 fog objects, or 0 if the light or shadow shader is being called to
 evaluate surface illumination.
- [islpeactive](/en/houdini-vex/shading-and-rendering/islpeactive)
 Returns 1 if Light Path Expressions are enabled. 0 Otherwise.
- [israytracing](/en/houdini-vex/shading-and-rendering/israytracing)
 Indicates whether a shader is being executed for ray tracing.
- [isshadingRHS](isshadingRHS.html)
 Detects the orientation of default shading space.
- [isshadowray](/en/houdini-vex/shading-and-rendering/isshadowray)
 Returns 1 if the shader is being called to evaluate opacity for
 shadow rays, or 0 if the shader is being called to evaluate for surface
 color.
- [isuvrendering](/en/houdini-vex/shading-and-rendering/isuvrendering)
 Indicates whether the shader is being evaluated while doing UV rendering (e.g. texture unwrapping)
- [lightbounces](/en/houdini-vex/shading-and-rendering/lightbounces)
 Returns the bounce mask for a light struct.
- [lightid](/en/houdini-vex/shading-and-rendering/lightid)
 Returns the light id for a light struct.
- [lightstate](/en/houdini-vex/shading-and-rendering/lightstate)
 Queries the renderer for a named property.
- [limport](/en/houdini-vex/shading-and-rendering/limport)
 Imports a variable from the light shader for the surface.
- [matchvex_blinn](/en/houdini-vex/shading-and-rendering/matchvex_blinn)
 Returns a BSDF that matches the output of the traditional VEX blinn function.
- [matchvex_specular](/en/houdini-vex/shading-and-rendering/matchvex_specular)
 Returns a BSDF that matches the output of the traditional VEX specular function.
- [nbouncetypes](/en/houdini-vex/shading-and-rendering/nbouncetypes)
- [objectstate](/en/houdini-vex/shading-and-rendering/objectstate)
 Queries the renderer for a named property.
- [occlusion](/en/houdini-vex/shading-and-rendering/occlusion)
 Computes ambient occlusion.
- [pathtrace](/en/houdini-vex/shading-and-rendering/pathtrace)
 Computes global illumination using PBR for secondary bounces.
- [phongBRDF](phongBRDF.html)
- [rayhittest](/en/houdini-vex/shading-and-rendering/rayhittest)
 Sends a ray from the position P along the direction D.
- [rayimport](/en/houdini-vex/shading-and-rendering/rayimport)
 Imports a value sent by a shader in a gather loop.
- [reflect](/en/houdini-vex/shading-and-rendering/reflect)
 Returns the vector representing the reflection of the direction
 against the normal.
- [reflectlight](/en/houdini-vex/shading-and-rendering/reflectlight)
 Computes the amount of reflected light which hits the surface.
- [refract](/en/houdini-vex/shading-and-rendering/refract)
 Returns the refraction ray given an incoming direction, the
 normalized normal and an index of refraction.
- [refractlight](/en/houdini-vex/shading-and-rendering/refractlight)
 Computes the illumination of surfaces refracted by the current
 surface.
- [renderstate](/en/houdini-vex/shading-and-rendering/renderstate)
 Queries the renderer for a named property.
- [resolvemissedray](/en/houdini-vex/shading-and-rendering/resolvemissedray)
 Returns the background color for rays that exit the scene.
- [scatter](/en/houdini-vex/shading-and-rendering/scatter)
 Evaluates a scattering event through the domain of a geometric object.
- [setcurrentlight](/en/houdini-vex/shading-and-rendering/setcurrentlight)
 Sets the current light
- [setsamplestore](/en/houdini-vex/shading-and-rendering/setsamplestore)
 Stores sample data in a channel, referenced by a point.
- [shadow](/en/houdini-vex/shading-and-rendering/shadow)
 Calls shadow shaders for the current light source.
- [shadow_light](/en/houdini-vex/shading-and-rendering/shadow_light)
 Executes the shadow shader for a given light and returns the amount of shadowing as a multiplier of the shaded color.
- [shimport](/en/houdini-vex/shading-and-rendering/shimport)
 Imports a variable from the shadow shader for the surface.
- [simport](/en/houdini-vex/shading-and-rendering/simport)
 Imports a variable sent by a surface shader in an illuminance loop.
- [specularBRDF](specularBRDF.html)
 Returns the computed BRDFs for the different lighting models used in VEX shading.
- [storelightexport](/en/houdini-vex/shading-and-rendering/storelightexport)
 Stores exported data for a light.
- [switch](/en/houdini-vex/shading-and-rendering/switch)
 Use a different bsdf for direct or indirect lighting.
- [trace](/en/houdini-vex/shading-and-rendering/trace)
 Sends a ray from P along the normalized vector D.
- [translucent](/en/houdini-vex/shading-and-rendering/translucent)
 Returns a Lambertian translucence BSDF.
- [uvunwrap](/en/houdini-vex/shading-and-rendering/uvunwrap)
 Computes the position and normal at given (u, v) coordinates, for use in a lens shader.
- [wireblinn](/en/houdini-vex/shading-and-rendering/wireblinn)
- [wirediffuse](/en/houdini-vex/shading-and-rendering/wirediffuse)
- [writepixel](/en/houdini-vex/shading-and-rendering/writepixel)
 Writes color information to a pixel in the output image

Strings

## string_group

- [abspath](/en/houdini-vex/strings/abspath)
 Returns the full path of a file.
- [chr](/en/houdini-vex/strings/chr)
 Converts an unicode codepoint to a UTF8 string.
- [concat](/en/houdini-vex/strings/concat)
 Concatenate all the strings specified to form a single string.
- [decode](/en/houdini-vex/strings/decode)
 Decodes a variable name that was previously encoded.
- [decodeattrib](/en/houdini-vex/strings/decodeattrib)
 Decodes a geometry attribute name that was previously encoded.
- [decodeparm](/en/houdini-vex/strings/decodeparm)
 Decodes a node parameter name that was previously encoded.
- [decodeutf8](/en/houdini-vex/strings/decodeutf8)
 Decodes a UTF8 string into a series of codepoints.
- [encode](/en/houdini-vex/strings/encode)
 Encodes any string into a valid variable name.
- [encodeattrib](/en/houdini-vex/strings/encodeattrib)
 Encodes any string into a valid geometry attribute name.
- [encodeparm](/en/houdini-vex/strings/encodeparm)
 Encodes any string into a valid node parameter name.
- [encodeutf8](/en/houdini-vex/strings/encodeutf8)
 Encodes a UTF8 string from a series of codepoints.
- [endswith](/en/houdini-vex/strings/endswith)
 Indicates the string ends with the specified string.
- [find](/en/houdini-vex/strings/find)
 Finds an item in an array or string.
- [isalpha](/en/houdini-vex/strings/isalpha)
 Returns 1 if all the characters in the string are alphabetic
- [isdigit](/en/houdini-vex/strings/isdigit)
 Returns 1 if all the characters in the string are numeric
- [itoa](/en/houdini-vex/strings/itoa)
 Converts an integer to a string.
- [join](/en/houdini-vex/strings/join)
 Concatenate all the strings of an array inserting a common spacer.
- [lstrip](/en/houdini-vex/strings/lstrip)
 Strips leading whitespace from a string.
- [makevalidvarname](/en/houdini-vex/strings/makevalidvarname)
 Forces a string to conform to the rules for variable names.
- [match](/en/houdini-vex/strings/match)
 This function returns 1 if the subject matches the pattern specified,
 or 0 if the subject doesn’t match.
- [opdigits](/en/houdini-vex/strings/opdigits)
 Returns the integer value of the last sequence of digits of a string
- [ord](/en/houdini-vex/strings/ord)
 Converts an UTF8 string into a codepoint.
- [pluralize](/en/houdini-vex/strings/pluralize)
 Converts an English noun to its plural.
- [re_find](/en/houdini-vex/strings/re_find)
 Matches a regular expression in a string
- [re_findall](/en/houdini-vex/strings/re_findall)
 Finds all instances of the given regular expression in the string
- [re_match](/en/houdini-vex/strings/re_match)
 Returns 1 if the entire input string matches the expression
- [re_replace](/en/houdini-vex/strings/re_replace)
 Replaces instances of regex_find with regex_replace
- [re_split](/en/houdini-vex/strings/re_split)
 Splits the given string based on regex match.
- [relativepath](/en/houdini-vex/strings/relativepath)
 Computes the relative path for two full paths.
- [relpath](/en/houdini-vex/strings/relpath)
 Returns the relative path to a file.
- [replace](/en/houdini-vex/strings/replace)
 Replaces occurrences of a substring.
- [replace_match](/en/houdini-vex/strings/replace_match)
 Replaces the matched string pattern with another pattern.
- [rstrip](/en/houdini-vex/strings/rstrip)
 Strips trailing whitespace from a string.
- [split](/en/houdini-vex/strings/split)
 Splits a string into tokens.
- [splitpath](/en/houdini-vex/strings/splitpath)
 Splits a file path into the directory and name parts.
- [sprintf](/en/houdini-vex/strings/sprintf)
 Formats a string like printf but returns the result as a string
 instead of printing it.
- [startswith](/en/houdini-vex/strings/startswith)
 Returns 1 if the string starts with the specified string.
- [strip](/en/houdini-vex/strings/strip)
 Strips leading and trailing whitespace from a string.
- [strlen](/en/houdini-vex/strings/strlen)
 Returns the length of the string.
- [titlecase](/en/houdini-vex/strings/titlecase)
 Returns a string that is the titlecase version of the input string.
- [tolower](/en/houdini-vex/strings/tolower)
 Converts all characters in string to lower case
- [toupper](/en/houdini-vex/strings/toupper)
 Converts all characters in string to upper case

Subdivision Surfaces

## subd_group

- [osd_facecount](/en/houdini-vex/subdivision-surfaces/osd_facecount)
- [osd_firstpatch](/en/houdini-vex/subdivision-surfaces/osd_firstpatch)
- [osd_limitsurface](/en/houdini-vex/subdivision-surfaces/osd_limitsurface)
 Evaluates a point attribute at the subdivision limit surface using Open Subdiv.
- [osd_limitsurfacevertex](/en/houdini-vex/subdivision-surfaces/osd_limitsurfacevertex)
 Evaluates a vertex attribute at the subdivision limit surface using Open Subdiv.
- [osd_lookupface](/en/houdini-vex/subdivision-surfaces/osd_lookupface)
 Outputs the Houdini face and UV coordinates corresponding to the given coordinates on an OSD patch.
- [osd_lookuppatch](/en/houdini-vex/subdivision-surfaces/osd_lookuppatch)
 Outputs the OSD patch and UV coordinates corresponding to the given coordinates on a Houdini polygon face.
- [osd_patchcount](/en/houdini-vex/subdivision-surfaces/osd_patchcount)
- [osd_patches](/en/houdini-vex/subdivision-surfaces/osd_patches)
 Returns a list of patch IDs for the patches in a subdivision hull.

Tetrahedrons

## tet_group

- [tet_adjacent](/en/houdini-vex/tetrahedrons/tet_adjacent)
 Returns primitive number of an adjacent tetrahedron.
- [tet_faceindex](/en/houdini-vex/tetrahedrons/tet_faceindex)
 Returns vertex indices of each face of a tetrahedron.

Texturing

## texture_group

- [colormap](/en/houdini-vex/texturing/colormap)
 Looks up a (filtered) color from a texture file.
- [depthmap](/en/houdini-vex/texturing/depthmap)
 The depthmap functions work on an image which was rendered as a
 z-depth image from mantra.
- [environment](/en/houdini-vex/texturing/environment)
 Returns the color of the environment texture.
- [expand_udim](/en/houdini-vex/texturing/expand_udim)
 Perform UDIM or UVTILE texture filename expansion.
- [has_udim](/en/houdini-vex/texturing/has_udim)
 Test string for UDIM or UVTILE patterns.
- [importance_remap](/en/houdini-vex/texturing/importance_remap)
 Remaps a texture coordinate to another coordinate in the map to optimize sampling of brighter areas.
- [ocean_sample](/en/houdini-vex/texturing/ocean_sample)
 Evaluates an ocean spectrum and samples the result at a given time and location.
- [ptexture](/en/houdini-vex/texturing/ptexture)
 Computes a filtered sample from a ptex texture map. Use texture instead.
- [rawcolormap](/en/houdini-vex/texturing/rawcolormap)
 Looks up an unfiltered color from a texture file.
- [shadowmap](/en/houdini-vex/texturing/shadowmap)
 The shadowmap function will treat the shadow map as if the image were
 rendered from a light source.
- [teximport](/en/houdini-vex/texturing/teximport)
 Imports attributes from texture files.
- [texprintf](/en/houdini-vex/texturing/texprintf)
 Similar to sprintf, but does expansion of UDIM or UVTILE texture filename expansion.
- [texture](/en/houdini-vex/texturing/texture)
 Computes a filtered sample of the texture map specified.

Transforms and Space

## transform_group

- [dihedral](/en/houdini-vex/transforms-and-space/dihedral)
 Computes the rotation matrix or quaternion which rotates the vector a onto the vector b.
- [fromNDC](fromNDC.html)
 Transforms a position from normal device coordinates to the
 coordinates in the appropriate space.
- [getpackedtransform](/en/houdini-vex/transforms-and-space/getpackedtransform)
 Gets the transform of a packed primitive.
- [getspace](/en/houdini-vex/transforms-and-space/getspace)
 Returns a transform from one space to another.
- [instance](/en/houdini-vex/transforms-and-space/instance)
 Creates an instance transform matrix.
- [lookat](/en/houdini-vex/transforms-and-space/lookat)
 Computes a rotation matrix or angles to orient the negative z-axis along the vector (to-from) under the transformation.
- [maketransform](/en/houdini-vex/transforms-and-space/maketransform)
 Builds a 3×3 or 4×4 transform matrix.
- [ndcdepth](/en/houdini-vex/transforms-and-space/ndcdepth)
 Returns the camera space z-depth of the NDC z-depth value.
- [ntransform](/en/houdini-vex/transforms-and-space/ntransform)
 Transforms a normal vector.
- [orthographic](/en/houdini-vex/transforms-and-space/orthographic)
 Create an orthographic projection matrix.
- [ow_nspace](/en/houdini-vex/transforms-and-space/ow_nspace)
 Transforms a normal vector from Object to World space.
- [ow_space](/en/houdini-vex/transforms-and-space/ow_space)
 Transforms a position value from Object to World space.
- [ow_vspace](/en/houdini-vex/transforms-and-space/ow_vspace)
 Transforms a direction vector from Object to World space.
- [packedtransform](/en/houdini-vex/transforms-and-space/packedtransform)
 Transforms a packed primitive.
- [perspective](/en/houdini-vex/transforms-and-space/perspective)
 Create a perspective projection matrix.
- [polardecomp](/en/houdini-vex/transforms-and-space/polardecomp)
 Computes the polar decomposition of a matrix.
- [prerotate](/en/houdini-vex/transforms-and-space/prerotate)
 Applies a pre rotation to the given matrix.
- [prescale](/en/houdini-vex/transforms-and-space/prescale)
 Prescales the given matrix in three directions simultaneously (X, Y, Z -
 given by the components of the scale_vector).
- [pretranslate](/en/houdini-vex/transforms-and-space/pretranslate)
 Pretranslates a matrix by a vector.
- [ptransform](/en/houdini-vex/transforms-and-space/ptransform)
 Transforms a vector from one space to another.
- [rotate](/en/houdini-vex/transforms-and-space/rotate)
 Applies a rotation to the given matrix.
- [rotate_x_to](/en/houdini-vex/transforms-and-space/rotate_x_to)
 Rotates a vector by a rotation that would bring the x-axis to a given direction.
- [scale](/en/houdini-vex/transforms-and-space/scale)
 Scales the given matrix in three directions simultaneously (X, Y, Z -
 given by the components of the scale_vector).
- [setpackedtransform](/en/houdini-vex/transforms-and-space/setpackedtransform)
 Sets the transform of a packed primitive.
- [smoothrotation](/en/houdini-vex/transforms-and-space/smoothrotation)
 Returns the closest equivalent Euler rotations to a reference rotation.
- [solveconstraint](/en/houdini-vex/transforms-and-space/solveconstraint)
 Applies an inverse kinematics algorithm to a skeleton.
- [solvecurve](/en/houdini-vex/transforms-and-space/solvecurve)
 Applies a curve inverse kinematics algorithm to a skeleton.
- [solvefbik](/en/houdini-vex/transforms-and-space/solvefbik)
 Applies a full-body inverse kinematics algorithm to a skeleton.
- [solveik](/en/houdini-vex/transforms-and-space/solveik)
 Applies an inverse kinematics algorithm to a skeleton.
- [solvephysfbik](/en/houdini-vex/transforms-and-space/solvephysfbik)
 Applies a full-body inverse kinematics algorithm to a skeleton, with optional control over the center of mass.
- [toNDC](toNDC.html)
 Transforms a position into normal device coordinates.
- [translate](/en/houdini-vex/transforms-and-space/translate)
 Translates a matrix by a vector.
- [tw_nspace](/en/houdini-vex/transforms-and-space/tw_nspace)
 Transforms a normal vector from Texture to World space.
- [tw_space](/en/houdini-vex/transforms-and-space/tw_space)
 Transforms a position value from Texture to World space.
- [tw_vspace](/en/houdini-vex/transforms-and-space/tw_vspace)
 Transforms a direction vector from Texture to World space.
- [vtransform](/en/houdini-vex/transforms-and-space/vtransform)
 Transforms a directional vector.
- [wo_nspace](/en/houdini-vex/transforms-and-space/wo_nspace)
 Transforms a normal vector from World to Object space.
- [wo_space](/en/houdini-vex/transforms-and-space/wo_space)
 Transforms a position value from World to Object space.
- [wo_vspace](/en/houdini-vex/transforms-and-space/wo_vspace)
 Transforms a direction vector from World to Object space.
- [wt_nspace](/en/houdini-vex/transforms-and-space/wt_nspace)
 Transforms a normal vector from World to Texture space.
- [wt_space](/en/houdini-vex/transforms-and-space/wt_space)
 Transforms a position value from World to Texture space.
- [wt_vspace](/en/houdini-vex/transforms-and-space/wt_vspace)
 Transforms a direction vector from World to Texture space.

usd

## usd_group

- [usd_addattrib](/en/houdini-vex/usd/usd_addattrib)
 Creates an attribute of a given type on a primitive.
- [usd_addcollectionexclude](/en/houdini-vex/usd/usd_addcollectionexclude)
 Excludes an object from the collection
- [usd_addcollectioninclude](/en/houdini-vex/usd/usd_addcollectioninclude)
 Includes an object in the collection
- [usd_addinversetotransformorder](/en/houdini-vex/usd/usd_addinversetotransformorder)
 Appends an inversed transform operation to the primitive’s transform order
- [usd_addorient](/en/houdini-vex/usd/usd_addorient)
 Applies a quaternion orientation to the primitive
- [usd_addprim](/en/houdini-vex/usd/usd_addprim)
 Creates a primitive of a given type.
- [usd_addprimvar](/en/houdini-vex/usd/usd_addprimvar)
 Creates a primvar of a given type on a primitive.
- [usd_addrelationshiptarget](/en/houdini-vex/usd/usd_addrelationshiptarget)
 Adds a target to the primitive’s relationship
- [usd_addrotate](/en/houdini-vex/usd/usd_addrotate)
 Applies a rotation to the primitive
- [usd_addscale](/en/houdini-vex/usd/usd_addscale)
 Applies a scale to the primitive
- [usd_addschemaattrib](/en/houdini-vex/usd/usd_addschemaattrib)
 Creates an attribute of a given type on a primitive, and sets the custom metadata flag to False.
- [usd_addtotransformorder](/en/houdini-vex/usd/usd_addtotransformorder)
 Appends a transform operation to the primitive’s transform order
- [usd_addtransform](/en/houdini-vex/usd/usd_addtransform)
 Applies a transformation to the primitive
- [usd_addtranslate](/en/houdini-vex/usd/usd_addtranslate)
 Applies a translation to the primitive
- [usd_applyapi](/en/houdini-vex/usd/usd_applyapi)
 Apply an API schema to a primitive.
- [usd_attrib](/en/houdini-vex/usd/usd_attrib)
 Reads the value of an attribute from the USD primitive.
- [usd_attribelement](/en/houdini-vex/usd/usd_attribelement)
 Reads the value of an element from an array attribute.
- [usd_attriblen](/en/houdini-vex/usd/usd_attriblen)
 Returns the length of the array attribute.
- [usd_attribnames](/en/houdini-vex/usd/usd_attribnames)
 Returns the names of the attributes available on the primitive.
- [usd_attribsize](/en/houdini-vex/usd/usd_attribsize)
 Returns the tuple size of the attribute.
- [usd_attribtimesamples](/en/houdini-vex/usd/usd_attribtimesamples)
 Returns the time codes at which the attribute values are authored.
- [usd_attribtypename](/en/houdini-vex/usd/usd_attribtypename)
 Returns the name of the attribute type.
- [usd_blockattrib](/en/houdini-vex/usd/usd_blockattrib)
 Blocks the attribute.
- [usd_blockprimvar](/en/houdini-vex/usd/usd_blockprimvar)
 Blocks the primvar.
- [usd_blockprimvarindices](/en/houdini-vex/usd/usd_blockprimvarindices)
 Blocks the primvar.
- [usd_blockrelationship](/en/houdini-vex/usd/usd_blockrelationship)
 Blocks the primitive’s relationship
- [usd_boundmaterialpath](/en/houdini-vex/usd/usd_boundmaterialpath)
 Returns the material path bound to a given primitive.
- [usd_childnames](/en/houdini-vex/usd/usd_childnames)
 Returns the names of the primitive’s children.
- [usd_clearmetadata](/en/houdini-vex/usd/usd_clearmetadata)
 Clears the value of the metadata.
- [usd_cleartransformorder](/en/houdini-vex/usd/usd_cleartransformorder)
 Clears the primitive’s transform order
- [usd_collectioncomputedpaths](/en/houdini-vex/usd/usd_collectioncomputedpaths)
 Obtains the list of all objects that belong to the collection
- [usd_collectioncontains](/en/houdini-vex/usd/usd_collectioncontains)
 Checks if an object path belongs to the collection
- [usd_collectionexcludes](/en/houdini-vex/usd/usd_collectionexcludes)
 Obtains the object paths that are in the collection’s exclude list
- [usd_collectionexpansionrule](/en/houdini-vex/usd/usd_collectionexpansionrule)
 Obtains the collection’s expansion rule
- [usd_collectionincludes](/en/houdini-vex/usd/usd_collectionincludes)
 Obtains the object paths that are in the collection’s include list
- [usd_drawmode](/en/houdini-vex/usd/usd_drawmode)
 Returns the primitive’s draw mode.
- [usd_findtransformname](/en/houdini-vex/usd/usd_findtransformname)
 Retrurns primitive’s transform operation full name for given the transform operation suffix
- [usd_flattenediprimvar](/en/houdini-vex/usd/usd_flattenediprimvar)
 Reads the value of a flattened primvar directly from the USD primitive or from USD primitive’s ancestor.
- [usd_flattenediprimvarelement](/en/houdini-vex/usd/usd_flattenediprimvarelement)
 Reads an element value of a flattened array primvar directly from the USD primitive or from its ancestor.
- [usd_flattenedprimvar](/en/houdini-vex/usd/usd_flattenedprimvar)
 Reads the value of an flattened primvar directly from the USD primitive.
- [usd_flattenedprimvarelement](/en/houdini-vex/usd/usd_flattenedprimvarelement)
 Reads an element value of a flattened array primvar directly from a USD primitive.
- [usd_getbbox](/en/houdini-vex/usd/usd_getbbox)
 Sets two vectors to the minimum and maximum corners of the bounding box for the primitive.
- [usd_getbbox_center](/en/houdini-vex/usd/usd_getbbox_center)
 Returns the center of the bounding box for the primitive.
- [usd_getbbox_max](/en/houdini-vex/usd/usd_getbbox_max)
 Returns the maximum of the bounding box for the primitive.
- [usd_getbbox_min](/en/houdini-vex/usd/usd_getbbox_min)
 Returns the minimum of the bounding box for the primitive.
- [usd_getbbox_size](/en/houdini-vex/usd/usd_getbbox_size)
 Returns the size of the bounding box for the primitive.
- [usd_getbounds](/en/houdini-vex/usd/usd_getbounds)
 Obtains the primitive’s bounds
- [usd_getpointinstancebounds](/en/houdini-vex/usd/usd_getpointinstancebounds)
 Obtains the primitive’s bounds
- [usd_hasapi](/en/houdini-vex/usd/usd_hasapi)
 Checks if the primitive adheres to the given API.
- [usd_haspayload](/en/houdini-vex/usd/usd_haspayload)
 Checks if the primitive adheres to the given API.
- [usd_iprimvar](/en/houdini-vex/usd/usd_iprimvar)
 Reads the value of a primvar directly from the USD primitive or from USD primitive’s ancestor.
- [usd_iprimvarelement](/en/houdini-vex/usd/usd_iprimvarelement)
 Reads the value of an element from the array primvar directly from the USD primitive or from USD primitive’s ancestor.
- [usd_iprimvarelementsize](/en/houdini-vex/usd/usd_iprimvarelementsize)
 Returns the element size of the primvar directly from the USD primitive or from USD primitive’s ancestor.
- [usd_iprimvarindices](/en/houdini-vex/usd/usd_iprimvarindices)
 Returns the index array of an indexed primvar directly on the USD primitive or on USD primitive’s ancestor.
- [usd_iprimvarinterpolation](/en/houdini-vex/usd/usd_iprimvarinterpolation)
 Returns the element size of the primvar directly on the USD primitive or on USD primitive’s ancestor.
- [usd_iprimvarlen](/en/houdini-vex/usd/usd_iprimvarlen)
 Returns the length of the array primvar directly on the USD primitive or on USD primitive’s ancestor.
- [usd_iprimvarnames](/en/houdini-vex/usd/usd_iprimvarnames)
 Returns the names of the primvars available directly on the given USD primitive or on USD primitive’s ancestor.
- [usd_iprimvarsize](/en/houdini-vex/usd/usd_iprimvarsize)
 Returns the tuple size of the primvar directly on the USD primitive or on USD primitive’s ancestor.
- [usd_iprimvartimesamples](/en/houdini-vex/usd/usd_iprimvartimesamples)
 Returns the time codes at which the primvar values are authored directly on the given primitive or on its ancestor.
- [usd_iprimvartypename](/en/houdini-vex/usd/usd_iprimvartypename)
 Returns the name of the primvar type found on the given primitive or its ancestor.
- [usd_isabstract](/en/houdini-vex/usd/usd_isabstract)
 Checks if the primitive is abstract.
- [usd_isactive](/en/houdini-vex/usd/usd_isactive)
 Checks if the primitive is active.
- [usd_isarray](/en/houdini-vex/usd/usd_isarray)
 Checks if the attribute is an array.
- [usd_isarrayiprimvar](/en/houdini-vex/usd/usd_isarrayiprimvar)
 Checks if there is an array primvar directly on the USD primitive or on USD primitive’s ancestor.
- [usd_isarraymetadata](/en/houdini-vex/usd/usd_isarraymetadata)
 Checks if the given metadata is an array.
- [usd_isarrayprimvar](/en/houdini-vex/usd/usd_isarrayprimvar)
 Checks if there is an array primvar directly on the USD primitive.
- [usd_isattrib](/en/houdini-vex/usd/usd_isattrib)
 Checks if the primitive has an attribute by the given name.
- [usd_iscollection](/en/houdini-vex/usd/usd_iscollection)
 Checks if the collection exists.
- [usd_iscollectionpath](/en/houdini-vex/usd/usd_iscollectionpath)
 Checks if the path is a valid collection path.
- [usd_isindexediprimvar](/en/houdini-vex/usd/usd_isindexediprimvar)
 Checks if there is an indexed primvar directly on the USD primitive or on USD primitive’s ancestor.
- [usd_isindexedprimvar](/en/houdini-vex/usd/usd_isindexedprimvar)
 Checks if there is an indexed primvar directly on the USD primitive.
- [usd_isinstance](/en/houdini-vex/usd/usd_isinstance)
 Checks if the primitive is an instance.
- [usd_isiprimvar](/en/houdini-vex/usd/usd_isiprimvar)
 Checks if the primitive or its ancestor has a primvar of the given name.
- [usd_iskind](/en/houdini-vex/usd/usd_iskind)
 Checks if the primitive is of a given kind.
- [usd_ismetadata](/en/houdini-vex/usd/usd_ismetadata)
 Checks if the primitive has metadata by the given name.
- [usd_ismodel](/en/houdini-vex/usd/usd_ismodel)
 Checks if the primitive is a model.
- [usd_isprim](/en/houdini-vex/usd/usd_isprim)
 Checks if the path refers to a valid primitive.
- [usd_isprimvar](/en/houdini-vex/usd/usd_isprimvar)
 Checks if the primitive has a primvar of the given name.
- [usd_isrelationship](/en/houdini-vex/usd/usd_isrelationship)
 Checks if the primitive has a relationship by the given name.
- [usd_isstage](/en/houdini-vex/usd/usd_isstage)
 Checks if the stage is valid.
- [usd_istransformreset](/en/houdini-vex/usd/usd_istransformreset)
 Checks if the primitive transform is reset
- [usd_istype](/en/houdini-vex/usd/usd_istype)
 Checks if the primitive is of a given type.
- [usd_isvisible](/en/houdini-vex/usd/usd_isvisible)
 Checks if the primitive is visible.
- [usd_kind](/en/houdini-vex/usd/usd_kind)
 Returns the primitive’s kind.
- [usd_localtransform](/en/houdini-vex/usd/usd_localtransform)
 Obtains the primitive’s local transform
- [usd_makeattribpath](/en/houdini-vex/usd/usd_makeattribpath)
 Constructs an attribute path from a primitive path and an attribute name.
- [usd_makecollectionpath](/en/houdini-vex/usd/usd_makecollectionpath)
 Constructs a collection path from a primitive path and a collection name.
- [usd_makepropertypath](/en/houdini-vex/usd/usd_makepropertypath)
 Constructs an property path from a primitive path and an property name.
- [usd_makerelationshippath](/en/houdini-vex/usd/usd_makerelationshippath)
 Constructs an relationship path from a primitive path and a relationship name.
- [usd_makevalidprimname](/en/houdini-vex/usd/usd_makevalidprimname)
 Forces a string to conform to the rules for naming USD primitives.
- [usd_makevalidprimpath](/en/houdini-vex/usd/usd_makevalidprimpath)
 Forces a string to conform to the rules for paths to USD primitives.
- [usd_metadata](/en/houdini-vex/usd/usd_metadata)
 Reads the value of metadata from the USD object.
- [usd_metadataelement](/en/houdini-vex/usd/usd_metadataelement)
 Reads the value of an element from the array metadata.
- [usd_metadatalen](/en/houdini-vex/usd/usd_metadatalen)
 Returns the length of the array metadata.
- [usd_metadatanames](/en/houdini-vex/usd/usd_metadatanames)
 Returns the names of the metadata available on the object.
- [usd_name](/en/houdini-vex/usd/usd_name)
 Returns the name of the primitive.
- [usd_parentpath](/en/houdini-vex/usd/usd_parentpath)
 Returns the path of the primitive’s parent.
- [usd_pointinstance_getbbox](/en/houdini-vex/usd/usd_pointinstance_getbbox)
 Sets two vectors to the minimum and maximum corners of the bounding box for the given instance inside point instancer.
- [usd_pointinstance_getbbox_center](/en/houdini-vex/usd/usd_pointinstance_getbbox_center)
 Returns the center of the bounding box for the instance inside a point instancer primitive.
- [usd_pointinstance_getbbox_max](/en/houdini-vex/usd/usd_pointinstance_getbbox_max)
 Returns the maximum position of the bounding box for the instance inside a point instancer primitive.
- [usd_pointinstance_getbbox_min](/en/houdini-vex/usd/usd_pointinstance_getbbox_min)
 Returns the minimum position of the bounding box for the instance inside a point instancer primitive.
- [usd_pointinstance_getbbox_size](/en/houdini-vex/usd/usd_pointinstance_getbbox_size)
 Returns the size of the bounding box for the instance inside a point instancer primitive.
- [usd_pointinstance_relbbox](/en/houdini-vex/usd/usd_pointinstance_relbbox)
 Returns the relative position of the point given with respect to the bounding box of the geometry.
- [usd_pointinstancetransform](/en/houdini-vex/usd/usd_pointinstancetransform)
 Obtains the transform for the given point instance
- [usd_primvar](/en/houdini-vex/usd/usd_primvar)
 Reads the value of a primvar directly from the USD primitive.
- [usd_primvarattribname](/en/houdini-vex/usd/usd_primvarattribname)
 Returns the namespaced attribute name for the given primvar.
- [usd_primvarelement](/en/houdini-vex/usd/usd_primvarelement)
 Reads the value of an element from the array primvar directly from the USD primitive.
- [usd_primvarelementsize](/en/houdini-vex/usd/usd_primvarelementsize)
 Returns the element size of the primvar directly from the USD primitive.
- [usd_primvarindices](/en/houdini-vex/usd/usd_primvarindices)
 Returns the index array of an indexed primvar directly on the USD primitive.
- [usd_primvarinterpolation](/en/houdini-vex/usd/usd_primvarinterpolation)
 Returns the element size of the primvar directly on the USD primitive.
- [usd_primvarlen](/en/houdini-vex/usd/usd_primvarlen)
 Returns the length of the array primvar directly on the USD primitive.
- [usd_primvarnames](/en/houdini-vex/usd/usd_primvarnames)
 Returns the names of the primvars available on the given USD primitive.
- [usd_primvarsize](/en/houdini-vex/usd/usd_primvarsize)
 Returns the tuple size of the primvar directly on the USD primitive.
- [usd_primvartimesamples](/en/houdini-vex/usd/usd_primvartimesamples)
 Returns the time codes at which the primvar values are authored directly on
 the given primitive.
- [usd_primvartypename](/en/houdini-vex/usd/usd_primvartypename)
 Returns the name of the primvar type found on the given primitive.
- [usd_purpose](/en/houdini-vex/usd/usd_purpose)
 Returns the primitive’s purpose.
- [usd_relationshipforwardedtargets](/en/houdini-vex/usd/usd_relationshipforwardedtargets)
 Obtains the relationship forwarded targets.
- [usd_relationshipnames](/en/houdini-vex/usd/usd_relationshipnames)
 Returns the names of the relationships available on the primitive.
- [usd_relationshiptargets](/en/houdini-vex/usd/usd_relationshiptargets)
 Obtains the relationship targets.
- [usd_relbbox](/en/houdini-vex/usd/usd_relbbox)
 Returns the relative position of the point given with respect to the bounding box of the geometry.
- [usd_removerelationshiptarget](/en/houdini-vex/usd/usd_removerelationshiptarget)
 Remove a target from the primitive’s relationship
- [usd_setactive](/en/houdini-vex/usd/usd_setactive)
 Sets the primitive active state.
- [usd_setattrib](/en/houdini-vex/usd/usd_setattrib)
 Sets the value of an attribute.
- [usd_setattribelement](/en/houdini-vex/usd/usd_setattribelement)
 Sets the value of an element in an array attribute.
- [usd_setcollectionexcludes](/en/houdini-vex/usd/usd_setcollectionexcludes)
 Sets the excludes list on the collection
- [usd_setcollectionexpansionrule](/en/houdini-vex/usd/usd_setcollectionexpansionrule)
 Sets the expansion rule on the collection
- [usd_setcollectionincludes](/en/houdini-vex/usd/usd_setcollectionincludes)
 Sets the includes list on the collection
- [usd_setdrawmode](/en/houdini-vex/usd/usd_setdrawmode)
 Sets the primitive’s draw mode.
- [usd_setkind](/en/houdini-vex/usd/usd_setkind)
 Sets the primitive’s kind.
- [usd_setmetadata](/en/houdini-vex/usd/usd_setmetadata)
 Sets the value of an metadata.
- [usd_setmetadataelement](/en/houdini-vex/usd/usd_setmetadataelement)
 Sets the value of an element in an array metadata.
- [usd_setprimvar](/en/houdini-vex/usd/usd_setprimvar)
 Sets the value of a primvar.
- [usd_setprimvarelement](/en/houdini-vex/usd/usd_setprimvarelement)
 Sets the value of an element in an array primvar.
- [usd_setprimvarelementsize](/en/houdini-vex/usd/usd_setprimvarelementsize)
 Sets the element size of a primvar.
- [usd_setprimvarindices](/en/houdini-vex/usd/usd_setprimvarindices)
 Sets the indices for the given primvar.
- [usd_setprimvarinterpolation](/en/houdini-vex/usd/usd_setprimvarinterpolation)
 Sets the interpolation of a primvar.
- [usd_setpurpose](/en/houdini-vex/usd/usd_setpurpose)
 Sets the primitive’s purpose.
- [usd_setrelationshiptargets](/en/houdini-vex/usd/usd_setrelationshiptargets)
 Sets the targets in the primitive’s relationship
- [usd_settransformorder](/en/houdini-vex/usd/usd_settransformorder)
 Sets the primitive’s transform order
- [usd_settransformreset](/en/houdini-vex/usd/usd_settransformreset)
 Sets/clears the primitive’s transform reset flag
- [usd_setvariantselection](/en/houdini-vex/usd/usd_setvariantselection)
 Sets the selected variant in the given variant set.
- [usd_setvisibility](/en/houdini-vex/usd/usd_setvisibility)
 Configures the primitive to be visible, invisible, or to inherit visibility
 from the parent.
- [usd_setvisible](/en/houdini-vex/usd/usd_setvisible)
 Makes the primitive visible or invisible.
- [usd_specifier](/en/houdini-vex/usd/usd_specifier)
 Returns the primitive’s specifier.
- [usd_transformname](/en/houdini-vex/usd/usd_transformname)
 Constructs a full name of a transform operation
- [usd_transformorder](/en/houdini-vex/usd/usd_transformorder)
 Obtains the primitive’s transform order
- [usd_transformsuffix](/en/houdini-vex/usd/usd_transformsuffix)
 Extracts the transform operation suffix from the full name
- [usd_transformtype](/en/houdini-vex/usd/usd_transformtype)
 Infers the transform operation type from the full name
- [usd_typename](/en/houdini-vex/usd/usd_typename)
 Returns the name of the primitive’s type.
- [usd_uniquetransformname](/en/houdini-vex/usd/usd_uniquetransformname)
 Constructs a unique full name of a transform operation
- [usd_variants](/en/houdini-vex/usd/usd_variants)
 Returns the variants belonging to the given variant set on a primitive.
- [usd_variantselection](/en/houdini-vex/usd/usd_variantselection)
 Returns the currently selected variant in a given variant set.
- [usd_variantsets](/en/houdini-vex/usd/usd_variantsets)
 Returns the variant sets available on a primitive.
- [usd_worldtransform](/en/houdini-vex/usd/usd_worldtransform)
 Obtains the primitive’s world transform

Utility

## utility_group

- [assert_enabled](/en/houdini-vex/utility/assert_enabled)
 Returns 1 if the VEX assertions are enabled (see HOUDINI_VEX_ASSERT) or 0 if assertions are disabled. Used the implement the assert macro.
- [assign](/en/houdini-vex/utility/assign)
 An efficient way of extracting the components of a vector or matrix into float variables.
- [error](/en/houdini-vex/utility/error)
 Reports a custom runtime VEX error.
- [forpoints](/en/houdini-vex/utility/forpoints)
- [getcomp](/en/houdini-vex/utility/getcomp)
 Extracts a single component of a vector type, matrix type, or array.
- [isbound](/en/houdini-vex/utility/isbound)
 Parameters in VEX can be overridden by geometry attributes (if the attributes exist on the surface being rendered).
- [isvarying](/en/houdini-vex/utility/isvarying)
 Check whether a VEX variable is varying or uniform.
- [opend](/en/houdini-vex/utility/opend)
 Ends a long operation.
- [opstart](/en/houdini-vex/utility/opstart)
 Start a long operation.
- [pack_inttosafefloat](/en/houdini-vex/utility/pack_inttosafefloat)
 Reversibly packs an integer into a finite, non-denormal float.
- [print_once](/en/houdini-vex/utility/print_once)
 Prints a message only once, even in a loop.
- [printf](/en/houdini-vex/utility/printf)
 Prints values to the console which started the VEX program.
- [ramp_lookup](/en/houdini-vex/utility/ramp_lookup)
 Evaluates a Houdini-style ramp at a specific location.
- [ramp_pack](/en/houdini-vex/utility/ramp_pack)
 Packs a set of arrays into a string-encoded ramp.
- [ramp_unpack](/en/houdini-vex/utility/ramp_unpack)
 Unpacks a string-encoded ramp into a set of arrays.
- [select](/en/houdini-vex/utility/select)
 Returns one of two parameters based on a conditional.
- [set](/en/houdini-vex/utility/set)
 Creates a new value based on its arguments, such as creating a vector from its components.
- [setcomp](/en/houdini-vex/utility/setcomp)
 Sets a single component of a vector or matrix type, or an item in an array.
- [sleep](/en/houdini-vex/utility/sleep)
 Yields processing for a certain number of milliseconds.
- [swizzle](/en/houdini-vex/utility/swizzle)
 Rearranges the components of a vector.
- [unpack_intfromsafefloat](/en/houdini-vex/utility/unpack_intfromsafefloat)
 Reverses the packing of pack_inttosafefloat to get back the original integer.
- [warning](/en/houdini-vex/utility/warning)
 Reports a custom runtime VEX warning.

volume

## volume_group

- [volume](/en/houdini-vex/volume/volume)
 Returns the volume of the microvoxel containing a variable such as P.
- [volumecubicsample](/en/houdini-vex/volume/volumecubicsample)
 Samples the volume primitive’s value.
- [volumecubicsamplev](/en/houdini-vex/volume/volumecubicsamplev)
 Samples the volume primitive’s value.
- [volumegradient](/en/houdini-vex/volume/volumegradient)
 Calculates the volume primitive’s gradient.
- [volumeindex](/en/houdini-vex/volume/volumeindex)
 Gets the value of a specific voxel.
- [volumeindexactive](/en/houdini-vex/volume/volumeindexactive)
 Gets the active setting of a specific voxel.
- [volumeindexi](/en/houdini-vex/volume/volumeindexi)
 Gets the integer value of a specific voxel.
- [volumeindexorigin](/en/houdini-vex/volume/volumeindexorigin)
 Gets the index of the bottom left of a volume primitive.
- [volumeindexp](/en/houdini-vex/volume/volumeindexp)
 Gets the vector4 value of a specific voxel.
- [volumeindextopos](/en/houdini-vex/volume/volumeindextopos)
 Converts a volume voxel index into a position.
- [volumeindexu](/en/houdini-vex/volume/volumeindexu)
 Gets the vector2 value of a specific voxel.
- [volumeindexv](/en/houdini-vex/volume/volumeindexv)
 Gets the vector value of a specific voxel.
- [volumepostoindex](/en/houdini-vex/volume/volumepostoindex)
 Converts a position into a volume voxel index.
- [volumeres](/en/houdini-vex/volume/volumeres)
 Gets the resolution of a volume primitive.
- [volumesample](/en/houdini-vex/volume/volumesample)
 Samples the volume primitive’s float value.
- [volumesamplei](/en/houdini-vex/volume/volumesamplei)
 Samples the volume primitive’s integer value.
- [volumesamplep](/en/houdini-vex/volume/volumesamplep)
 Samples the volume primitive’s vector4 value.
- [volumesampleu](/en/houdini-vex/volume/volumesampleu)
 Samples the volume primitive’s vector2 value.
- [volumesamplev](/en/houdini-vex/volume/volumesamplev)
 Samples the volume primitive’s vector value.
- [volumesmoothsample](/en/houdini-vex/volume/volumesmoothsample)
 Samples the volume primitive’s value.
- [volumesmoothsamplev](/en/houdini-vex/volume/volumesmoothsamplev)
 Samples the volume primitive’s value.
- [volumetypeid](/en/houdini-vex/volume/volumetypeid)
 Gets the typeid of the data of a volume or VDB primitive.
- [volumevoxeldiameter](/en/houdini-vex/volume/volumevoxeldiameter)
 Computes the approximate diameter of a voxel.

weightarray

## weightarray_group

- [weightarrayblend](/en/houdini-vex/weightarray/weightarrayblend)
 Blends an existing name/weight array pair with another array or named item.
- [weightarrayfromname](/en/houdini-vex/weightarray/weightarrayfromname)
 Initializes an index array and weight array pair with a single named entry.
- [weightarraynormalize](/en/houdini-vex/weightarray/weightarraynormalize)
 Normalizes an array of floats so it sums to 1.0.
- [weightarraythreshold](/en/houdini-vex/weightarray/weightarraythreshold)
 Discards any weights below a threshold from an name/weight array pair.
