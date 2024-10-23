package main

import (
	"fmt"
	"log"
	"os"
	"path/filepath"
)

func main() {
	rootDir := "../content/docs"

	err := filepath.Walk(rootDir, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}
		if info.IsDir() {
			indexFilePath := filepath.Join(path, "_index.md")

			fmt.Printf("indexFilePath: %v\n", indexFilePath)
			if _, err := os.Stat(indexFilePath); os.IsNotExist(err) {
				file, err := os.Create(indexFilePath)
				if err != nil {
					log.Print(err)
					return err
				}

				defer file.Close()

				title := info.Name()
				deep := getDepth(path, rootDir)

				template := fmt.Sprintf("---\ntitle: %s\nweight: %d\n---", title, deep)
				file.Write([]byte(template))
				fmt.Printf("Created: %s\n", indexFilePath)
			}
		}
		return nil
	})

	if err != nil {
		fmt.Println("Error:", err)
	}
}

func getDepth(currentPath, rootDir string) int {
	depth := 0
	parent := filepath.Dir(currentPath)

	for parent != rootDir && parent != "." {
		depth++
		parent = filepath.Dir(parent)
	}
	return depth
}
