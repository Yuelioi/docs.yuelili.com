---
title: Track object
---
# Track object

`app.project.sequences[index].audioTracks[index]`

`app.project.sequences[index].videoTracks[index]`

#### Description

The Track object represents a video or audio track, within a [Sequence object](../sequence).

---

## Attributes

### Track.clips

`app.project.sequences[index].audioTracks[index].clips`

`app.project.sequences[index].videoTracks[index].clips`

#### Description

An array of [Track item](../../item/trackitem) objects, contained within the track, in temporal order.

#### Type

[TrackItemCollection object](../../collection/trackitemcollection), read-only;

---

### Track.id

`app.project.sequences[index].audioTracks[index].id`

`app.project.sequences[index].videoTracks[index].id`

#### Description

This is the ordinal assigned to the track, upon creation.

#### Type

Integer, read-only.

---

### Track.mediaType

`app.project.sequences[index].audioTracks[index].mediaType`

`app.project.sequences[index].videoTracks[index].mediaType`

#### Description

The type of media, contained in this track.

#### Type

String, read-only. One of:

- `Audio`
- `Video`

---

### Track.name

`app.project.sequences[index].audioTracks[index].name`

`app.project.sequences[index].videoTracks[index].name`

#### Description

The name of the track.

#### Type

String; read-only.

---

### Track.transitions

`app.project.sequences[index].audioTracks[index].transitions`

`app.project.sequences[index].videoTracks[index].transitions`

#### Description

An array of transitions objects, contained within the track, in temporal order.

#### Type

[TrackItemCollection object](../../collection/trackitemcollection), read-only;

---

## Methods

### Track.insertClip()

`app.project.sequences[index].audioTracks[index].insertClip(projectItem, time, vTrackIndex, aTrackIndex)`

`app.project.sequences[index].videoTracks[index].insertClip(projectItem, time, vTrackIndex, aTrackIndex)`

#### Description

Adds a 'clip' (media segment from a [ProjectItem object](../../item/projectitem)) to the track, at the specified time. Media will be inserted, at that time.

#### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `projectItem` | [ProjectItem object](../../item/projectitem) | A project item from which to get media. |
| `time` | String | The time at which to add project item, in ticks. |
| `vTrackIndex` | Integer | The (zero-based) track index, into which to insert video. |
| `aTrackIndex` | Integer | The (zero-based) track index, into which to insert audio. |

#### Returns

None.

---

### Track.isMuted()

`app.project.sequences[index].audioTracks[index].isMuted()`

`app.project.sequences[index].videoTracks[index].isMuted()`

#### Description

Retrieves the current mute state, of the track.

#### Parameters

None.

#### Returns

Returns `true` if track is currently muted; `false` if not.

---

### Track.overwriteClip()

`app.project.sequences[index].audioTracks[index].overwriteClip(projectItem, time)`

`app.project.sequences[index].videoTracks[index].overwriteClip(projectItem, time)`

#### Description

Adds a 'clip' (media segment from a [ProjectItem object](../../item/projectitem)) to the track, at the specified time. This will overwrite any existing media, at that time.

#### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `projectItem` | [ProjectItem object](../../item/projectitem) | A project item from which to get media. |
| `time` | String | The time at which to add project item, in ticks. |

#### Returns

Returns `true`.

---

### Track.setMute()

`app.project.sequences[index].audioTracks[index].setMute(isMuted)`

`app.project.sequences[index].videoTracks[index].setMute(isMuted)`

#### Description

Sets the mute state, of the track.

#### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `isMuted` | Integer | If `1`, mute the track. If `0`, the track will be unmuted. |

#### Returns

Returns `0` if successful.
