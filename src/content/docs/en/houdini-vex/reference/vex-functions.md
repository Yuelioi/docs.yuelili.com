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

- [append](../arrays/append)
  Adds an item to an array or string.
- [argsort](../arrays/argsort)
  Returns the indices of a sorted version of an array.
- [array](../arrays/array)
  Efficiently creates an array from its arguments.
- [foreach](../arrays/foreach)
  Loops over the items in an array, with optional enumeration.
- [insert](../arrays/insert)
  Inserts an item, array, or string into an array or string.
- [isvalidindex](../arrays/isvalidindex)
  Checks if the index given is valid for the array or string given.
- [len](../arrays/len)
  Returns the length of an array.
- [pop](../arrays/pop)
  Removes the last element of an array and returns it.
- [push](../arrays/push)
  Adds an item to an array.
- [removeindex](../arrays/removeindex)
  Removes an item at the given index from an array.
- [removevalue](../arrays/removevalue)
  Removes an item from an array.
- [reorder](../arrays/reorder)
  Reorders items in an array or string.
- [resize](../arrays/resize)
  Sets the length of an array.
- [reverse](../arrays/reverse)
  Returns an array or string in reverse order.
- [slice](../arrays/slice)
  Slices a sub-string or sub-array of a string or array.
- [sort](../arrays/sort)
  Returns the array sorted in increasing order.
- [upush](../arrays/upush)
  Adds a uniform item to an array.

Attributes and Intrinsics

## attrib_group

- [addattrib](../attributes-and-intrinsics/addattrib)
  Adds an attribute to a geometry.
- [adddetailattrib](../attributes-and-intrinsics/adddetailattrib)
  Adds a detail attribute to a geometry.
- [addpointattrib](../attributes-and-intrinsics/addpointattrib)
  Adds a point attribute to a geometry.
- [addprimattrib](../attributes-and-intrinsics/addprimattrib)
  Adds a primitive attribute to a geometry.
- [addvertexattrib](../attributes-and-intrinsics/addvertexattrib)
  Adds a vertex attribute to a geometry.
- [addvisualizer](../attributes-and-intrinsics/addvisualizer)
  Appends to a geometry’s visualizer detail attribute.
- [attrib](../attributes-and-intrinsics/attrib)
  Reads the value of an attribute from geometry.
- [attribclass](../attributes-and-intrinsics/attribclass)
  Returns the class of a geometry attribute.
- [attribdataid](../attributes-and-intrinsics/attribdataid)
  Returns the data id of a geometry attribute.
- [attribsize](../attributes-and-intrinsics/attribsize)
  Returns the size of a geometry attribute.
- [attribtype](../attributes-and-intrinsics/attribtype)
  Returns the type of a geometry attribute.
- [attribtypeinfo](../attributes-and-intrinsics/attribtypeinfo)
  Returns the transformation metadata of a geometry attribute.
- [curvearclen](../attributes-and-intrinsics/curvearclen)
  Evaluates the length of an arc on a primitive defined by an array of points using parametric uv coordinates.
- [detail](../attributes-and-intrinsics/detail)
  Reads the value of a detail attribute value from a geometry.
- [detailattrib](../attributes-and-intrinsics/detailattrib)
  Reads a detail attribute value from a geometry.
- [detailattribsize](../attributes-and-intrinsics/detailattribsize)
  Returns the size of a geometry detail attribute.
- [detailattribtype](../attributes-and-intrinsics/detailattribtype)
  Returns the type of a geometry detail attribute.
- [detailattribtypeinfo](../attributes-and-intrinsics/detailattribtypeinfo)
  Returns the type info of a geometry attribute.
- [detailintrinsic](../attributes-and-intrinsics/detailintrinsic)
  Reads the value of a detail intrinsic from a geometry.
- [findattribval](../attributes-and-intrinsics/findattribval)
  Finds a primitive/point/vertex that has a certain attribute value.
- [findattribvalcount](../attributes-and-intrinsics/findattribvalcount)
  Returns number of elements where an integer or string attribute has a certain value.
- [getattrib](../attributes-and-intrinsics/getattrib)
  Reads an attribute value from geometry, with validity check.
- [getattribute](../attributes-and-intrinsics/getattribute)
  Copies the value of a geometry attribute into a variable and returns a success flag.
- [hasattrib](../attributes-and-intrinsics/hasattrib)
  Checks whether a geometry attribute exists.
- [hasdetailattrib](../attributes-and-intrinsics/hasdetailattrib)
  Returns if a geometry detail attribute exists.
- [haspointattrib](../attributes-and-intrinsics/haspointattrib)
  Returns if a geometry point attribute exists.
- [hasprimattrib](../attributes-and-intrinsics/hasprimattrib)
  Returns if a geometry prim attribute exists.
- [hasvertexattrib](../attributes-and-intrinsics/hasvertexattrib)
  Returns if a geometry vertex attribute exists.
- [idtopoint](../attributes-and-intrinsics/idtopoint)
  Finds a point by its id attribute.
- [idtoprim](../attributes-and-intrinsics/idtoprim)
  Finds a primitive by its id attribute.
- [nametopoint](../attributes-and-intrinsics/nametopoint)
  Finds a point by its name attribute.
- [nametoprim](../attributes-and-intrinsics/nametoprim)
  Finds a primitive by its name attribute.
- [nuniqueval](../attributes-and-intrinsics/nuniqueval)
  Returns the number of unique values from an integer or string attribute.
- [point](../attributes-and-intrinsics/point)
  Reads a point attribute value from a geometry.
- [pointattrib](../attributes-and-intrinsics/pointattrib)
  Reads a point attribute value from a geometry and outputs a success/fail flag.
- [pointattribsize](../attributes-and-intrinsics/pointattribsize)
  Returns the size of a geometry point attribute.
- [pointattribtype](../attributes-and-intrinsics/pointattribtype)
  Returns the type of a geometry point attribute.
- [pointattribtypeinfo](../attributes-and-intrinsics/pointattribtypeinfo)
  Returns the type info of a geometry attribute.
- [pointlocaltransforms](../attributes-and-intrinsics/pointlocaltransforms)
  Returns an array of point localtransforms from an array of point indices.
- [pointtransform](../attributes-and-intrinsics/pointtransform)
  Returns a point transform from a point index.
- [pointtransformrigid](../attributes-and-intrinsics/pointtransformrigid)
  Returns a rigid point transform from a point index.
- [pointtransforms](../attributes-and-intrinsics/pointtransforms)
  Returns an array of point transforms from an array of point indices.
- [pointtransformsrigid](../attributes-and-intrinsics/pointtransformsrigid)
  Returns an array of rigid point transforms from an array of point indices.
- [prim](../attributes-and-intrinsics/prim)
  Reads a primitive attribute value from a geometry.
- [prim_attribute](../attributes-and-intrinsics/prim_attribute)
  Interpolates the value of an attribute at a certain parametric (u, v) position and copies it into a variable.
- [primarclen](../attributes-and-intrinsics/primarclen)
  Evaluates the length of an arc on a primitive using parametric uv coordinates.
- [primattrib](../attributes-and-intrinsics/primattrib)
  Reads a primitive attribute value from a geometry, outputting a success flag.
- [primattribsize](../attributes-and-intrinsics/primattribsize)
  Returns the size of a geometry prim attribute.
- [primattribtype](../attributes-and-intrinsics/primattribtype)
  Returns the type of a geometry prim attribute.
- [primattribtypeinfo](../attributes-and-intrinsics/primattribtypeinfo)
  Returns the type info of a geometry attribute.
- [primduv](../attributes-and-intrinsics/primduv)
  Returns position derivative on a primitive at a certain parametric (u, v) position.
- [priminteriorweights](../attributes-and-intrinsics/priminteriorweights)
  Finds the indices and weightings of the vertices that will compute an
  interior point given the UVW coordinates.
- [primintrinsic](../attributes-and-intrinsics/primintrinsic)
  Reads a primitive intrinsic from a geometry.
- [primuv](../attributes-and-intrinsics/primuv)
  Interpolates the value of an attribute at a certain parametric (uvw) position.
- [primuvconvert](../attributes-and-intrinsics/primuvconvert)
  Convert parametric UV locations on curve primitives between different spaces.
- [removedetailattrib](../attributes-and-intrinsics/removedetailattrib)
  Removes a detail attribute from a geometry.
- [removepointattrib](../attributes-and-intrinsics/removepointattrib)
  Removes a point attribute from a geometry.
- [removepointgroup](../attributes-and-intrinsics/removepointgroup)
  Removes a point group from a geometry.
- [removeprimattrib](../attributes-and-intrinsics/removeprimattrib)
  Removes a primitive attribute from a geometry.
- [removeprimgroup](../attributes-and-intrinsics/removeprimgroup)
  Removes a primitive group from a geometry.
- [removevertexattrib](../attributes-and-intrinsics/removevertexattrib)
  Removes a vertex attribute from a geometry.
- [removevertexgroup](../attributes-and-intrinsics/removevertexgroup)
  Removes a vertex group from a geometry.
- [setattrib](../attributes-and-intrinsics/setattrib)
  Writes an attribute value to geometry.
- [setattribtypeinfo](../attributes-and-intrinsics/setattribtypeinfo)
  Sets the meaning of an attribute in geometry.
- [setdetailattrib](../attributes-and-intrinsics/setdetailattrib)
  Sets a detail attribute in a geometry.
- [setdetailintrinsic](../attributes-and-intrinsics/setdetailintrinsic)
  Sets the value of a writeable detail intrinsic attribute.
- [setpointattrib](../attributes-and-intrinsics/setpointattrib)
  Sets a point attribute in a geometry.
- [setpointlocaltransforms](../attributes-and-intrinsics/setpointlocaltransforms)
  Sets an array of point local transforms at the given point indices.
- [setpointtransform](../attributes-and-intrinsics/setpointtransform)
  Sets the world space transform of a given point
- [setpointtransforms](../attributes-and-intrinsics/setpointtransforms)
  Sets an array of point transforms at the given point indices.
- [setprimattrib](../attributes-and-intrinsics/setprimattrib)
  Sets a primitive attribute in a geometry.
- [setprimintrinsic](../attributes-and-intrinsics/setprimintrinsic)
  Sets the value of a writeable primitive intrinsic attribute.
- [setvertexattrib](../attributes-and-intrinsics/setvertexattrib)
  Sets a vertex attribute in a geometry.
- [uniqueval](../attributes-and-intrinsics/uniqueval)
  Returns one of the set of unique values across all values for an int or string attribute.
- [uniquevals](../attributes-and-intrinsics/uniquevals)
  Returns the set of unique values across all values for an int or string attribute.
- [uvsample](../attributes-and-intrinsics/uvsample)
  Interpolates the value of an attribute at certain UV coordinates using a UV attribute.
- [vertex](../attributes-and-intrinsics/vertex)
  Reads a vertex attribute value from a geometry.
- [vertexattrib](../attributes-and-intrinsics/vertexattrib)
  Reads a vertex attribute value from a geometry.
- [vertexattribsize](../attributes-and-intrinsics/vertexattribsize)
  Returns the size of a geometry vertex attribute.
- [vertexattribtype](../attributes-and-intrinsics/vertexattribtype)
  Returns the type of a geometry vertex attribute.
- [vertexattribtypeinfo](../attributes-and-intrinsics/vertexattribtypeinfo)
  Returns the type info of a geometry attribute.

BSDFs

## bsdf_group

- [albedo](../bsdfs/albedo)
  Returns the albedo (percentage of reflected light) for a bsdf given the outgoing light direction.
- [ashikhmin](../bsdfs/ashikhmin)
  Returns a specular BSDF using the Ashikhmin shading model.
- [blinn](../bsdfs/blinn)
  Returns a Blinn BSDF or computes Blinn shading.
- [chiang](../bsdfs/chiang)
  Returns a chiang BSDF.
- [chiang_fur](../bsdfs/chiang_fur)
  Returns a chiang_fur BSDF.
- [cone](../bsdfs/cone)
  Returns a cone reflection BSDF.
- [cvex_bsdf](../bsdfs/cvex_bsdf)
  Creates a bsdf object from two CVEX shader strings.
- [diffuse](../bsdfs/diffuse)
  Returns a diffuse BSDF or computes diffuse shading.
- [eval_bsdf](../bsdfs/eval_bsdf)
  Evaluates a bsdf given two vectors.
- [getbounces](../bsdfs/getbounces)
- [ggx](../bsdfs/ggx)
  Returns a ggx BSDF.
- [hair](../bsdfs/hair)
  Returns a BSDF for shading hair.
- [henyeygreenstein](../bsdfs/henyeygreenstein)
  Returns an anisotropic volumetric BSDF, which can scatter light forward or backward.
- [isotropic](../bsdfs/isotropic)
  Returns an isotropic BSDF, which scatters light equally in all directions.
- [mask_bsdf](../bsdfs/mask_bsdf)
  Returns new BSDF that only includes the components specified by the mask.
- [normal_bsdf](../bsdfs/normal_bsdf)
  Returns the normal for the diffuse component of a BSDF.
- [phong](../bsdfs/phong)
  Returns a Phong BSDF or computes Phong shading.
- [phonglobe](../bsdfs/phonglobe)
- [sample_bsdf](../bsdfs/sample_bsdf)
  Samples a BSDF.
- [solid_angle](../bsdfs/solid_angle)
  Computes the solid angle (in steradians) a BSDF function subtends.
- [split_bsdf](../bsdfs/split_bsdf)
  Splits a bsdf into its component lobes.
- [sssapprox](../bsdfs/sssapprox)
  Creates an approximate SSS BSDF.

BSDFs

## BSDFs_group

- [specular](../bsdfs/specular)
  Returns a specular BSDF or computes specular shading.

CHOP

## CHOP_group

- [chadd](../chop/chadd)
  Adds new channels to a CHOP node.
- [chattr](../chop/chattr)
  Reads from a CHOP attribute.
- [chattrnames](../chop/chattrnames)
  Reads CHOP attribute names of a given attribute class from a CHOP input.
- [chend](../chop/chend)
  Returns the sample number of the last sample in a given CHOP input.
- [chendf](../chop/chendf)
  Returns the frame corresponding to the last sample of the input specified.
- [chendt](../chop/chendt)
  Returns the time corresponding to the last sample of the input
  specified.
- [chindex](../chop/chindex)
  Returns the channel index from a input given a channel name.
- [chinput](../chop/chinput)
  Returns the value of a channel at the specified sample.
- [chinputlimits](../chop/chinputlimits)
  Computes the minimum and maximum value of samples in an input channel.
