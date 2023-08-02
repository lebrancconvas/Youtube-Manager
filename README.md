# Youtube-Manager

## Overview

Utility Tool for managing Youtube Data.

## Feature

- [getTotalVideoOnChannel](https://github.com/lebrancconvas/Youtube-Manager/blob/main/src/utils/getTotalVideoOnChannel.ts) : Get Number of Videos (Estimated) of target Youtube Channel.
  ```typescript
  getTotalVideoOnChannel(channelID: string): Promise<number>
  ```
- [getAllVideoTitleAndURLs](https://github.com/lebrancconvas/Youtube-Manager/blob/main/src/utils/getAllVideoTitleAndURLs.ts) : Get an array of Video Information that contain: id (number), title (string), url (string).
  ```typescript
  getAllVideoTitleAndURLs(channelID: string): Promise<IVideoInformation>
  ```
- [fullScroll](https://github.com/lebrancconvas/Youtube-Manager/blob/main/src/utils/fullScroll.ts) : Scroll the video section on Youtube Channel page until cannot scroll.
  ```typescript
  fullScroll(page: Page, channelID: string): Promise<void>
  ```

## Installation

- Using npm
  ```shell
  npm install ytmanager
  ```
- Using yarn
  ```shell
  yarn add ytmanager
  ```
- Using pnpm
  ```shell
  pnpm add ytmanager
  ```
