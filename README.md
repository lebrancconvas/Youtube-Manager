# Youtube-Manager

## Overview

Utility Tool for managing Youtube Data.

## Feature

- getTotalVideoOnChannel(channelID: string): Promise `<number>`: Get Number of Videos (Estimated) of target Youtube Channel.
- getAllVideoTitleAndURLs(channelID: string): Promise `<IVideoInformation[]>`: Get an array of Video Information that contain: id (number), title (string), url (string).
- fullScroll(page: Page, channelID: string): Promise `<void>`: Scroll the video section on Youtube Channel page until cannot scroll.

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