- [chnames](../chop/chnames)
  Returns all the CHOP channel names of a given CHOP input.
- [chnumchan](../chop/chnumchan)
  Returns the number of channels in the input specified.
- [chop](../chop/chop)
  Returns the value of a CHOP channel at the specified sample.
- [choplocal](../chop/choplocal)
  Returns the value of a CHOP local transform channel at the specified sample.
- [choplocalt](../chop/choplocalt)
  Returns the value of a CHOP local transform channel at the specified sample and evaluation time.
- [chopt](../chop/chopt)
  Returns the value of a CHOP channel at the specified sample and evaluation time.
- [chrate](../chop/chrate)
  Returns the sample rate of the input specified.
- [chreadbuf](../chop/chreadbuf)
  Returns the value of CHOP context temporary buffer at the specified index.
- [chremove](../chop/chremove)
  Removes channels from a CHOP node.
- [chremoveattr](../chop/chremoveattr)
  Removes a CHOP attribute.
- [chrename](../chop/chrename)
  Renames a CHOP channel.
- [chresizebuf](../chop/chresizebuf)
  Resize the CHOP context temporary buffer
- [chsetattr](../chop/chsetattr)
  Sets the value of a CHOP attribute.
- [chsetlength](../chop/chsetlength)
  Sets the length of the CHOP channel data.
- [chsetrate](../chop/chsetrate)
  Sets the sampling rate of the CHOP channel data.
- [chsetstart](../chop/chsetstart)
  Sets the CHOP start sample in the channel data.
- [chstart](../chop/chstart)
  Returns the start sample of the input specified.
- [chstartf](../chop/chstartf)
  Returns the frame corresponding to the first sample of the input
  specified.
- [chstartt](../chop/chstartt)
  Returns the time corresponding to the first sample of the input
  specified.
- [chwritebuf](../chop/chwritebuf)
  Writes a value of CHOP context temporary buffer at the specified index.
- [isframes](../chop/isframes)
  Returns 1 if the Vex CHOP’s Unit Menu is currently set to 'frames', 0
  otherwise.
- [issamples](../chop/issamples)
  Returns 1 if the Vex CHOP’s Unit Menu is currently set to 'samples',
  0 otherwise.
- [isseconds](../chop/isseconds)
  Returns 1 if the Vex CHOP’s Unit Menu is currently set to 'seconds',
  0 otherwise.
- [ninputs](../chop/ninputs)
  Returns the number of inputs.

Channel Primitives

## chprim_group

- [chprim_clear](../channel-primitives/chprim_clear)
  Clears a channel primitive, removing all keys.
- [chprim_destroykey](../channel-primitives/chprim_destroykey)
  Destroy an existing key from a channel primitive.
- [chprim_end](../channel-primitives/chprim_end)
  Get the end time of a channel primitive.
- [chprim_eval](../channel-primitives/chprim_eval)
  Evaluate a channel primitive at the given time.
- [chprim_insertkey](../channel-primitives/chprim_insertkey)
  Insert a key into a channel primitive.
- [chprim_keycount](../channel-primitives/chprim_keycount)
  Get the number of keys in a channel primitive.
- [chprim_keytimes](../channel-primitives/chprim_keytimes)
  Get the key times of a channel primitive.
- [chprim_keyvalues](../channel-primitives/chprim_keyvalues)
  Get the key values of a channel primitive.
- [chprim_length](../channel-primitives/chprim_length)
  Get the length of a channel primitive.
- [chprim_setkeyaccel](../channel-primitives/chprim_setkeyaccel)
  Set the acceleration of a channel primitive key.
- [chprim_setkeyslope](../channel-primitives/chprim_setkeyslope)
  Set the slope of a channel primitive key.
- [chprim_setkeyvalue](../channel-primitives/chprim_setkeyvalue)
  Set the value of a channel primitive key.
- [chprim_start](../channel-primitives/chprim_start)
  Get the start time of a channel primitive.

color

## color_group

- [blackbody](../color/blackbody)
  Compute the color value of an incandescent black body.
- [ctransform](../color/ctransform)
  Transforms between color spaces.
- [luminance](../color/luminance)
  Compute the luminance of the RGB color specified by the parameters.

Conversion

## convert_group

- [atof](../conversion/atof)
  Converts a string to a float.
- [atoi](../conversion/atoi)
  Converts a string to an integer.
- [cracktransform](../conversion/cracktransform)
  Depending on the value of c, returns the translate (c=0), rotate
  (c=1), scale (c=2), or shears (c=3) component of the transform (xform).
- [degrees](../conversion/degrees)
  Converts the argument from radians into degrees.
- [eulertoquaternion](../conversion/eulertoquaternion)
  Creates a vector4 representing a quaternion from euler angles.
- [hsvtorgb](../conversion/hsvtorgb)
  Convert HSV color space into RGB color space.
- [qconvert](../conversion/qconvert)
  Converts a quaternion represented by a vector4 to a matrix3 representation.
- [quaterniontoeuler](../conversion/quaterniontoeuler)
  Creates a euler angle representing a quaternion.
- [radians](../conversion/radians)
  Converts the argument from degrees into radians.
- [rgbtohsv](../conversion/rgbtohsv)
  Convert RGB color space to HSV color space.
- [rgbtoxyz](../conversion/rgbtoxyz)
  Convert a linear sRGB triplet to CIE XYZ tristimulus values.
- [serialize](../conversion/serialize)
  Flattens an array of vector or matrix types into an array of floats.
- [unserialize](../conversion/unserialize)
  Turns a flat array of floats into an array of vectors or matrices.
- [xyztorgb](../conversion/xyztorgb)
  Convert CIE XYZ tristimulus values to a linear sRGB triplet.

Crowds

## crowd_group

- [agentaddclip](../crowds/agentaddclip)
  Add a clip into an agent’s definition.
- [agentchannelcount](../crowds/agentchannelcount)
  Returns the number of channels in an agent primitive’s rig.
- [agentchannelnames](../crowds/agentchannelnames)
  Returns the names of the channels in an agent primitive’s rig.
- [agentchannelvalue](../crowds/agentchannelvalue)
  Returns the current value of an agent primitive’s channel.
- [agentchannelvalues](../crowds/agentchannelvalues)
  Returns the current values of an agent primitive’s channels.
- [agentclipcatalog](../crowds/agentclipcatalog)
  Returns all of the animation clips that have been loaded for an agent primitive.
- [agentclipchannel](../crowds/agentclipchannel)
  Finds the index of a channel in an agent’s animation clip.
- [agentclipchannelnames](../crowds/agentclipchannelnames)
  Returns the names of the channels in an agent’s animation clip.
- [agentcliplayerblend](../crowds/agentcliplayerblend)
  Blends values according to an agent’s animation layers.
- [agentcliplength](../crowds/agentcliplength)
  Returns the length (in seconds) of an agent’s animation clip.
- [agentclipnames](../crowds/agentclipnames)
  Returns an agent primitive’s current animation clips.
- [agentclipsample](../crowds/agentclipsample)
  Samples a channel of an agent’s clip at a specific time.
- [agentclipsamplelocal](../crowds/agentclipsamplelocal)
  Samples an agent’s animation clip at a specific time.
- [agentclipsamplerate](../crowds/agentclipsamplerate)
  Returns the sample rate of an agent’s animation clip.
- [agentclipsampleworld](../crowds/agentclipsampleworld)
  Samples an agent’s animation clip at a specific time.
- [agentclipstarttime](../crowds/agentclipstarttime)
  Returns the start time (in seconds) of an agent’s animation clip.
- [agentcliptimes](../crowds/agentcliptimes)
  Returns the current times for an agent primitive’s animation clips.
- [agentcliptransformgroups](../crowds/agentcliptransformgroups)
  Returns the transform groups for an agent primitive’s current animation clips.
- [agentclipweights](../crowds/agentclipweights)
  Returns the blend weights for an agent primitive’s animation clips.
- [agentcollisionlayer](../crowds/agentcollisionlayer)
  Returns the name of the collision layer of an agent primitive.
- [agentcollisionlayers](../crowds/agentcollisionlayers)
  Returns the names of an agent primitive’s collision layers.
- [agentcurrentlayer](../crowds/agentcurrentlayer)
  Returns the name of the current layer of an agent primitive.
- [agentcurrentlayers](../crowds/agentcurrentlayers)
  Returns the names of an agent primitive’s current layers.
- [agentfindclip](../crowds/agentfindclip)
  Finds the index of a clip in an agent’s definition.
- [agentfindlayer](../crowds/agentfindlayer)
  Finds the index of a layer in an agent’s definition.
- [agentfindtransformgroup](../crowds/agentfindtransformgroup)
  Finds the index of a transform group in an agent’s definition.
- [agentlayerbindings](../crowds/agentlayerbindings)
  Returns the transform that each shape in an agent’s layer is bound to.
- [agentlayers](../crowds/agentlayers)
  Returns all of the layers that have been loaded for an agent primitive.
- [agentlayershapes](../crowds/agentlayershapes)
  Returns the names of the shapes referenced by an agent primitive’s layer.
- [agentlocaltransform](../crowds/agentlocaltransform)
  Returns the current local space transform of an agent primitive’s bone.
- [agentlocaltransforms](../crowds/agentlocaltransforms)
  Returns the current local space transforms of an agent primitive.
- [agentmetadata](../crowds/agentmetadata)
  Returns the agent definition’s metadata dictionary.
- [agentrestlocaltransform](../crowds/agentrestlocaltransform)
  Returns the local space rest transform for an agent primitive’s joint.
- [agentrestworldtransform](../crowds/agentrestworldtransform)
  Returns the world space rest transform for an agent primitive’s joint.
- [agentrigchildren](../crowds/agentrigchildren)
  Returns the child transforms of a transform in an agent primitive’s rig.
- [agentrigfind](../crowds/agentrigfind)
  Finds the index of a transform in an agent primitive’s rig.
- [agentrigfindchannel](../crowds/agentrigfindchannel)
  Finds the index of a channel in an agent primitive’s rig.
- [agentrigparent](../crowds/agentrigparent)
  Returns the parent transform of a transform in an agent primitive’s rig.
- [agentsolvefbik](../crowds/agentsolvefbik)
  Applies a full-body inverse kinematics algorithm to an agent’s skeleton.
- [agenttransformcount](../crowds/agenttransformcount)
  Returns the number of transforms in an agent primitive’s rig.
- [agenttransformgroupmember](../crowds/agenttransformgroupmember)
  Returns whether a transform is a member of the specified transform group.
- [agenttransformgroupmemberchannel](../crowds/agenttransformgroupmemberchannel)
  Returns whether a channel is a member of the specified transform group.
- [agenttransformgroups](../crowds/agenttransformgroups)
  Returns the names of the transform groups in an agent’s definition.
- [agenttransformgroupweight](../crowds/agenttransformgroupweight)
  Returns the weight of a member of the specified transform group.
- [agenttransformnames](../crowds/agenttransformnames)
  Returns the name of each transform in an agent primitive’s rig.
- [agenttransformtolocal](../crowds/agenttransformtolocal)
  Converts transforms from world space to local space for an agent primitive.
- [agenttransformtoworld](../crowds/agenttransformtoworld)
  Converts transforms from local space to world space for an agent primitive.
- [agentworldtransform](../crowds/agentworldtransform)
  Returns the current world space transform of an agent primitive’s bone.
- [agentworldtransforms](../crowds/agentworldtransforms)
  Returns the current world space transforms of an agent primitive.
- [setagentchannelvalue](../crowds/setagentchannelvalue)
  Overrides the value of an agent primitive’s channel.
- [setagentchannelvalues](../crowds/setagentchannelvalues)
  Overrides the values of an agent primitive’s channels.
- [setagentclipnames](../crowds/setagentclipnames)
  Sets the current animation clips for an agent primitive.
- [setagentclips](../crowds/setagentclips)
  Sets the animation clips that an agent should use to compute its transforms.
- [setagentcliptimes](../crowds/setagentcliptimes)
  Sets the current times for an agent primitive’s animation clips.
- [setagentclipweights](../crowds/setagentclipweights)
  Sets the blend weights for an agent primitive’s animation clips.
- [setagentcollisionlayer](../crowds/setagentcollisionlayer)
  Sets the collision layer of an agent primitive.
- [setagentcollisionlayers](../crowds/setagentcollisionlayers)
  Sets the collision layers of an agent primitive.
- [setagentcurrentlayer](../crowds/setagentcurrentlayer)
  Sets the current layer of an agent primitive.
- [setagentcurrentlayers](../crowds/setagentcurrentlayers)
  Sets the current display layers of an agent primitive.
- [setagentlocaltransform](../crowds/setagentlocaltransform)
  Overrides the local space transform of an agent primitive’s bone.
- [setagentlocaltransforms](../crowds/setagentlocaltransforms)
  Overrides the local space transforms of an agent primitive.
- [setagentworldtransform](../crowds/setagentworldtransform)
  Overrides the world space transform of an agent primitive’s bone.
- [setagentworldtransforms](../crowds/setagentworldtransforms)
  Overrides the world space transforms of an agent primitive.

dict

## dict_group

- [json_dumps](../dict/json_dumps)
  Converts a VEX dictionary into a JSON string.
- [json_loads](../dict/json_loads)
  Converts a JSON string into a VEX dictionary.
- [keys](../dict/keys)
  Returns all the keys in a dictionary.
- [typeid](../dict/typeid)
  Returns a numeric code identifying a VEX data type.

displace

## displace_group

- [dimport](../displace/dimport)
  Reads a variable from the displacement shader for the surface.

File I/O

## file_group

- [file_stat](../file-i/file_stat)
  Returns file system status for a given file.

filter

## filter_group

- [filter_remap](../filter/filter_remap)
  Computes an importance sample based on the given filter type and input uv.

Fuzzy Logic

## fuzzy_group

- [fuzzify](../fuzzy-logic/fuzzify)
- [fuzzy_and](../fuzzy-logic/fuzzy_and)
- [fuzzy_defuzz_centroid](../fuzzy-logic/fuzzy_defuzz_centroid)
- [fuzzy_nand](../fuzzy-logic/fuzzy_nand)
- [fuzzy_nor](../fuzzy-logic/fuzzy_nor)
- [fuzzy_not](../fuzzy-logic/fuzzy_not)
- [fuzzy_nxor](../fuzzy-logic/fuzzy_nxor)
- [fuzzy_or](../fuzzy-logic/fuzzy_or)
- [fuzzy_xor](../fuzzy-logic/fuzzy_xor)

