# 📚 Chat Log Manager – SillyTavern 聊天记录管理插件

一个为 **SillyTavern** 打造的强大聊天记录管理工具，帮你轻松浏览、搜索、导出和批量操作所有角色的聊天记录。

> 🎯 **特色**：一键跳转到历史消息原文位置，批量导入/导出，全局内容搜索，深色/浅色主题，移动端适配。

---

## ✨ 功能亮点

- 📂 **按角色分组**：所有聊天按角色名称折叠/展开，一目了然。
- 🔍 **全局深层搜索**: 支持跨角色、跨窗口的全文搜索。采用高性能索引技术，即搜即得。
- 🎯 **深海锚点引擎 (Deep Anchor Engine)**: 点击搜索结果直接“跃迁”。支持跨角色自动切换、自动加载文件，并精准定位到消息原文位置，辅以爆闪高亮反馈。
- 📦 **极速批量操作**: 支持一键勾选多个会话，进行批量归档、批量删除或批量导出。
- 📄 **多格式导出**: 完美支持将聊天记录导出为 `Markdown`、`JSONL (酒馆原生格式)`、`TXT` 格式。
- 📥 **导入聊天记录**：支持 `.json` / `.jsonl` 格式文件（可多选），自动识别角色并写入存储。
- 🌓 **物理采样主题适配**: 独家采用屏幕颜色采样技术，完美适配酒馆数千款自定义主题，确保文字始终清晰可见。
- 📱 **全设备适配**: 针对 PC、平板、手机端进行了深度 UI 优化，支持触屏手势与响应式布局。
- 🚀 **高性能渲染**: 基于虚拟列表技术，即使有数万条聊天记录，内存占用极低且滚动依然丝滑。
- 📝 **消息预览**：点击会话即可在右侧预览消息列表（支持虚拟滚动，流畅查看超长对话）。
- 🎯 **一键跳转原文**：每条消息旁有定位按钮，自动切换到对应角色和聊天，并滚动到消息原始位置（支持动态渲染等待）。
- ☑️ **批量操作模式**：
  - 勾选多个会话，支持全选（可结合搜索结果筛选）。
  - 批量导出为 **Markdown / TXT / JSON** 格式。
  - 批量删除（含安全确认，自动避开正在使用的会话）。
- 🖱️ **可拖拽浮动按钮**：位置自动记忆（保存在 localStorage），不遮挡操作。

---

## 🚀 安装方法

### 方式一：通过 SillyTavern 扩展面板一键安装（推荐）

1. 打开 SillyTavern，进入 **扩展（Extensions）** 面板。
2. 在 **“Install from URL”** 输入框中粘贴以下地址：
https://github.com/px06427/st_consistency_anchor
3. 点击 **Install**，等待下载完成。
4. 刷新页面（或重启 SillyTavern），浮动按钮 📚 将出现在屏幕右下角。

### 方式二：手动下载

1. 从https://github.com/px06427/st_consistency_anchor)中下载最新版本的 ZIP 包。
2. 点击绿色的 **“Code”** 按钮，选择 **“Download ZIP”**。
3. 解压 ZIP 包，将解压后的文件夹重命名为 `chat-log-manager`（如果已命名则跳过）。
4. 将整个文件夹放入 SillyTavern 的 `plugins/` 目录中。
5. 重启 SillyTavern 或刷新页面。
---

## 📖 使用说明

1. **打开面板**：点击浮动 📚 按钮（可拖拽位置）。
2. **浏览记录**：左侧按角色分组，点击角色名展开/折叠，点击会话预览消息。
3. **搜索**：顶部搜索框输入关键词，结果会高亮并显示匹配片段。
4. **批量模式**：点击 ☑️ **批量** 按钮，左侧会出现复选框，勾选后可在右侧进行批量导出或删除。
5. **导出单会话**：在右侧预览区，点击 **📤 导出 ▾** 下拉菜单选择格式。
6. **导入记录**：点击 **📥 导入** 按钮，选择本地 `.json` / `.jsonl` 文件（可多选）。
7. **跳转原文**：在消息预览中，点击消息右上角的 🎯 按钮，自动切换到对应聊天并滚动定位。

> 💡 **提示**：浮动按钮位置会自动保存，下次打开保持不变。

---

## 🛠️ 技术规格

-   **框架**: Vue 3 + TypeScript
-   **状态管理**: Pinia
-   **构建工具**: Vite
-   **核心优化**: 
    -   `Virtual Scrolling` (解决海量数据卡顿)
    -   `Deep Link Routing` (跨角色状态机同步)
    -   `MutationObserver` (实时主题检测)
---

## 🤝 贡献与反馈

如果你遇到 Bug 或有功能建议，欢迎：
- [Issue]https://github.com/px06427/st_consistency_anchor/issues
- [Pull Request]https://github.com/px06427/st_consistency_anchorpulls

---

## 📄 许可证

本项目基于 **MIT License** 开源，详情见 [LICENSE](LICENSE) 文件。

---

## 📖 开发者的话

本项目旨在解决酒馆原生聊天记录管理困难的痛点。我花费了大量精力攻克了酒馆底层 API 切换角色时可能出现的“空窗口”和“回弹”问题，确保了跳转定位的绝对稳定性。

---

## 🙏 致谢

- 感谢 [SillyTavern](https://github.com/SillyTavern/SillyTavern) 提供优秀的交互平台。
- 感谢为我开发独立前端时提供参考的RE老师授权（https://github.com/rikkahub/rikkahub）
- 感谢所有使用和反馈的朋友们 ❤️

---

## <a name="features-en"></a> 🌟 Key Features (English)

-   **🔍 Global Deep Search**: Full-text search across all characters and chat files.
-   **🎯 Deep Anchor Engine**: One-click jump from search results to the original message. Includes auto-character switching and pinpoint scrolling with visual feedback.
-   **📦 Batch Processing**: Select multiple sessions for bulk deletion or export.
-   **📄 Versatile Export**: Support for `.md`, `.jsonl`, and `.txt` formats.
-   **🌓 Smart Theme Adaptation**: Real-time color sampling ensures readability across all SillyTavern themes.
-   **📱 Cross-Platform**: Fully responsive design for PC, Tablet, and Mobile.
-   
---

**Enjoy your chat management!** 🎉

---

### 💡 提示

如果您在使用过程中遇到任何 Bug，欢迎提交 **Issue** 或 **Pull Request**！如果您觉得好用，请给一个 **Star** 🌟。
