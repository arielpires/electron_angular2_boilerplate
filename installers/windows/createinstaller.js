const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
     .then(createWindowsInstaller)
     .catch((error) => {
     console.error(error.message || error)
     process.exit(1)
 })

function getInstallerConfig () {
    console.log('creating windows installer')
    const rootPath = path.join('./')
    const outPath = path.join(rootPath, 'release-builds')

    return Promise.resolve({
       appDirectory: path.join(outPath, 'App-win32-x64/'),
       authors: 'Ariel Pires',
       noMsi: true,
       outputDirectory: path.join(outPath, 'windows-installer'),
       exe: 'App.exe',
       setupExe: 'AppInstaller.exe'
   })
}