Geometry

## geo_group

- [addpoint](../geometry/addpoint)
  Adds a point to the geometry.
- [addprim](../geometry/addprim)
  Adds a primitive to the geometry.
- [addvertex](../geometry/addvertex)
  Adds a vertex to a primitive in a geometry.
- [clip](../geometry/clip)
  Clip the line segment between p0 and p1.
- [geoself](../geometry/geoself)
  Returns a handle to the current geometry.
- [geounwrap](../geometry/geounwrap)
  Returns an oppath: string to unwrap the geometry in-place.
- [inedgegroup](../geometry/inedgegroup)
  Returns 1 if the edge specified by the point pair is in the group specified by the string.
- [intersect](../geometry/intersect)
  This function computes the first intersection of a ray with geometry.
- [intersect_all](../geometry/intersect_all)
  Computes all intersections of the specified ray with geometry.
- [minpos](../geometry/minpos)
  Given a position in world space, returns the position of the closest point on a given geometry.
- [nearpoint](../geometry/nearpoint)
  Finds the closest point in a geometry.
- [nearpoints](../geometry/nearpoints)
  Finds the all the closest point in a geometry.
- [nedgesgroup](../geometry/nedgesgroup)
  Returns the number of edges in the group.
- [neighbour](../geometry/neighbour)
  Returns the point number of the next point connected to a given point.
- [neighbourcount](../geometry/neighbourcount)
  Returns the number of points that are connected to the specified point.
- [neighbours](../geometry/neighbours)
  Returns an array of the point numbers of the neighbours of a point.
- [npoints](../geometry/npoints)
  Returns the number of points in the input or geometry file.
- [nprimitives](../geometry/nprimitives)
  Returns the number of primitives in the input or geometry file.
- [nvertices](../geometry/nvertices)
  Returns the number of vertices in the input or geometry file.
- [nverticesgroup](../geometry/nverticesgroup)
  Returns the number of vertices in the group.
- [pointprims](../geometry/pointprims)
  Returns the list of primitives containing a point.
- [pointvertex](../geometry/pointvertex)
  Returns a linear vertex number of a point in a geometry.
- [pointvertices](../geometry/pointvertices)
  Returns the list of vertices connected to a point.
- [polyneighbours](../geometry/polyneighbours)
  Returns an array of the primitive numbers of the edge-neighbours of a polygon.
- [primfind](../geometry/primfind)
  Returns a list of primitives potentially intersecting a given bounding box.
- [primpoint](../geometry/primpoint)
  Converts a primitive/vertex pair into a point number.
- [primpoints](../geometry/primpoints)
  Returns the list of points on a primitive.
- [primvertex](../geometry/primvertex)
  Converts a primitive/vertex pair into a linear vertex.
- [primvertexcount](../geometry/primvertexcount)
  Returns number of vertices in a primitive in a geometry.
- [primvertices](../geometry/primvertices)
  Returns the list of vertices on a primitive.
- [removeattrib](../geometry/removeattrib)
  Removes an attribute or group from the geometry.
- [removepoint](../geometry/removepoint)
  Removes a point from the geometry.
- [removeprim](../geometry/removeprim)
  Removes a primitive from the geometry.
- [removevertex](../geometry/removevertex)
  Removes a vertex from the geometry.
- [setedgegroup](../geometry/setedgegroup)
  Sets edge group membership in a geometry.
- [setprimvertex](../geometry/setprimvertex)
  Rewires a vertex in the geometry to a different point.
- [setvertexpoint](../geometry/setvertexpoint)
  Rewires a vertex in the geometry to a different point.
- [uvintersect](../geometry/uvintersect)
  This function computes the intersection of the specified ray with the geometry in uv space.
- [vertexcurveparam](../geometry/vertexcurveparam)
  Returns the parametric coordinate of a vertex along the perimeter of
  its primitive.
- [vertexindex](../geometry/vertexindex)
  Converts a primitive/vertex pair into a linear vertex.
- [vertexnext](../geometry/vertexnext)
  Returns the linear vertex number of the next vertex sharing a point with a given vertex.
- [vertexpoint](../geometry/vertexpoint)
  Returns the point number of linear vertex in a geometry.
- [vertexprev](../geometry/vertexprev)
  Returns the linear vertex number of the previous vertex sharing a point with a given vertex.
- [vertexprim](../geometry/vertexprim)
  Returns the number of the primitive containing a given vertex.
- [vertexprimindex](../geometry/vertexprimindex)
  Converts a linear vertex index into a primitive vertex number.

groups

## groups_group

- [expandedgegroup](../groups/expandedgegroup)
- [expandpointgroup](../groups/expandpointgroup)
  Returns an array of point numbers corresponding to a group string.
- [expandprimgroup](../groups/expandprimgroup)
  Returns an array of prim numbers corresponding to a group string.
- [expandvertexgroup](../groups/expandvertexgroup)
  Returns an array of linear vertex numbers corresponding to a group string.
- [inpointgroup](../groups/inpointgroup)
  Returns 1 if the point specified by the point number is in the group specified by the string.
- [inprimgroup](../groups/inprimgroup)
  Returns 1 if the primitive specified by the primitive number is in the group specified by the string.
- [invertexgroup](../groups/invertexgroup)
  Returns 1 if the vertex specified by the vertex number is in the group specified by the string.
- [npointsgroup](../groups/npointsgroup)
  Returns the number of points in the group.
- [nprimitivesgroup](../groups/nprimitivesgroup)
  Returns the number of primitives in the group.
- [setpointgroup](../groups/setpointgroup)
  Adds or removes a point to/from a group in a geometry.
- [setprimgroup](../groups/setprimgroup)
  Adds or removes a primitive to/from a group in a geometry.
- [setvertexgroup](../groups/setvertexgroup)
  Adds or removes a vertex to/from a group in a geometry.

Half-edges

## hedge_group

- [hedge_dstpoint](../half-edges/hedge_dstpoint)
  Returns the destination point of a half-edge.
- [hedge_dstvertex](../half-edges/hedge_dstvertex)
  Returns the destination vertex of a half-edge.
- [hedge_equivcount](../half-edges/hedge_equivcount)
  Returns the number of half-edges equivalent to a given half-edge.
- [hedge_isequiv](../half-edges/hedge_isequiv)
  Determines whether a two half-edges are equivalent (represent the same edge).
- [hedge_isprimary](../half-edges/hedge_isprimary)
  Determines whether a half-edge number corresponds to a primary half-edge.
- [hedge_isvalid](../half-edges/hedge_isvalid)
  Determines whether a half-edge number corresponds to a valid half-edge.
- [hedge_next](../half-edges/hedge_next)
  Returns the half-edge that follows a given half-edge in its polygon.
- [hedge_nextequiv](../half-edges/hedge_nextequiv)
  Returns the next half-edges equivalent to a given half-edge.
- [hedge_postdstpoint](../half-edges/hedge_postdstpoint)
  Returns the point into which the vertex following the destination vertex of a half-edge in its primitive is wired.
- [hedge_postdstvertex](../half-edges/hedge_postdstvertex)
  Returns the vertex following the destination vertex of a half-edge in its primitive.
- [hedge_presrcpoint](../half-edges/hedge_presrcpoint)
  Returns the point into which the vertex that precedes the source vertex of a half-edge in its primitive is wired.
- [hedge_presrcvertex](../half-edges/hedge_presrcvertex)
  Returns the vertex that precedes the source vertex of a half-edge in its primitive.
- [hedge_prev](../half-edges/hedge_prev)
  Returns the half-edge that precedes a given half-edge in its polygon.
- [hedge_prim](../half-edges/hedge_prim)
  Returns the primitive that contains a half-edge.
- [hedge_primary](../half-edges/hedge_primary)
  Returns the primary half-edge equivalent to a given half-edge.
- [hedge_srcpoint](../half-edges/hedge_srcpoint)
  Returns the source point of a half-edge.
- [hedge_srcvertex](../half-edges/hedge_srcvertex)
  Returns the source vertex of a half-edge.
- [pointedge](../half-edges/pointedge)
  Finds and returns a half-edge with the given endpoints.
- [pointhedge](../half-edges/pointhedge)
  Finds and returns a half-edge with a given source point or with given source and destination points.
- [pointhedgenext](../half-edges/pointhedgenext)
  Returns the next half-edge with the same source as a given half-edge.
- [primhedge](../half-edges/primhedge)
  Returns one of the half-edges contained in a primitive.
- [vertexhedge](../half-edges/vertexhedge)
  Returns the half-edge which has a vertex as source.

hex

## hex_group

- [hex_adjacent](../hex/hex_adjacent)
  Returns primitive number of an adjacent hexahedron.
- [hex_faceindex](../hex/hex_faceindex)
  Returns vertex indices of each face of a hexahedron.

Image Processing

## image_group

- [accessframe](../image-processing/accessframe)
  Tells the COP manager that you need access to the given frame.
- [alphaname](../image-processing/alphaname)
  Returns the default name of the alpha plane (as it appears in the
  compositor preferences).
- [binput](../image-processing/binput)
  Samples a 2×2 pixel block around the given UV position, and bilinearly interpolates these pixels.
- [bumpname](../image-processing/bumpname)
  Returns the default name of the bump plane (as it appears in the
  compositor preferences).
- [chname](../image-processing/chname)
  Returns the name of a numbered channel.
- [cinput](../image-processing/cinput)
  Samples the exact (unfiltered) pixel color at the given coordinates.
- [colorname](../image-processing/colorname)
  Returns the default name of the color plane (as it appears in the
  compositor preferences).
- [depthname](../image-processing/depthname)
  Returns the default name of the depth plane (as it appears in the
  compositor preferences).
- [dsmpixel](../image-processing/dsmpixel)
  Reads the z-records stored in a pixel of a deep shadow map
  or deep camera map.
- [finput](../image-processing/finput)
  Returns fully filtered pixel input.
- [hasmetadata](../image-processing/hasmetadata)
  Queries if metadata exists on a composite operator.
- [hasplane](../image-processing/hasplane)
  Returns 1 if the plane specified by the parameter exists in this
  COP.
- [iaspect](../image-processing/iaspect)
  Returns the aspect ratio of the specified input.
- [ichname](../image-processing/ichname)
  Returns the channel name of the indexed plane of the given input.
- [iend](../image-processing/iend)
  Returns the last frame of the specified input.
- [iendtime](../image-processing/iendtime)
  Returns the end time of the specified input.
- [ihasplane](../image-processing/ihasplane)
  Returns 1 if the specified input has a plane named planename.
- [inumplanes](../image-processing/inumplanes)
  Returns the number of planes in the given input.
- [iplaneindex](../image-processing/iplaneindex)
  Returns the index of the plane named 'planename' in the specified input.
- [iplanename](../image-processing/iplanename)
  Returns the name of the plane specified by the planeindex of the given input
- [iplanesize](../image-processing/iplanesize)
  Returns the number of components in the plane named planename in
  the specified input.
- [irate](../image-processing/irate)
  Returns the frame rate of the specified input.
- [istart](../image-processing/istart)
  Returns the starting frame of the specified input.
- [istarttime](../image-processing/istarttime)
  Returns the start time of the specified input.
- [ixres](../image-processing/ixres)
  Returns the X resolution of the specified input.
- [iyres](../image-processing/iyres)
  Returns the Y resolution of the specified input.
- [lumname](../image-processing/lumname)
  Returns the default name of the luminaence plane (as it appears in the
  compositor preferences).
- [maskname](../image-processing/maskname)
  Returns the default name of the mask plane (as it appears in the
  compositor preferences).
- [metadata](../image-processing/metadata)
  Returns a metadata value from a composite operator.
- [ninput](../image-processing/ninput)
  Reads a component from a pixel and its eight neighbors.
- [normalname](../image-processing/normalname)
  Returns the default name of the normal plane (as it appears in the
  compositor preferences).
- [planeindex](../image-processing/planeindex)
  Returns the index of the plane specified by the parameter, starting
  at zero.
