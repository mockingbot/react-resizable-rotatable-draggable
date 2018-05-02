import styled from 'styled-components'
import React from 'react'

export default styled.div`
  position: absolute;
  border: 1px solid #eb5648;

  .square {
    position: absolute;
    width: 7px;
    height: 7px;
    background: white;
    border: 1px solid #eb5648;
    border-radius: 1px;
  }

  .resizable-handler {
    position: absolute;
    width: 14px;
    height: 14px;
    cursor: pointer;
    z-index: 1;

    &.tl,
    &.t,
    &.tr {
      top: -7px;
    }

    &.tl,
    &.l,
    &.bl {
      left: -7px;
    }

    &.bl,
    &.b,
    &.br {
      bottom: -7px;
    }

    &.br,
    &.r,
    &.tr {
      right: -7px;
    }

    &.l,
    &.r {
      margin-top: -7px;
    }

    &.t,
    &.b {
      margin-left: -7px;
    }
  }

  .rotate {
    position: absolute;
    cursor: pointer;
    left: 50%;
    top: -26px;
    transform: translateX(-50%);

    & i {
      font-size: 18px;
      display: inline-block;
      width: 1em;
      height: 1em;
      background-size: 1em 1em;
      background-repeat: no-repeat;
      background-position: center center;
      background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTRweCIgaGVpZ2h0PSIxNHB4IiB2aWV3Qm94PSIwIDAgMTQgMTQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cG9seWdvbiBpZD0icGF0aC0xIiBwb2ludHM9IjguMzMzMzIyNDggNS40MjIyMjQ5MyA3Ljk5OTk4OTE1IDAuNDg4ODkxNjAyIDExLjIzOTc3NDIgMi41MDI4MTIwMiAxMi45MzMzMjI1IDMuNTU1NTU4MjciPjwvcG9seWdvbj4KICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBtYXNrQ29udGVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeD0iMCIgeT0iMCIgd2lkdGg9IjQuOTMzMzMzMzMiIGhlaWdodD0iNC45MzMzMzMzMyIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgIDwvbWFzaz4KICAgIDwvZGVmcz4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NzIuMDAwMDAwLCAtMjk4LjAwMDAwMCkiIHN0cm9rZT0iI0Y1NUQ1NCI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC00IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1ODYuMDAwMDAwLCAyOTcuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMy1Db3B5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4NS4wMDAwMDAsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTEzMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi4wMDAwMDAsIDIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLDkuMTkyNzg1NSBDMC4xMjYyMzk0MTgsOS4zOTMyNTY5OCAwLjI2NDAxNTE2Nyw5LjU4NTczMzA4IDAuNDEyMzk1NTYyLDkuNzY5MjgyMTMgQzEuNTEyMzI5ODUsMTEuMTI5OTE5MyAzLjE5NTAwNjU3LDEyIDUuMDgwOTAxNTIsMTIgQzguMzk0NjEwMDIsMTIgMTEuMDgwOTAxNSw5LjMxMzcwODUgMTEuMDgwOTAxNSw2IEMxMS4wODA5MDE1LDIuNjg2MjkxNSA4LjM5NDYxMDAyLDAgNS4wODA5MDE1MiwwIEMzLjE5MjA4MDY3LDAgMS41MDcxMDkxMSwwLjg3Mjc4MjU4NiAwLjQwNzI4MDIzNiwyLjIzNzA1NDM3IiBpZD0iT3ZhbC02IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1LjU0MDQ1MSwgNi4wMDAwMDApIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTUuNTQwNDUxLCAtNi4wMDAwMDApICI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGlkPSJUcmlhbmdsZS05LXBhdGgiIG1hc2s9InVybCgjbWFzay0yKSIgc3Ryb2tlLXdpZHRoPSIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMC40NjY2NTYsIDIuOTU1NTU4KSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0xMC40NjY2NTYsIC0yLjk1NTU1OCkgIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");
    }
  }

  .t,
  .tl,
  .tr {
    top: -3px;
  }

  .b,
  .bl,
  .br {
    bottom: -3px;
  }

  .r,
  .tr,
  .br {
    right: -3px;
  }

  .tl,
  .l,
  .bl {
    left: -3px;
  }

  .l,
  .r {
    top: 50%;
    margin-top: -3px;
  }

  .t,
  .b {
    left: 50%;
    margin-left: -3px;
  }
`