- [planename](../image-processing/planename)
  Returns the name of the plane specified by the index (e.
- [planesize](../image-processing/planesize)
  Returns the number of components in the plane (1 for scalar planes
  and up to 4 for vector planes).
- [pointname](../image-processing/pointname)
  Returns the default name of the point plane (as it appears in the
  compositor preferences).
- [velocityname](../image-processing/velocityname)
  Returns the default name of the velocity plane (as it appears in the
  compositor preferences).

Interpolation

## interp_group

- [ckspline](../interpolation/ckspline)
  Samples a Catmull-Rom (Cardinal) spline defined by position/value keys.
- [clamp](../interpolation/clamp)
  Returns value clamped between min and max.
- [cspline](../interpolation/cspline)
  Samples a Catmull-Rom (Cardinal) spline defined by uniformly spaced keys.
- [efit](../interpolation/efit)
  Takes the value in one range and shifts it to the corresponding value in a new range.
- [fit](../interpolation/fit)
  Takes the value in one range and shifts it to the corresponding value in a new range.
- [fit01](../interpolation/fit01)
  Takes the value in the range (0, 1) and shifts it to the corresponding value in a new range.
- [fit10](../interpolation/fit10)
  Takes the value in the range (1, 0) and shifts it to the corresponding value in a new range.
- [fit11](../interpolation/fit11)
  Takes the value in the range (-1, 1) and shifts it to the corresponding value in a new range.
- [invlerp](../interpolation/invlerp)
  Inverses a linear interpolation between the values.
- [lerp](../interpolation/lerp)
  Performs linear interpolation between the values.
- [lkspline](../interpolation/lkspline)
  Samples a polyline between the key points.
- [lspline](../interpolation/lspline)
  Samples a polyline defined by linearly spaced values.
- [slerp](../interpolation/slerp)
  Quaternion blend between q1 and q2 based on the bias.
- [slerpv](../interpolation/slerpv)
  Spherical blends between two vectors based on the bias.
- [smooth](../interpolation/smooth)
  Computes ease in/out interpolation between values.

light

## light_group

- [ambient](../light/ambient)
  Returns the color of ambient light in the scene.
- [atten](../light/atten)
  Computes attenuated falloff.
- [fastshadow](../light/fastshadow)
  Sends a ray from the position P along the direction specified by the
  direction D.
- [filtershadow](../light/filtershadow)
  Sends a ray from the position P along direction D.

Math

## math_group

- [abs](../math/abs)
  Returns the absolute value of the argument.
- [acos](../math/acos)
  Returns the inverse cosine of the argument.
- [asin](../math/asin)
  Returns the inverse sine of the argument.
- [atan](../math/atan)
  Returns the inverse tangent of the argument.
- [atan2](../math/atan2)
  Returns the inverse tangent of y/x.
- [avg](../math/avg)
  Returns the average value of the input(s)
- [cbrt](../math/cbrt)
  Returns the cube root of the argument.
- [ceil](../math/ceil)
  Returns the smallest integer greater than or equal to the argument.
- [combinelocaltransform](../math/combinelocaltransform)
  Combines Local and Parent Transforms with Scale Inheritance.
- [cos](../math/cos)
  Returns the cosine of the argument.
- [cosh](../math/cosh)
  Returns the hyperbolic cosine of the argument.
- [cross](../math/cross)
  Returns the cross product between the two vectors.
- [determinant](../math/determinant)
  Computes the determinant of the matrix.
- [diag](../math/diag)
  Extracts diagonal entries or constructs a diagonal matrix.
- [diagonalizesymmetric](../math/diagonalizesymmetric)
  Diagonalizes Symmetric Matrices.
- [distance_pointline](../math/distance_pointline)
  This function returns the closest distance between the point Q and the
  infinite line going through O parallel to vector D.
- [distance_pointray](../math/distance_pointray)
  This function returns the closest distance between the point Q and the
  semi-finite ray starting at O and extending in the direction D.
- [distance_pointsegment](../math/distance_pointsegment)
  This function returns the closest distance between the point Q and a
  finite line segment between points P0 and P1.
- [dot](../math/dot)
  Returns the dot product between the arguments.
- [Du](Du.html)
  Returns the derivative of the given value with respect to U.
- [Dv](Dv.html)
  Returns the derivative of the given value with respect to V.
- [Dw](Dw.html)
  Returns the derivative of the given value with respect to the 3rd axis (for volume rendering).
- [eigenvalues](../math/eigenvalues)
  Computes the eigenvalues of a 3×3 matrix.
- [erf](../math/erf)
  Gauss error function.
- [erf_inv](../math/erf_inv)
  Inverse Gauss error function.
- [erfc](../math/erfc)
  Gauss error function’s complement.
- [exp](../math/exp)
  Returns the exponential function of the argument.
- [extractlocaltransform](../math/extractlocaltransform)
  Extracts Local Transform from a World Transform with Scale Inheritance.
- [floor](../math/floor)
  Returns the largest integer less than or equal to the argument.
- [frac](../math/frac)
  Returns the fractional component of the floating point number.
- [ident](../math/ident)
  Returns an identity matrix.
- [invert](../math/invert)
  Inverts a matrix.
- [isfinite](../math/isfinite)
  Checks whether a value is a normal finite number.
- [isinf](../math/isinf)
  Checks whether a value is a positive or negative infinity.
- [isnan](../math/isnan)
  Checks whether a value is not a number.
- [kspline](../math/kspline)
  Returns an interpolated value along a curve defined by a basis and key/position pairs.
- [length](../math/length)
  Returns the magnitude of a vector.
- [length2](../math/length2)
  Returns the squared distance of the vector or vector4.
- [log](../math/log)
  Returns the natural logarithm of the argument.
- [log10](../math/log10)
  Returns the logarithm (base 10) of the argument.
- [makebasis](../math/makebasis)
  Creates an orthonormal basis given a z-axis vector.
- [max](../math/max)
- [min](../math/min)
- [norm_1](../math/norm_1)
  Returns the induced matrix 1-norm.
- [norm_fro](../math/norm_fro)
  Returns the Frobenius norm of a matrix.
- [norm_inf](../math/norm_inf)
  Returns the induced matrix infinity-norm.
- [norm_max](../math/norm_max)
  Returns the matrix max-norm.
- [norm_spectral](../math/norm_spectral)
  Returns the matrix spectral norm.
- [normalize](../math/normalize)
  Returns a normalized vector.
- [outerproduct](../math/outerproduct)
  Returns the outer product between the arguments.
- [pinvert](../math/pinvert)
  Computes the pseudo-inverse of a matrix.
- [planesphereintersect](../math/planesphereintersect)
  Computes the intersection of a 3D sphere and an infinite 3D plane.
- [pow](../math/pow)
  Raises the first argument to the power of the second argument.
- [predicate_incircle](../math/predicate_incircle)
  Determines if a point is inside or outside a triangle circumcircle.
- [predicate_insphere](../math/predicate_insphere)
  Determines if a point is inside or outside a tetrahedron circumsphere.
- [predicate_orient2d](../math/predicate_orient2d)
  Determines the orientation of a point with respect to a line.
- [predicate_orient3d](../math/predicate_orient3d)
  Determines the orientation of a point with respect to a plane.
- [premul](../math/premul)
  Pre multiply matrices.
- [product](../math/product)
  Returns the product of a list of numbers.
- [ptlined](../math/ptlined)
  This function returns the closest distance between the point Q and a
  finite line segment between points P0 and P1.
- [qdistance](../math/qdistance)
  Finds distance between two quaternions.
- [qinvert](../math/qinvert)
  Inverts a quaternion rotation.
- [qmultiply](../math/qmultiply)
  Multiplies two quaternions and returns the result.
- [qrotate](../math/qrotate)
  Rotates a vector by a quaternion.
- [quaternion](../math/quaternion)
  Creates a vector4 representing a quaternion.
- [resample_linear](../math/resample_linear)
- [rint](../math/rint)
  Rounds the number to the closest whole number.
- [shl](../math/shl)
  Bit-shifts an integer left.
- [shr](../math/shr)
  Bit-shifts an integer right.
- [shrz](../math/shrz)
  Bit-shifts an integer right.
- [sign](../math/sign)
  Returns -1, 0, or 1 depending on the sign of the argument.
- [sin](../math/sin)
  Returns the sine of the argument.
- [sinh](../math/sinh)
  Returns the hyperbolic sine of the argument.
- [slideframe](../math/slideframe)
  Finds the normal component of frame slid along a curve.
- [solvecubic](../math/solvecubic)
  Solves a cubic function returning the number of real roots.
- [solvepoly](../math/solvepoly)
  Finds the real roots of a polynomial.
- [solvequadratic](../math/solvequadratic)
  Solves a quadratic function returning the number of real roots.
- [solvetriangleSSS](solvetriangleSSS.html)
  Finds the angles of a triangle from its sides.
- [spline](../math/spline)
  Samples a value along a polyline or spline curve.
- [spline_cdf](../math/spline_cdf)
  Generate a cumulative distribution function (CDF) by sampling a spline curve.
- [sqrt](../math/sqrt)
  Returns the square root of the argument.
- [sum](../math/sum)
  Returns the sum of a list of numbers.
- [svddecomp](../math/svddecomp)
  Computes the singular value decomposition of a given matrix.
- [tan](../math/tan)
  Returns the trigonometric tangent of the argument
- [tanh](../math/tanh)
  Returns the hyperbolic tangent of the argument
- [tr](../math/tr)
  Returns the trace of the given matrix.
- [transpose](../math/transpose)
  Transposes the given matrix.
- [trunc](../math/trunc)
  Removes the fractional part of a floating point number.

measure

## measure_group

- [distance](../measure/distance)
  Returns the distance between two points.
- [distance2](../measure/distance2)
  Returns the squared distance between the two points.
- [getbbox](../measure/getbbox)
  Sets two vectors to the minimum and maximum corners of the bounding box for the geometry.
- [getbbox_center](../measure/getbbox_center)
  Returns the center of the bounding box for the geometry.
- [getbbox_max](../measure/getbbox_max)
  Returns the maximum of the bounding box for the geometry.
- [getbbox_min](../measure/getbbox_min)
  Returns the minimum of the bounding box for the geometry.
- [getbbox_size](../measure/getbbox_size)
  Returns the size of the bounding box for the geometry.
- [getbounds](../measure/getbounds)
  Returns the bounding box of the geometry specified by the filename.
- [getpointbbox](../measure/getpointbbox)
  Sets two vectors to the minimum and maximum corners of the bounding box for the geometry.
- [getpointbbox_center](../measure/getpointbbox_center)
  Returns the center of the bounding box for the geometry.
- [getpointbbox_max](../measure/getpointbbox_max)
  Returns the maximum of the bounding box for the geometry.
- [getpointbbox_min](../measure/getpointbbox_min)
  Returns the minimum of the bounding box for the geometry.
- [getpointbbox_size](../measure/getpointbbox_size)
  Returns the size of the bounding box for the geometry.
- [planepointdistance](../measure/planepointdistance)
  Computes the distance and closest point of a point to an infinite plane.
- [relbbox](../measure/relbbox)
  Returns the relative position of the point given with respect to the bounding box of the geometry.
- [relpointbbox](../measure/relpointbbox)
  Returns the relative position of the point given with respect to the bounding box of the geometry.
- [surfacedist](../measure/surfacedist)
  Finds the distance of a point to a group of points along the surface of a geometry.
- [uvdist](../measure/uvdist)
  Finds the distance of a uv coordinate to a geometry in uv space.
- [windingnumber](../measure/windingnumber)
  Computes the winding number of a mesh around a point. Winding number indicates how many times a geometry wraps around a point. Useful for inside/outside test, the winding number is equal to one inside of the mesh and zero outside.
- [windingnumber2d](../measure/windingnumber2d)
  Computes the winding number of a curve in XY plane around a point. Winding number indicates how many times a curve wraps around a point. Useful for inside/outside test, the winding number is equal to one inside of the curve and zero outside.
- [xyzdist](../measure/xyzdist)
  Finds the distance from a point to the closest location on surface geometry.

metaball

## metaball_group

- [metaimport](../metaball/metaimport)
  Once you get a handle to a metaball using metastart and metanext, you
  can query attributes of the metaball with metaimport.
- [metamarch](../metaball/metamarch)
  Takes the ray defined by p0 and p1 and partitions it into zero or
  more sub-intervals where each interval intersects a cluster of metaballs
  from filename.
- [metanext](../metaball/metanext)
  Iterate to the next metaball in the list of metaballs returned by the metastart() function.
- [metastart](../metaball/metastart)
  Open a geometry file and return a handle for the metaballs of
  interest, at the position p.
- [metaweight](../metaball/metaweight)
  Returns the metaweight of the geometry at position p.

Nodes

## nodes_group

- [addvariablename](../nodes/addvariablename)
  Adds a mapping for an attribute to a local variable.
- [ch](../nodes/ch)
  Evaluates a channel (or parameter) and return its value.
- [ch2](../nodes/ch2)
  Evaluates a channel (or parameter) and return its value.
- [ch3](../nodes/ch3)
  Evaluates a channel (or parameter) and return its value.
- [ch4](../nodes/ch4)
  Evaluates a channel (or parameter) and return its value.
- [chdict](../nodes/chdict)
  Evaluates a key-value dictionary parameter and return its value.
- [chexpr](../nodes/chexpr)
  Evaluates a channel with a new segment expression.
- [chexprf](../nodes/chexprf)
  Evaluates a channel with a new segment expression at a given frame.
- [chexprt](../nodes/chexprt)
  Evaluates a channel with a new segment expression at a given time.
- [chf](../nodes/chf)
  Evaluates a channel (or parameter) and return its value.
- [chi](../nodes/chi)
  Evaluates a channel (or parameter) and return its value.
- [chid](../nodes/chid)
  Resolves a channel string (or parameter) and return op_id, parm_index and vector_index.
- [chp](../nodes/chp)
  Evaluates a channel (or parameter) and return its value.
- [chramp](../nodes/chramp)
  Evaluates a ramp parameter and return its value.
- [chrampderiv](../nodes/chrampderiv)
  Evaluates the derivative of a parm parameter with respect to position.
- [chs](../nodes/chs)
  Evaluates a channel (or parameter) and return its value.
- [chsop](../nodes/chsop)
  Evaluates an operator path parameter and return the path to the operator.
- [chsraw](../nodes/chsraw)
  Returns the raw string channel (or parameter).
- [chu](../nodes/chu)
  Evaluates a channel or parameter, and return its value.
- [chv](../nodes/chv)
  Evaluates a channel or parameter, and return its value.
- [cregioncapturetransform](../nodes/cregioncapturetransform)
  Returns the capture transform associated with a Capture Region SOP.
- [cregiondeformtransform](../nodes/cregiondeformtransform)
  Returns the deform transform associated with a Capture Region SOP.
- [cregionoverridetransform](../nodes/cregionoverridetransform)
  Returns the capture or deform transform associated with a Capture Region SOP based on the global capture override flag.
- [isconnected](../nodes/isconnected)
  Returns 1 if input_number is connected, or 0 if the input is not connected.
- [opfullpath](../nodes/opfullpath)
  Returns the full path for the given relative path
- [opid](../nodes/opid)
  Resolves an operator path string and return its op_id.
- [opparentbonetransform](../nodes/opparentbonetransform)
  Returns the parent bone transform associated with an OP.
- [opparenttransform](../nodes/opparenttransform)
  Returns the parent transform associated with an OP.
- [opparmtransform](../nodes/opparmtransform)
  Returns the parm transform associated with an OP.
- [oppreconstrainttransform](../nodes/oppreconstrainttransform)
  Returns the preconstraint transform associated with an OP.
- [oppreparmtransform](../nodes/oppreparmtransform)
  Returns the pre and parm transform associated with an OP.
- [opprerawparmtransform](../nodes/opprerawparmtransform)
  Returns the pre and raw parm transform associated with an OP.
- [oppretransform](../nodes/oppretransform)
  Returns the pretransform associated with an OP.
- [oprawparmtransform](../nodes/oprawparmtransform)
  Returns the raw parm transform associated with an OP.
- [optransform](../nodes/optransform)
  Returns the transform associated with an OP.

Noise and Randomness

## noise_group

- [anoise](../noise-and-randomness/anoise)
  Generates alligator noise.
- [curlgxnoise](../noise-and-randomness/curlgxnoise)
  Computes divergence free noise based on simplex noise.
- [curlgxnoise2d](../noise-and-randomness/curlgxnoise2d)
  Computes divergence free noise in the plane based on simplex noise.
- [curlnoise](../noise-and-randomness/curlnoise)
  Computes divergence free noise based on Perlin noise.
- [curlnoise2d](../noise-and-randomness/curlnoise2d)
  Computes 2d divergence free noise based on Perlin noise.
- [curlxnoise](../noise-and-randomness/curlxnoise)
  Computes divergence free noise based on Simplex noise.
- [curlxnoise2d](../noise-and-randomness/curlxnoise2d)
  Computes 2d divergence free noise based on simplex noise.
- [cwnoise](../noise-and-randomness/cwnoise)
  Generates Worley (cellular) noise using a Chebyshev distance metric.
- [flownoise](../noise-and-randomness/flownoise)
  Generates 1D and 3D Perlin Flow Noise from 3D and 4D data.
- [flowpnoise](../noise-and-randomness/flowpnoise)
  There are two forms of Perlin-style noise: a non-periodic noise which
  changes randomly throughout N-dimensional space, and a periodic form
  which repeats over a given range of space.
- [gxnoise](../noise-and-randomness/gxnoise)
  Evaluates a simplex noise field.
- [gxnoised](../noise-and-randomness/gxnoised)
  Evaluates a simplex noise field and its derivatives.
- [hscript_noise](../noise-and-randomness/hscript_noise)
  Generates noise matching the output of the Hscript noise() expression function.
- [hscript_rand](../noise-and-randomness/hscript_rand)
  Produces the exact same results as the Houdini expression function of
  the same name.
- [hscript_snoise](../noise-and-randomness/hscript_snoise)
- [hscript_sturb](../noise-and-randomness/hscript_sturb)
- [hscript_turb](../noise-and-randomness/hscript_turb)
  Generates turbulence matching the output of the HScript turb() expression function.
- [mwnoise](../noise-and-randomness/mwnoise)
  Generates Worley (cellular) noise using a Manhattan distance metric.
- [mx_cellnoise](../noise-and-randomness/mx_cellnoise)
  MaterialX compatible cellnoise
- [mx_perlin](../noise-and-randomness/mx_perlin)
  MaterialX compatible Perlin noise
- [mx_voronoi](../noise-and-randomness/mx_voronoi)
  MaterialX compatible Voronoi noise
- [mx_worley](../noise-and-randomness/mx_worley)
  MaterialX compatible Worley noise
- [noise](../noise-and-randomness/noise)
  There are two forms of Perlin-style noise: a non-periodic noise which
  changes randomly throughout N-dimensional space, and a periodic form
  which repeats over a given range of space.
- [noised](../noise-and-randomness/noised)
  Derivatives of Perlin Noise.
- [nrandom](../noise-and-randomness/nrandom)
  Non-deterministic random number generation function.
- [onoise](../noise-and-randomness/onoise)
  These functions are similar to wnoise and vnoise.
- [pnoise](../noise-and-randomness/pnoise)
  There are two forms of Perlin-style noise: a non-periodic noise which
  changes randomly throughout N-dimensional space, and a periodic form
  which repeats over a given range of space.
- [pxnoised](../noise-and-randomness/pxnoised)
  Periodic derivatives of Simplex Noise.
- [rand](../noise-and-randomness/rand)
  Creates a random number between 0 and 1 from a seed.
- [random](../noise-and-randomness/random)
  Generate a random number based on the integer position in 1-4D space.
- [random_brj](../noise-and-randomness/random_brj)
  Generate a uniformly distributed random number.
- [random_fhash](../noise-and-randomness/random_fhash)
  Hashes floating point numbers to integers.
- [random_ihash](../noise-and-randomness/random_ihash)
  Hashes integer numbers to integers.
- [random_poisson](../noise-and-randomness/random_poisson)
  Generates a random Poisson variable given the mean to the distribution and a seed.
- [random_shash](../noise-and-randomness/random_shash)
  Hashes a string to an integer.
- [random_sobol](../noise-and-randomness/random_sobol)
  Generate a uniformly distributed random number.
- [snoise](../noise-and-randomness/snoise)
  These functions are similar to wnoise.
- [vnoise](../noise-and-randomness/vnoise)
  Generates Voronoi (cellular) noise.
- [wnoise](../noise-and-randomness/wnoise)
  Generates Worley (cellular) noise.
- [xnoise](pxnoise.html)
  Simplex noise is very close to Perlin noise, except with the samples on a simplex mesh rather than a grid. This results in less grid artifacts. It also uses a higher order bspline to provide better derivatives. This is the periodic simplex noise
- [xnoise](../noise-and-randomness/xnoise)
  Simplex noise is very close to Perlin noise, except with the samples on a simplex mesh rather than a grid. This results in less grid artifacts. It also uses a higher order bspline to provide better derivatives.
- [xnoised](../noise-and-randomness/xnoised)
  Derivatives of Simplex Noise.

normals

## normals_group

- [computenormal](../normals/computenormal)
  In shading contexts, computes a normal. In the SOP contexts, sets how/whether to recompute normals.
- [prim_normal](../normals/prim_normal)
  Returns the normal of the primitive (prim_number) at parametric location u, v.

Open Color IO

## ocio_group

- [ocio_activedisplays](../open-color-io/ocio_activedisplays)
  Returns the names of active displays supported in Open Color IO
- [ocio_activeviews](../open-color-io/ocio_activeviews)
  Returns the names of active views supported in Open Color IO
- [ocio_import](../open-color-io/ocio_import)
  Imports attributes from OpenColorIO spaces.
- [ocio_parsecolorspace](../open-color-io/ocio_parsecolorspace)
  Parse the color space from a string
- [ocio_roles](../open-color-io/ocio_roles)
  Returns the names of roles supported in Open Color IO
- [ocio_spaces](../open-color-io/ocio_spaces)
  Returns the names of color spaces supported in Open Color IO.
- [ocio_transform](../open-color-io/ocio_transform)
  Transform colors using Open Color IO
- [ocio_transformview](../open-color-io/ocio_transformview)
  Transform colors to a view using Open Color IO

particles

## particles_group

- [filamentsample](../particles/filamentsample)
  Samples the velocity field defined by a set of vortex filaments.

Point Clouds and 3D Images

## ptcloud_group

- [mattrib](../point-clouds-and-3d-images/mattrib)
  Returns the value of the point attribute for the metaballs if
  metaball geometry is specified to i3dgen.
- [mdensity](../point-clouds-and-3d-images/mdensity)
  Returns the density of the metaball field if metaball geometry is
  specified to i3dgen.
- [mspace](../point-clouds-and-3d-images/mspace)
  Transforms the position specified into the local space of the
  metaball.
- [pcclose](../point-clouds-and-3d-images/pcclose)
  This function closes the handle associated with a pcopen
  function.
- [pccone](../point-clouds-and-3d-images/pccone)
  Returns a list of closest points from a file within a specified cone.
- [pccone_radius](../point-clouds-and-3d-images/pccone_radius)
  Returns a list of closest points from a file in a cone, taking into account their radii
- [pcconvex](../point-clouds-and-3d-images/pcconvex)
- [pcexport](../point-clouds-and-3d-images/pcexport)
  Writes data to a point cloud inside a pciterate or a pcunshaded loop.
- [pcfarthest](../point-clouds-and-3d-images/pcfarthest)
  Returns the distance to the farthest point found in the search
  performed by pcopen.
- [pcfilter](../point-clouds-and-3d-images/pcfilter)
  Filters points found by pcopen using a simple reconstruction filter.
- [pcfind](../point-clouds-and-3d-images/pcfind)
  Returns a list of closest points from a file.
- [pcfind_radius](../point-clouds-and-3d-images/pcfind_radius)
  Returns a list of closest points from a file taking into account their radii.
- [pcgenerate](../point-clouds-and-3d-images/pcgenerate)
  Generates a point cloud.
- [pcimport](../point-clouds-and-3d-images/pcimport)
  Imports channel data from a point cloud inside a pciterate or a pcunshaded loop.
- [pcimportbyidx3](../point-clouds-and-3d-images/pcimportbyidx3)
  Imports channel data from a point cloud outside a pciterate or a pcunshaded loop.
- [pcimportbyidx4](../point-clouds-and-3d-images/pcimportbyidx4)
  Imports channel data from a point cloud outside a pciterate or a pcunshaded loop.
- [pcimportbyidxf](../point-clouds-and-3d-images/pcimportbyidxf)
  Imports channel data from a point cloud outside a pciterate or a pcunshaded loop.
- [pcimportbyidxi](../point-clouds-and-3d-images/pcimportbyidxi)
  Imports channel data from a point cloud outside a pciterate or a pcunshaded loop.
- [pcimportbyidxp](../point-clouds-and-3d-images/pcimportbyidxp)
  Imports channel data from a point cloud outside a pciterate or a pcunshaded loop.
- [pcimportbyidxs](../point-clouds-and-3d-images/pcimportbyidxs)
  Imports channel data from a point cloud outside a pciterate or a pcunshaded loop.
- [pcimportbyidxv](../point-clouds-and-3d-images/pcimportbyidxv)
  Imports channel data from a point cloud outside a pciterate or a pcunshaded loop.
- [pciterate](../point-clouds-and-3d-images/pciterate)
  This function can be used to iterate over all the points which were
  found in the pcopen query.
- [pcline](../point-clouds-and-3d-images/pcline)
  Returns a list of closest points to an infinite line from a specified file
- [pcline_radius](../point-clouds-and-3d-images/pcline_radius)
  Returns a list of closest points to an infinite line from a specified file
- [pcnumfound](../point-clouds-and-3d-images/pcnumfound)
  This node returns the number of points found by pcopen.
- [pcopen](../point-clouds-and-3d-images/pcopen)
  Returns a handle to a point cloud file.
- [pcopenlod](../point-clouds-and-3d-images/pcopenlod)
  Returns a handle to a point cloud file.
- [pcsampleleaf](../point-clouds-and-3d-images/pcsampleleaf)
  Changes the current iteration point to a leaf descendant of the current aggregate point.
- [pcsegment](../point-clouds-and-3d-images/pcsegment)
  Returns a list of closest points to a line segment from a specified file
- [pcsegment_radius](../point-clouds-and-3d-images/pcsegment_radius)
  Returns a list of closest points to a line segment from a specified file
- [pcsize](../point-clouds-and-3d-images/pcsize)
- [pcunshaded](../point-clouds-and-3d-images/pcunshaded)
  Iterate over all of the points of a read-write channel which haven’t
  had any data written to the channel yet.
- [pcwrite](../point-clouds-and-3d-images/pcwrite)
  Writes data to a point cloud file.
- [pgfind](../point-clouds-and-3d-images/pgfind)
  Returns a list of closest points from a file.
- [photonmap](../point-clouds-and-3d-images/photonmap)
  Samples a color from a photon map.
- [texture3d](../point-clouds-and-3d-images/texture3d)
  Returns the value of the 3d image at the position specified by P.
- [texture3dBox](texture3dBox.html)
  This function queries the 3D texture map specified and returns the
  bounding box information of the file.

Sampling

## sampling_group

- [create_cdf](../sampling/create_cdf)
  Creates a cumulative distribution function (CDF) from an array of probability density function (PDF) values.
- [create_pdf](../sampling/create_pdf)
  Creates a probability density function from an array of input values.
- [limit_sample_space](../sampling/limit_sample_space)
  Limits a unit value in a way that maintains uniformity and in-range consistency.
- [newsampler](../sampling/newsampler)
  Initializes a sampling sequence for the nextsample function.
- [nextsample](../sampling/nextsample)
- [sample_cauchy](../sampling/sample_cauchy)
  Samples the Cauchy (Lorentz) distribution.
- [sample_cdf](../sampling/sample_cdf)
  Samples a cumulative distribution function (CDF).
- [sample_circle_arc](../sampling/sample_circle_arc)
  Generates a uniform unit vector2, within maxangle of center, given a uniform number between 0 and 1.
- [sample_circle_edge_uniform](../sampling/sample_circle_edge_uniform)
  Generates a uniform unit vector2, given a uniform number between 0 and 1.
- [sample_circle_ring_uniform](../sampling/sample_circle_ring_uniform)
  Generates a uniform vector2 with alpha \< length \< 1, where 0 \< alpha \< 1, given a vector2 of uniform numbers between 0 and 1.
- [sample_circle_slice](../sampling/sample_circle_slice)
  Generates a uniform vector2 with length \< 1, within maxangle of center, given a vector2 of uniform numbers between 0 and 1.
- [sample_circle_uniform](../sampling/sample_circle_uniform)
  Generates a uniform vector2 with length \< 1, given a vector2 of uniform numbers between 0 and 1.
- [sample_direction_cone](../sampling/sample_direction_cone)
  Generates a uniform unit vector, within maxangle of center, given a vector2 of uniform numbers between 0 and 1.
- [sample_direction_uniform](../sampling/sample_direction_uniform)
  Generates a uniform unit vector, given a vector2 of uniform numbers between 0 and 1.
- [sample_discrete](../sampling/sample_discrete)
  Returns an integer, either uniform or weighted, given a uniform number between 0 and 1.
- [sample_exponential](../sampling/sample_exponential)
  Samples the exponential distribution.
- [sample_geometry](../sampling/sample_geometry)
  Samples geometry in the scene and returns information from the shaders of surfaces that were sampled.
- [sample_hemisphere](../sampling/sample_hemisphere)
  Generates a unit vector, optionally biased, within a hemisphere, given a vector2 of uniform numbers between 0 and 1.
- [sample_hypersphere_cone](../sampling/sample_hypersphere_cone)
  Generates a uniform vector4 with length \< 1, within maxangle of center, given a vector4 of uniform numbers between 0 and 1.
- [sample_hypersphere_uniform](../sampling/sample_hypersphere_uniform)
  Generates a uniform vector4 with length \< 1, given a vector4 of uniform numbers between 0 and 1.
- [sample_light](../sampling/sample_light)
  Samples a 3D position on a light source and runs the light shader at that point.
- [sample_lognormal](../sampling/sample_lognormal)
  Samples the log-normal distribution based on parameters of the underlying normal distribution.
- [sample_lognormal_by_median](../sampling/sample_lognormal_by_median)
  Samples the log-normal distribution based on median and standard deviation.
- [sample_normal](../sampling/sample_normal)
  Samples the normal (Gaussian) distribution.
- [sample_orientation_cone](../sampling/sample_orientation_cone)
  Generates a uniform unit vector4, within maxangle of center, given a vector of uniform numbers between 0 and 1.
- [sample_orientation_uniform](../sampling/sample_orientation_uniform)
  Generates a uniform unit vector4, given a vector of uniform numbers between 0 and 1.
- [sample_photon](../sampling/sample_photon)
  Samples a 3D position on a light source and runs the light shader at that point.
- [sample_sphere_cone](../sampling/sample_sphere_cone)
  Generates a uniform vector with length \< 1, within maxangle of center, given a vector of uniform numbers between 0 and 1.
- [sample_sphere_shell_uniform](../sampling/sample_sphere_shell_uniform)
  Generates a uniform vector with alpha \< length \< 1, where 0 \< alpha \< 1, given a vector of uniform numbers between 0 and 1.
- [sample_sphere_uniform](../sampling/sample_sphere_uniform)
  Generates a uniform vector with length \< 1, given a vector of uniform numbers between 0 and 1.
- [sampledisk](../sampling/sampledisk)
  Warps uniform random samples to a disk.
- [variance](../sampling/variance)
  Computes the mean value and variance for a value.

Sensor Input

## sensor_group

- [sensor_panorama_create](../sensor-input/sensor_panorama_create)
  Sensor function to render GL scene and query the result.
- [sensor_panorama_getcolor](../sensor-input/sensor_panorama_getcolor)
  Sensor function query a rendered GL scene.
- [sensor_panorama_getcone](../sensor-input/sensor_panorama_getcone)
  Sensor function to query average values from rendered GL scene.
- [sensor_panorama_getdepth](../sensor-input/sensor_panorama_getdepth)
  Sensor function query a rendered GL scene.
- [sensor_save](../sensor-input/sensor_save)
  Sensor function to save a rendered GL scene.

Shading and Rendering

## shading_group

- [area](../shading-and-rendering/area)
  Returns the area of the micropolygon containing a variable such as P.
- [blinnBRDF](blinnBRDF.html)
- [bouncelabel](../shading-and-rendering/bouncelabel)
- [bouncemask](../shading-and-rendering/bouncemask)
- [diffuseBRDF](diffuseBRDF.html)
- [filterstep](../shading-and-rendering/filterstep)
  Returns the anti-aliased weight of the step function.
- [fresnel](../shading-and-rendering/fresnel)
  Computes the fresnel reflection/refraction contributions given an
  incoming vector, surface normal (both normalized), and an index of
  refraction (eta).
- [frontface](../shading-and-rendering/frontface)
  If dot(I, Nref) is less than zero, N will be negated.
- [gather](../shading-and-rendering/gather)
  Sends rays into the scene and returns information from the shaders of
  surfaces hit by the rays.
- [getblurP](getblurP.html)
  Returns the blurred point position (P) vector at a fractional time within the motion blur exposure.
- [getcomponents](../shading-and-rendering/getcomponents)
- [getderiv](../shading-and-rendering/getderiv)
  Evaluates surface derivatives of an attribute.
- [getfogname](../shading-and-rendering/getfogname)
  Returns the name of the current object whose shader is being run.
- [getglobalraylevel](../shading-and-rendering/getglobalraylevel)
  Returns the depth of the ray tree for computing global
  illumination.
- [getgroupid](../shading-and-rendering/getgroupid)
  Returns group id containing current primitive.
- [getlight](../shading-and-rendering/getlight)
  Returns a light struct for the specified light identifier.
- [getlightid](../shading-and-rendering/getlightid)
  Returns the light id for a named light (or -1 for an invalid name).
- [getlightname](../shading-and-rendering/getlightname)
  Returns the name of the current light when called from within an illuminance loop, or converts an integer light ID into the light’s name.
- [getlights](../shading-and-rendering/getlights)
  Returns an array of light identifiers for the currently shaded surface.
- [getlightscope](../shading-and-rendering/getlightscope)
  Returns a selection of lights that illuminate a given material.
- [getlocalcurvature](../shading-and-rendering/getlocalcurvature)
  Evaluates local curvature of primitive grid, using the same curvature evaluation method as Measure SOPs.
- [getmaterial](../shading-and-rendering/getmaterial)
  Returns a material struct for the current surface.
- [getmaterialid](../shading-and-rendering/getmaterialid)
  Returns material id of shaded primitive.
- [getobjectid](../shading-and-rendering/getobjectid)
  Returns the object id for the current shading context.
- [getobjectname](../shading-and-rendering/getobjectname)
  Returns the name of the current object whose shader is being run.
- [getphotonlight](../shading-and-rendering/getphotonlight)
  Returns the integer ID of the light being used for photon shading.
- [getprimid](../shading-and-rendering/getprimid)
  Returns the number of the current primitive.
- [getptextureid](../shading-and-rendering/getptextureid)
  Returns the ptexture face id for the current primitive.
- [getraylevel](../shading-and-rendering/getraylevel)
  Returns the depth of the ray tree for the current shading.
- [getrayweight](../shading-and-rendering/getrayweight)
  Returns an approximation to the contribution of the ray to the final
  pixel color.
- [getsamplestore](../shading-and-rendering/getsamplestore)
  Looks up sample data in a channel, referenced by a point.
- [getscope](../shading-and-rendering/getscope)
  Returns a selection of objects visible to rays for a given material.
- [getsmoothP](getsmoothP.html)
  Returns modified surface position based on a smoothing function.
- [getuvtangents](../shading-and-rendering/getuvtangents)
  Evaluates UV tangents at a point on an arbitrary object.
- [gradient](../shading-and-rendering/gradient)
  Returns the gradient of a field.
- [haslight](../shading-and-rendering/haslight)
  Returns whether a light illuminates the given material.
- [illuminance](../shading-and-rendering/illuminance)
  Loops through all light sources in the scene, calling the light shader for each light source to set the Cl and L global variables.
- [integratehoseksky](../shading-and-rendering/integratehoseksky)
  Computes irradiance from the given Hosek Sky on a horizontal surface
- [interpolate](../shading-and-rendering/interpolate)
  Interpolates a value across the currently shaded micropolygon.
- [intersect_lights](../shading-and-rendering/intersect_lights)
  Finds the nearest intersection of a ray with any of a list of (area) lights and runs the light shader at the intersection point.
- [irradiance](../shading-and-rendering/irradiance)
  Computes irradiance (global illumination) at the point P with the normal N.
- [isfogray](../shading-and-rendering/isfogray)
  Returns 1 if the shader is being called to evaluate illumination for
  fog objects, or 0 if the light or shadow shader is being called to
  evaluate surface illumination.
- [islpeactive](../shading-and-rendering/islpeactive)
  Returns 1 if Light Path Expressions are enabled. 0 Otherwise.
- [israytracing](../shading-and-rendering/israytracing)
  Indicates whether a shader is being executed for ray tracing.
- [isshadingRHS](isshadingRHS.html)
  Detects the orientation of default shading space.
- [isshadowray](../shading-and-rendering/isshadowray)
  Returns 1 if the shader is being called to evaluate opacity for
  shadow rays, or 0 if the shader is being called to evaluate for surface
  color.
- [isuvrendering](../shading-and-rendering/isuvrendering)
  Indicates whether the shader is being evaluated while doing UV rendering (e.g. texture unwrapping)
- [lightbounces](../shading-and-rendering/lightbounces)
  Returns the bounce mask for a light struct.
- [lightid](../shading-and-rendering/lightid)
  Returns the light id for a light struct.
- [lightstate](../shading-and-rendering/lightstate)
  Queries the renderer for a named property.
- [limport](../shading-and-rendering/limport)
  Imports a variable from the light shader for the surface.
- [matchvex_blinn](../shading-and-rendering/matchvex_blinn)
  Returns a BSDF that matches the output of the traditional VEX blinn function.
- [matchvex_specular](../shading-and-rendering/matchvex_specular)
  Returns a BSDF that matches the output of the traditional VEX specular function.
- [nbouncetypes](../shading-and-rendering/nbouncetypes)
- [objectstate](../shading-and-rendering/objectstate)
  Queries the renderer for a named property.
- [occlusion](../shading-and-rendering/occlusion)
  Computes ambient occlusion.
- [pathtrace](../shading-and-rendering/pathtrace)
  Computes global illumination using PBR for secondary bounces.
- [phongBRDF](phongBRDF.html)
- [rayhittest](../shading-and-rendering/rayhittest)
  Sends a ray from the position P along the direction D.
- [rayimport](../shading-and-rendering/rayimport)
  Imports a value sent by a shader in a gather loop.
- [reflect](../shading-and-rendering/reflect)
  Returns the vector representing the reflection of the direction
  against the normal.
- [reflectlight](../shading-and-rendering/reflectlight)
  Computes the amount of reflected light which hits the surface.
- [refract](../shading-and-rendering/refract)
  Returns the refraction ray given an incoming direction, the
  normalized normal and an index of refraction.
- [refractlight](../shading-and-rendering/refractlight)
  Computes the illumination of surfaces refracted by the current
  surface.
- [renderstate](../shading-and-rendering/renderstate)
  Queries the renderer for a named property.
- [resolvemissedray](../shading-and-rendering/resolvemissedray)
  Returns the background color for rays that exit the scene.
- [scatter](../shading-and-rendering/scatter)
  Evaluates a scattering event through the domain of a geometric object.
- [setcurrentlight](../shading-and-rendering/setcurrentlight)
  Sets the current light
- [setsamplestore](../shading-and-rendering/setsamplestore)
  Stores sample data in a channel, referenced by a point.
- [shadow](../shading-and-rendering/shadow)
  Calls shadow shaders for the current light source.
- [shadow_light](../shading-and-rendering/shadow_light)
  Executes the shadow shader for a given light and returns the amount of shadowing as a multiplier of the shaded color.
- [shimport](../shading-and-rendering/shimport)
  Imports a variable from the shadow shader for the surface.
- [simport](../shading-and-rendering/simport)
  Imports a variable sent by a surface shader in an illuminance loop.
- [specularBRDF](specularBRDF.html)
  Returns the computed BRDFs for the different lighting models used in VEX shading.
- [storelightexport](../shading-and-rendering/storelightexport)
  Stores exported data for a light.
- [switch](../shading-and-rendering/switch)
  Use a different bsdf for direct or indirect lighting.
- [trace](../shading-and-rendering/trace)
  Sends a ray from P along the normalized vector D.
- [translucent](../shading-and-rendering/translucent)
  Returns a Lambertian translucence BSDF.
- [uvunwrap](../shading-and-rendering/uvunwrap)
  Computes the position and normal at given (u, v) coordinates, for use in a lens shader.
- [wireblinn](../shading-and-rendering/wireblinn)
- [wirediffuse](../shading-and-rendering/wirediffuse)
- [writepixel](../shading-and-rendering/writepixel)
  Writes color information to a pixel in the output image

Strings

## string_group

- [abspath](../strings/abspath)
  Returns the full path of a file.
- [chr](../strings/chr)
  Converts an unicode codepoint to a UTF8 string.
- [concat](../strings/concat)
  Concatenate all the strings specified to form a single string.
- [decode](../strings/decode)
  Decodes a variable name that was previously encoded.
- [decodeattrib](../strings/decodeattrib)
  Decodes a geometry attribute name that was previously encoded.
- [decodeparm](../strings/decodeparm)
  Decodes a node parameter name that was previously encoded.
- [decodeutf8](../strings/decodeutf8)
  Decodes a UTF8 string into a series of codepoints.
- [encode](../strings/encode)
  Encodes any string into a valid variable name.
- [encodeattrib](../strings/encodeattrib)
  Encodes any string into a valid geometry attribute name.
- [encodeparm](../strings/encodeparm)
  Encodes any string into a valid node parameter name.
- [encodeutf8](../strings/encodeutf8)
  Encodes a UTF8 string from a series of codepoints.
- [endswith](../strings/endswith)
  Indicates the string ends with the specified string.
- [find](../strings/find)
  Finds an item in an array or string.
- [isalpha](../strings/isalpha)
  Returns 1 if all the characters in the string are alphabetic
- [isdigit](../strings/isdigit)
  Returns 1 if all the characters in the string are numeric
- [itoa](../strings/itoa)
  Converts an integer to a string.
- [join](../strings/join)
  Concatenate all the strings of an array inserting a common spacer.
- [lstrip](../strings/lstrip)
  Strips leading whitespace from a string.
- [makevalidvarname](../strings/makevalidvarname)
  Forces a string to conform to the rules for variable names.
- [match](../strings/match)
  This function returns 1 if the subject matches the pattern specified,
  or 0 if the subject doesn’t match.
- [opdigits](../strings/opdigits)
  Returns the integer value of the last sequence of digits of a string
- [ord](../strings/ord)
  Converts an UTF8 string into a codepoint.
- [pluralize](../strings/pluralize)
  Converts an English noun to its plural.
- [re_find](../strings/re_find)
  Matches a regular expression in a string
- [re_findall](../strings/re_findall)
  Finds all instances of the given regular expression in the string
- [re_match](../strings/re_match)
  Returns 1 if the entire input string matches the expression
- [re_replace](../strings/re_replace)
  Replaces instances of regex_find with regex_replace
- [re_split](../strings/re_split)
  Splits the given string based on regex match.
- [relativepath](../strings/relativepath)
  Computes the relative path for two full paths.
- [relpath](../strings/relpath)
  Returns the relative path to a file.
- [replace](../strings/replace)
  Replaces occurrences of a substring.
- [replace_match](../strings/replace_match)
  Replaces the matched string pattern with another pattern.
- [rstrip](../strings/rstrip)
  Strips trailing whitespace from a string.
- [split](../strings/split)
  Splits a string into tokens.
- [splitpath](../strings/splitpath)
  Splits a file path into the directory and name parts.
- [sprintf](../strings/sprintf)
  Formats a string like printf but returns the result as a string
  instead of printing it.
- [startswith](../strings/startswith)
  Returns 1 if the string starts with the specified string.
- [strip](../strings/strip)
  Strips leading and trailing whitespace from a string.
- [strlen](../strings/strlen)
  Returns the length of the string.
- [titlecase](../strings/titlecase)
  Returns a string that is the titlecase version of the input string.
- [tolower](../strings/tolower)
  Converts all characters in string to lower case
- [toupper](../strings/toupper)
  Converts all characters in string to upper case

Subdivision Surfaces

## subd_group

- [osd_facecount](../subdivision-surfaces/osd_facecount)
- [osd_firstpatch](../subdivision-surfaces/osd_firstpatch)
- [osd_limitsurface](../subdivision-surfaces/osd_limitsurface)
  Evaluates a point attribute at the subdivision limit surface using Open Subdiv.
- [osd_limitsurfacevertex](../subdivision-surfaces/osd_limitsurfacevertex)
  Evaluates a vertex attribute at the subdivision limit surface using Open Subdiv.
- [osd_lookupface](../subdivision-surfaces/osd_lookupface)
  Outputs the Houdini face and UV coordinates corresponding to the given coordinates on an OSD patch.
- [osd_lookuppatch](../subdivision-surfaces/osd_lookuppatch)
  Outputs the OSD patch and UV coordinates corresponding to the given coordinates on a Houdini polygon face.
- [osd_patchcount](../subdivision-surfaces/osd_patchcount)
- [osd_patches](../subdivision-surfaces/osd_patches)
  Returns a list of patch IDs for the patches in a subdivision hull.

Tetrahedrons

## tet_group

- [tet_adjacent](../tetrahedrons/tet_adjacent)
  Returns primitive number of an adjacent tetrahedron.
- [tet_faceindex](../tetrahedrons/tet_faceindex)
  Returns vertex indices of each face of a tetrahedron.

Texturing

## texture_group

- [colormap](../texturing/colormap)
  Looks up a (filtered) color from a texture file.
- [depthmap](../texturing/depthmap)
  The depthmap functions work on an image which was rendered as a
  z-depth image from mantra.
- [environment](../texturing/environment)
  Returns the color of the environment texture.
- [expand_udim](../texturing/expand_udim)
  Perform UDIM or UVTILE texture filename expansion.
- [has_udim](../texturing/has_udim)
  Test string for UDIM or UVTILE patterns.
- [importance_remap](../texturing/importance_remap)
  Remaps a texture coordinate to another coordinate in the map to optimize sampling of brighter areas.
- [ocean_sample](../texturing/ocean_sample)
  Evaluates an ocean spectrum and samples the result at a given time and location.
- [ptexture](../texturing/ptexture)
  Computes a filtered sample from a ptex texture map. Use texture instead.
- [rawcolormap](../texturing/rawcolormap)
  Looks up an unfiltered color from a texture file.
- [shadowmap](../texturing/shadowmap)
  The shadowmap function will treat the shadow map as if the image were
  rendered from a light source.
- [teximport](../texturing/teximport)
  Imports attributes from texture files.
- [texprintf](../texturing/texprintf)
  Similar to sprintf, but does expansion of UDIM or UVTILE texture filename expansion.
- [texture](../texturing/texture)
  Computes a filtered sample of the texture map specified.

Transforms and Space

## transform_group

- [dihedral](../transforms-and-space/dihedral)
  Computes the rotation matrix or quaternion which rotates the vector a onto the vector b.
- [fromNDC](fromNDC.html)
  Transforms a position from normal device coordinates to the
  coordinates in the appropriate space.
- [getpackedtransform](../transforms-and-space/getpackedtransform)
  Gets the transform of a packed primitive.
- [getspace](../transforms-and-space/getspace)
  Returns a transform from one space to another.
- [instance](../transforms-and-space/instance)
  Creates an instance transform matrix.
- [lookat](../transforms-and-space/lookat)
  Computes a rotation matrix or angles to orient the negative z-axis along the vector (to-from) under the transformation.
- [maketransform](../transforms-and-space/maketransform)
  Builds a 3×3 or 4×4 transform matrix.
- [ndcdepth](../transforms-and-space/ndcdepth)
  Returns the camera space z-depth of the NDC z-depth value.
- [ntransform](../transforms-and-space/ntransform)
  Transforms a normal vector.
- [orthographic](../transforms-and-space/orthographic)
  Create an orthographic projection matrix.
- [ow_nspace](../transforms-and-space/ow_nspace)
  Transforms a normal vector from Object to World space.
- [ow_space](../transforms-and-space/ow_space)
  Transforms a position value from Object to World space.
- [ow_vspace](../transforms-and-space/ow_vspace)
  Transforms a direction vector from Object to World space.
- [packedtransform](../transforms-and-space/packedtransform)
  Transforms a packed primitive.
- [perspective](../transforms-and-space/perspective)
  Create a perspective projection matrix.
- [polardecomp](../transforms-and-space/polardecomp)
  Computes the polar decomposition of a matrix.
- [prerotate](../transforms-and-space/prerotate)
  Applies a pre rotation to the given matrix.
- [prescale](../transforms-and-space/prescale)
  Prescales the given matrix in three directions simultaneously (X, Y, Z -
  given by the components of the scale_vector).
- [pretranslate](../transforms-and-space/pretranslate)
  Pretranslates a matrix by a vector.
- [ptransform](../transforms-and-space/ptransform)
  Transforms a vector from one space to another.
- [rotate](../transforms-and-space/rotate)
  Applies a rotation to the given matrix.
- [rotate_x_to](../transforms-and-space/rotate_x_to)
  Rotates a vector by a rotation that would bring the x-axis to a given direction.
- [scale](../transforms-and-space/scale)
  Scales the given matrix in three directions simultaneously (X, Y, Z -
  given by the components of the scale_vector).
- [setpackedtransform](../transforms-and-space/setpackedtransform)
  Sets the transform of a packed primitive.
- [smoothrotation](../transforms-and-space/smoothrotation)
  Returns the closest equivalent Euler rotations to a reference rotation.
- [solveconstraint](../transforms-and-space/solveconstraint)
  Applies an inverse kinematics algorithm to a skeleton.
- [solvecurve](../transforms-and-space/solvecurve)
  Applies a curve inverse kinematics algorithm to a skeleton.
- [solvefbik](../transforms-and-space/solvefbik)
  Applies a full-body inverse kinematics algorithm to a skeleton.
- [solveik](../transforms-and-space/solveik)
  Applies an inverse kinematics algorithm to a skeleton.
- [solvephysfbik](../transforms-and-space/solvephysfbik)
  Applies a full-body inverse kinematics algorithm to a skeleton, with optional control over the center of mass.
- [toNDC](toNDC.html)
  Transforms a position into normal device coordinates.
- [translate](../transforms-and-space/translate)
  Translates a matrix by a vector.
- [tw_nspace](../transforms-and-space/tw_nspace)
  Transforms a normal vector from Texture to World space.
- [tw_space](../transforms-and-space/tw_space)
  Transforms a position value from Texture to World space.
- [tw_vspace](../transforms-and-space/tw_vspace)
  Transforms a direction vector from Texture to World space.
- [vtransform](../transforms-and-space/vtransform)
  Transforms a directional vector.
- [wo_nspace](../transforms-and-space/wo_nspace)
  Transforms a normal vector from World to Object space.
- [wo_space](../transforms-and-space/wo_space)
  Transforms a position value from World to Object space.
- [wo_vspace](../transforms-and-space/wo_vspace)
  Transforms a direction vector from World to Object space.
- [wt_nspace](../transforms-and-space/wt_nspace)
  Transforms a normal vector from World to Texture space.
- [wt_space](../transforms-and-space/wt_space)
  Transforms a position value from World to Texture space.
- [wt_vspace](../transforms-and-space/wt_vspace)
  Transforms a direction vector from World to Texture space.

usd

## usd_group

- [usd_addattrib](../usd/usd_addattrib)
  Creates an attribute of a given type on a primitive.
- [usd_addcollectionexclude](../usd/usd_addcollectionexclude)
  Excludes an object from the collection
- [usd_addcollectioninclude](../usd/usd_addcollectioninclude)
  Includes an object in the collection
- [usd_addinversetotransformorder](../usd/usd_addinversetotransformorder)
  Appends an inversed transform operation to the primitive’s transform order
- [usd_addorient](../usd/usd_addorient)
  Applies a quaternion orientation to the primitive
- [usd_addprim](../usd/usd_addprim)
  Creates a primitive of a given type.
- [usd_addprimvar](../usd/usd_addprimvar)
  Creates a primvar of a given type on a primitive.
- [usd_addrelationshiptarget](../usd/usd_addrelationshiptarget)
  Adds a target to the primitive’s relationship
- [usd_addrotate](../usd/usd_addrotate)
  Applies a rotation to the primitive
- [usd_addscale](../usd/usd_addscale)
  Applies a scale to the primitive
- [usd_addschemaattrib](../usd/usd_addschemaattrib)
  Creates an attribute of a given type on a primitive, and sets the custom metadata flag to False.
- [usd_addtotransformorder](../usd/usd_addtotransformorder)
  Appends a transform operation to the primitive’s transform order
- [usd_addtransform](../usd/usd_addtransform)
  Applies a transformation to the primitive
- [usd_addtranslate](../usd/usd_addtranslate)
  Applies a translation to the primitive
- [usd_applyapi](../usd/usd_applyapi)
  Apply an API schema to a primitive.
- [usd_attrib](../usd/usd_attrib)
  Reads the value of an attribute from the USD primitive.
- [usd_attribelement](../usd/usd_attribelement)
  Reads the value of an element from an array attribute.
- [usd_attriblen](../usd/usd_attriblen)
  Returns the length of the array attribute.
- [usd_attribnames](../usd/usd_attribnames)
  Returns the names of the attributes available on the primitive.
- [usd_attribsize](../usd/usd_attribsize)
  Returns the tuple size of the attribute.
- [usd_attribtimesamples](../usd/usd_attribtimesamples)
  Returns the time codes at which the attribute values are authored.
- [usd_attribtypename](../usd/usd_attribtypename)
  Returns the name of the attribute type.
- [usd_blockattrib](../usd/usd_blockattrib)
  Blocks the attribute.
- [usd_blockprimvar](../usd/usd_blockprimvar)
  Blocks the primvar.
- [usd_blockprimvarindices](../usd/usd_blockprimvarindices)
  Blocks the primvar.
- [usd_blockrelationship](../usd/usd_blockrelationship)
  Blocks the primitive’s relationship
- [usd_boundmaterialpath](../usd/usd_boundmaterialpath)
  Returns the material path bound to a given primitive.
- [usd_childnames](../usd/usd_childnames)
  Returns the names of the primitive’s children.
- [usd_clearmetadata](../usd/usd_clearmetadata)
  Clears the value of the metadata.
- [usd_cleartransformorder](../usd/usd_cleartransformorder)
  Clears the primitive’s transform order
- [usd_collectioncomputedpaths](../usd/usd_collectioncomputedpaths)
  Obtains the list of all objects that belong to the collection
- [usd_collectioncontains](../usd/usd_collectioncontains)
  Checks if an object path belongs to the collection
- [usd_collectionexcludes](../usd/usd_collectionexcludes)
  Obtains the object paths that are in the collection’s exclude list
- [usd_collectionexpansionrule](../usd/usd_collectionexpansionrule)
  Obtains the collection’s expansion rule
- [usd_collectionincludes](../usd/usd_collectionincludes)
  Obtains the object paths that are in the collection’s include list
- [usd_drawmode](../usd/usd_drawmode)
  Returns the primitive’s draw mode.
- [usd_findtransformname](../usd/usd_findtransformname)
  Retrurns primitive’s transform operation full name for given the transform operation suffix
- [usd_flattenediprimvar](../usd/usd_flattenediprimvar)
  Reads the value of a flattened primvar directly from the USD primitive or from USD primitive’s ancestor.
- [usd_flattenediprimvarelement](../usd/usd_flattenediprimvarelement)
  Reads an element value of a flattened array primvar directly from the USD primitive or from its ancestor.
- [usd_flattenedprimvar](../usd/usd_flattenedprimvar)
  Reads the value of an flattened primvar directly from the USD primitive.
- [usd_flattenedprimvarelement](../usd/usd_flattenedprimvarelement)
  Reads an element value of a flattened array primvar directly from a USD primitive.
- [usd_getbbox](../usd/usd_getbbox)
  Sets two vectors to the minimum and maximum corners of the bounding box for the primitive.
- [usd_getbbox_center](../usd/usd_getbbox_center)
  Returns the center of the bounding box for the primitive.
- [usd_getbbox_max](../usd/usd_getbbox_max)
  Returns the maximum of the bounding box for the primitive.
- [usd_getbbox_min](../usd/usd_getbbox_min)
  Returns the minimum of the bounding box for the primitive.
- [usd_getbbox_size](../usd/usd_getbbox_size)
  Returns the size of the bounding box for the primitive.
- [usd_getbounds](../usd/usd_getbounds)
  Obtains the primitive’s bounds
- [usd_getpointinstancebounds](../usd/usd_getpointinstancebounds)
  Obtains the primitive’s bounds
- [usd_hasapi](../usd/usd_hasapi)
  Checks if the primitive adheres to the given API.
- [usd_haspayload](../usd/usd_haspayload)
  Checks if the primitive adheres to the given API.
- [usd_iprimvar](../usd/usd_iprimvar)
  Reads the value of a primvar directly from the USD primitive or from USD primitive’s ancestor.
- [usd_iprimvarelement](../usd/usd_iprimvarelement)
  Reads the value of an element from the array primvar directly from the USD primitive or from USD primitive’s ancestor.
- [usd_iprimvarelementsize](../usd/usd_iprimvarelementsize)
  Returns the element size of the primvar directly from the USD primitive or from USD primitive’s ancestor.
- [usd_iprimvarindices](../usd/usd_iprimvarindices)
  Returns the index array of an indexed primvar directly on the USD primitive or on USD primitive’s ancestor.
- [usd_iprimvarinterpolation](../usd/usd_iprimvarinterpolation)
  Returns the element size of the primvar directly on the USD primitive or on USD primitive’s ancestor.
- [usd_iprimvarlen](../usd/usd_iprimvarlen)
  Returns the length of the array primvar directly on the USD primitive or on USD primitive’s ancestor.
- [usd_iprimvarnames](../usd/usd_iprimvarnames)
  Returns the names of the primvars available directly on the given USD primitive or on USD primitive’s ancestor.
- [usd_iprimvarsize](../usd/usd_iprimvarsize)
  Returns the tuple size of the primvar directly on the USD primitive or on USD primitive’s ancestor.
- [usd_iprimvartimesamples](../usd/usd_iprimvartimesamples)
  Returns the time codes at which the primvar values are authored directly on the given primitive or on its ancestor.
- [usd_iprimvartypename](../usd/usd_iprimvartypename)
  Returns the name of the primvar type found on the given primitive or its ancestor.
- [usd_isabstract](../usd/usd_isabstract)
  Checks if the primitive is abstract.
- [usd_isactive](../usd/usd_isactive)
  Checks if the primitive is active.
- [usd_isarray](../usd/usd_isarray)
  Checks if the attribute is an array.
- [usd_isarrayiprimvar](../usd/usd_isarrayiprimvar)
  Checks if there is an array primvar directly on the USD primitive or on USD primitive’s ancestor.
- [usd_isarraymetadata](../usd/usd_isarraymetadata)
  Checks if the given metadata is an array.
- [usd_isarrayprimvar](../usd/usd_isarrayprimvar)
  Checks if there is an array primvar directly on the USD primitive.
- [usd_isattrib](../usd/usd_isattrib)
  Checks if the primitive has an attribute by the given name.
- [usd_iscollection](../usd/usd_iscollection)
  Checks if the collection exists.
- [usd_iscollectionpath](../usd/usd_iscollectionpath)
  Checks if the path is a valid collection path.
- [usd_isindexediprimvar](../usd/usd_isindexediprimvar)
  Checks if there is an indexed primvar directly on the USD primitive or on USD primitive’s ancestor.
- [usd_isindexedprimvar](../usd/usd_isindexedprimvar)
  Checks if there is an indexed primvar directly on the USD primitive.
- [usd_isinstance](../usd/usd_isinstance)
  Checks if the primitive is an instance.
- [usd_isiprimvar](../usd/usd_isiprimvar)
  Checks if the primitive or its ancestor has a primvar of the given name.
- [usd_iskind](../usd/usd_iskind)
  Checks if the primitive is of a given kind.
- [usd_ismetadata](../usd/usd_ismetadata)
  Checks if the primitive has metadata by the given name.
- [usd_ismodel](../usd/usd_ismodel)
  Checks if the primitive is a model.
- [usd_isprim](../usd/usd_isprim)
  Checks if the path refers to a valid primitive.
- [usd_isprimvar](../usd/usd_isprimvar)
  Checks if the primitive has a primvar of the given name.
- [usd_isrelationship](../usd/usd_isrelationship)
  Checks if the primitive has a relationship by the given name.
- [usd_isstage](../usd/usd_isstage)
  Checks if the stage is valid.
- [usd_istransformreset](../usd/usd_istransformreset)
  Checks if the primitive transform is reset
- [usd_istype](../usd/usd_istype)
  Checks if the primitive is of a given type.
- [usd_isvisible](../usd/usd_isvisible)
  Checks if the primitive is visible.
- [usd_kind](../usd/usd_kind)
  Returns the primitive’s kind.
- [usd_localtransform](../usd/usd_localtransform)
  Obtains the primitive’s local transform
- [usd_makeattribpath](../usd/usd_makeattribpath)
  Constructs an attribute path from a primitive path and an attribute name.
- [usd_makecollectionpath](../usd/usd_makecollectionpath)
  Constructs a collection path from a primitive path and a collection name.
- [usd_makepropertypath](../usd/usd_makepropertypath)
  Constructs an property path from a primitive path and an property name.
- [usd_makerelationshippath](../usd/usd_makerelationshippath)
  Constructs an relationship path from a primitive path and a relationship name.
- [usd_makevalidprimname](../usd/usd_makevalidprimname)
  Forces a string to conform to the rules for naming USD primitives.
- [usd_makevalidprimpath](../usd/usd_makevalidprimpath)
  Forces a string to conform to the rules for paths to USD primitives.
- [usd_metadata](../usd/usd_metadata)
  Reads the value of metadata from the USD object.
- [usd_metadataelement](../usd/usd_metadataelement)
  Reads the value of an element from the array metadata.
- [usd_metadatalen](../usd/usd_metadatalen)
  Returns the length of the array metadata.
- [usd_metadatanames](../usd/usd_metadatanames)
  Returns the names of the metadata available on the object.
- [usd_name](../usd/usd_name)
  Returns the name of the primitive.
- [usd_parentpath](../usd/usd_parentpath)
  Returns the path of the primitive’s parent.
- [usd_pointinstance_getbbox](../usd/usd_pointinstance_getbbox)
  Sets two vectors to the minimum and maximum corners of the bounding box for the given instance inside point instancer.
- [usd_pointinstance_getbbox_center](../usd/usd_pointinstance_getbbox_center)
  Returns the center of the bounding box for the instance inside a point instancer primitive.
- [usd_pointinstance_getbbox_max](../usd/usd_pointinstance_getbbox_max)
  Returns the maximum position of the bounding box for the instance inside a point instancer primitive.
- [usd_pointinstance_getbbox_min](../usd/usd_pointinstance_getbbox_min)
  Returns the minimum position of the bounding box for the instance inside a point instancer primitive.
- [usd_pointinstance_getbbox_size](../usd/usd_pointinstance_getbbox_size)
  Returns the size of the bounding box for the instance inside a point instancer primitive.
- [usd_pointinstance_relbbox](../usd/usd_pointinstance_relbbox)
  Returns the relative position of the point given with respect to the bounding box of the geometry.
- [usd_pointinstancetransform](../usd/usd_pointinstancetransform)
  Obtains the transform for the given point instance
- [usd_primvar](../usd/usd_primvar)
  Reads the value of a primvar directly from the USD primitive.
- [usd_primvarattribname](../usd/usd_primvarattribname)
  Returns the namespaced attribute name for the given primvar.
- [usd_primvarelement](../usd/usd_primvarelement)
  Reads the value of an element from the array primvar directly from the USD primitive.
- [usd_primvarelementsize](../usd/usd_primvarelementsize)
  Returns the element size of the primvar directly from the USD primitive.
- [usd_primvarindices](../usd/usd_primvarindices)
  Returns the index array of an indexed primvar directly on the USD primitive.
- [usd_primvarinterpolation](../usd/usd_primvarinterpolation)
  Returns the element size of the primvar directly on the USD primitive.
- [usd_primvarlen](../usd/usd_primvarlen)
  Returns the length of the array primvar directly on the USD primitive.
- [usd_primvarnames](../usd/usd_primvarnames)
  Returns the names of the primvars available on the given USD primitive.
- [usd_primvarsize](../usd/usd_primvarsize)
  Returns the tuple size of the primvar directly on the USD primitive.
- [usd_primvartimesamples](../usd/usd_primvartimesamples)
  Returns the time codes at which the primvar values are authored directly on
  the given primitive.
- [usd_primvartypename](../usd/usd_primvartypename)
  Returns the name of the primvar type found on the given primitive.
- [usd_purpose](../usd/usd_purpose)
  Returns the primitive’s purpose.
- [usd_relationshipforwardedtargets](../usd/usd_relationshipforwardedtargets)
  Obtains the relationship forwarded targets.
- [usd_relationshipnames](../usd/usd_relationshipnames)
  Returns the names of the relationships available on the primitive.
- [usd_relationshiptargets](../usd/usd_relationshiptargets)
  Obtains the relationship targets.
- [usd_relbbox](../usd/usd_relbbox)
  Returns the relative position of the point given with respect to the bounding box of the geometry.
- [usd_removerelationshiptarget](../usd/usd_removerelationshiptarget)
  Remove a target from the primitive’s relationship
- [usd_setactive](../usd/usd_setactive)
  Sets the primitive active state.
- [usd_setattrib](../usd/usd_setattrib)
  Sets the value of an attribute.
- [usd_setattribelement](../usd/usd_setattribelement)
  Sets the value of an element in an array attribute.
- [usd_setcollectionexcludes](../usd/usd_setcollectionexcludes)
  Sets the excludes list on the collection
- [usd_setcollectionexpansionrule](../usd/usd_setcollectionexpansionrule)
  Sets the expansion rule on the collection
- [usd_setcollectionincludes](../usd/usd_setcollectionincludes)
  Sets the includes list on the collection
- [usd_setdrawmode](../usd/usd_setdrawmode)
  Sets the primitive’s draw mode.
- [usd_setkind](../usd/usd_setkind)
  Sets the primitive’s kind.
- [usd_setmetadata](../usd/usd_setmetadata)
  Sets the value of an metadata.
- [usd_setmetadataelement](../usd/usd_setmetadataelement)
  Sets the value of an element in an array metadata.
- [usd_setprimvar](../usd/usd_setprimvar)
  Sets the value of a primvar.
- [usd_setprimvarelement](../usd/usd_setprimvarelement)
  Sets the value of an element in an array primvar.
- [usd_setprimvarelementsize](../usd/usd_setprimvarelementsize)
  Sets the element size of a primvar.
- [usd_setprimvarindices](../usd/usd_setprimvarindices)
  Sets the indices for the given primvar.
- [usd_setprimvarinterpolation](../usd/usd_setprimvarinterpolation)
  Sets the interpolation of a primvar.
- [usd_setpurpose](../usd/usd_setpurpose)
  Sets the primitive’s purpose.
- [usd_setrelationshiptargets](../usd/usd_setrelationshiptargets)
  Sets the targets in the primitive’s relationship
- [usd_settransformorder](../usd/usd_settransformorder)
  Sets the primitive’s transform order
- [usd_settransformreset](../usd/usd_settransformreset)
  Sets/clears the primitive’s transform reset flag
- [usd_setvariantselection](../usd/usd_setvariantselection)
  Sets the selected variant in the given variant set.
- [usd_setvisibility](../usd/usd_setvisibility)
  Configures the primitive to be visible, invisible, or to inherit visibility
  from the parent.
- [usd_setvisible](../usd/usd_setvisible)
  Makes the primitive visible or invisible.
- [usd_specifier](../usd/usd_specifier)
  Returns the primitive’s specifier.
- [usd_transformname](../usd/usd_transformname)
  Constructs a full name of a transform operation
- [usd_transformorder](../usd/usd_transformorder)
  Obtains the primitive’s transform order
- [usd_transformsuffix](../usd/usd_transformsuffix)
  Extracts the transform operation suffix from the full name
- [usd_transformtype](../usd/usd_transformtype)
  Infers the transform operation type from the full name
- [usd_typename](../usd/usd_typename)
  Returns the name of the primitive’s type.
- [usd_uniquetransformname](../usd/usd_uniquetransformname)
  Constructs a unique full name of a transform operation
- [usd_variants](../usd/usd_variants)
  Returns the variants belonging to the given variant set on a primitive.
- [usd_variantselection](../usd/usd_variantselection)
  Returns the currently selected variant in a given variant set.
- [usd_variantsets](../usd/usd_variantsets)
  Returns the variant sets available on a primitive.
- [usd_worldtransform](../usd/usd_worldtransform)
  Obtains the primitive’s world transform

Utility

## utility_group

- [assert_enabled](../utility/assert_enabled)
  Returns 1 if the VEX assertions are enabled (see HOUDINI_VEX_ASSERT) or 0 if assertions are disabled. Used the implement the assert macro.
- [assign](../utility/assign)
  An efficient way of extracting the components of a vector or matrix into float variables.
- [error](../utility/error)
  Reports a custom runtime VEX error.
- [forpoints](../utility/forpoints)
- [getcomp](../utility/getcomp)
  Extracts a single component of a vector type, matrix type, or array.
- [isbound](../utility/isbound)
  Parameters in VEX can be overridden by geometry attributes (if the attributes exist on the surface being rendered).
- [isvarying](../utility/isvarying)
  Check whether a VEX variable is varying or uniform.
- [opend](../utility/opend)
  Ends a long operation.
- [opstart](../utility/opstart)
  Start a long operation.
- [pack_inttosafefloat](../utility/pack_inttosafefloat)
  Reversibly packs an integer into a finite, non-denormal float.
- [print_once](../utility/print_once)
  Prints a message only once, even in a loop.
- [printf](../utility/printf)
  Prints values to the console which started the VEX program.
- [ramp_lookup](../utility/ramp_lookup)
  Evaluates a Houdini-style ramp at a specific location.
- [ramp_pack](../utility/ramp_pack)
  Packs a set of arrays into a string-encoded ramp.
- [ramp_unpack](../utility/ramp_unpack)
  Unpacks a string-encoded ramp into a set of arrays.
- [select](../utility/select)
  Returns one of two parameters based on a conditional.
- [set](../utility/set)
  Creates a new value based on its arguments, such as creating a vector from its components.
- [setcomp](../utility/setcomp)
  Sets a single component of a vector or matrix type, or an item in an array.
- [sleep](../utility/sleep)
  Yields processing for a certain number of milliseconds.
- [swizzle](../utility/swizzle)
  Rearranges the components of a vector.
- [unpack_intfromsafefloat](../utility/unpack_intfromsafefloat)
  Reverses the packing of pack_inttosafefloat to get back the original integer.
- [warning](../utility/warning)
  Reports a custom runtime VEX warning.

volume

## volume_group

- [volume](../volume/volume)
  Returns the volume of the microvoxel containing a variable such as P.
- [volumecubicsample](../volume/volumecubicsample)
  Samples the volume primitive’s value.
- [volumecubicsamplev](../volume/volumecubicsamplev)
  Samples the volume primitive’s value.
- [volumegradient](../volume/volumegradient)
  Calculates the volume primitive’s gradient.
- [volumeindex](../volume/volumeindex)
  Gets the value of a specific voxel.
- [volumeindexactive](../volume/volumeindexactive)
  Gets the active setting of a specific voxel.
- [volumeindexi](../volume/volumeindexi)
  Gets the integer value of a specific voxel.
- [volumeindexorigin](../volume/volumeindexorigin)
  Gets the index of the bottom left of a volume primitive.
- [volumeindexp](../volume/volumeindexp)
  Gets the vector4 value of a specific voxel.
- [volumeindextopos](../volume/volumeindextopos)
  Converts a volume voxel index into a position.
- [volumeindexu](../volume/volumeindexu)
  Gets the vector2 value of a specific voxel.
- [volumeindexv](../volume/volumeindexv)
  Gets the vector value of a specific voxel.
- [volumepostoindex](../volume/volumepostoindex)
  Converts a position into a volume voxel index.
- [volumeres](../volume/volumeres)
  Gets the resolution of a volume primitive.
- [volumesample](../volume/volumesample)
  Samples the volume primitive’s float value.
- [volumesamplei](../volume/volumesamplei)
  Samples the volume primitive’s integer value.
- [volumesamplep](../volume/volumesamplep)
  Samples the volume primitive’s vector4 value.
- [volumesampleu](../volume/volumesampleu)
  Samples the volume primitive’s vector2 value.
- [volumesamplev](../volume/volumesamplev)
  Samples the volume primitive’s vector value.
- [volumesmoothsample](../volume/volumesmoothsample)
  Samples the volume primitive’s value.
- [volumesmoothsamplev](../volume/volumesmoothsamplev)
  Samples the volume primitive’s value.
- [volumetypeid](../volume/volumetypeid)
  Gets the typeid of the data of a volume or VDB primitive.
- [volumevoxeldiameter](../volume/volumevoxeldiameter)
  Computes the approximate diameter of a voxel.

weightarray

## weightarray_group

- [weightarrayblend](../weightarray/weightarrayblend)
  Blends an existing name/weight array pair with another array or named item.
- [weightarrayfromname](../weightarray/weightarrayfromname)
  Initializes an index array and weight array pair with a single named entry.
- [weightarraynormalize](../weightarray/weightarraynormalize)
  Normalizes an array of floats so it sums to 1.0.
- [weightarraythreshold](../weightarray/weightarraythreshold)
  Discards any weights below a threshold from an name/weight array pair.
